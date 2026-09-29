---
title: "Setting Up My First Homelab with a Mini PC"
date: 2026-09-30T00:00:00+05:30
slug: minipc-homelab
draft: false
description: My experience choosing the hardware and setting up a homelab on a mini PC, from selecting the hardware to configuring the software and services.
author: Me
showToc: true
cover: 
tags: Blog, Project, Homelab
---

A homelab is a personal and self-managed server environment that one can use for self-hosting, experimentation and learning. It can start with as simple as running a webserver on mobile devices to setting up entire racks full of individual PC nodes.

I personally have a laptop which I use for my daily driver and personal projects, and a desktop PC dedicated for gaming. Both of them were of good compute configuration but due to their own objectives it did not made sense for me to tinker around with them for homelab.

## Finding the right Homelab system

My initial plan was to get [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) which has been quite popular for setting up these small projects and hacking. It comes with powerful ARM based processor and draws as little as 10-20W power draw which is great when it comes to power efficiency per compute. Considering the recent hike in electronics especially ram and storage, Pi5 retail price costs about ₹34,449 (360$). At this pricing we can get laptop which offer better compute that makes this option not feasible. It is still great if you need the GPIO, small factor, power efficiency for your use-case.

This actually led to look for next tier of devices in this category but smaller than actual PCs which is Mini PC. These are small form factor PC that comes with the power of desktop PC at the size smaller/closer to laptop units. Some of these provide upgrade option allowing to increase RAM, HDD, SSD and PCIe devices. Depending on  how many services you plan to run, you might want to adjust your compute requirement for the machine. 

### AOOSTAR GEM12 MAX Mini PC 

I purchased [AOOSTAR GEM12 MAX Mini PC ](https://www.desertcart.in/products/710010618-aoostar-gem12-max-mini-pc-ryzen-7-8745hs-8c-16t?source=order) as for my first Mini PC system. Unforuntately it was not something sold in India, so I had to get it imported. Desertcart has been a great experience, which suprisingly also had smooth experience from purchasing to getting lively updated. It took me just 10-12 days to get my hands on the system.

![AOOSTAR GEM12 MAX Mini PC](/static/blog/2026-03-16-ssg.jpg)

Configuration:
- **CPU**: Ryzen 7 8745HS (8C/16T, 3.8 GHz - 5.1 Ghz)
- **GPU**: Integrated Radeon 780M
- **RAM Capacity**: Dual-channel DDR5 5600MHz (Expandable to 128GB)
- **SSD Capacity**: Dual-channel M.2 2280 PCIe4.0x4 SSD (Expandable to 8 TB)
- **Power**: 45W-70W 

The configuration I went with was the barebore that did not come with RAM and SSD. So I ordered 1x [Corsair Vengeance DDR5 16GB DDR5-4800Mhz](https://computechstore.in/product/corsair-vengeance-ddr5-16gb-4800mhz/) and [WD Blue SN5100 1TB](https://computechstore.in/product/western-digital-wd-blue-sn5100-1tb/) for the machine. I still have one slots left for each components if I were to choose upgrading the compute in the future (hopefully compute price drops).

Another reason for this purchase of this specific Mini PC is that it comes with great number of ports including USB 4, and an [OCulink](https://www.virtualizationhowto.com/community/mini-pcs/what-is-oculink-connection-for-egpu/) port for connecting external PCIe devices. This makes it great to connect external GPUs to Mini PC making it further extendible options that you normally wouldn't find. This is for the future, when I get an option for a high VRAM GPU card through which I can extend this Mini PC for running Local LLMs.

## My Software Stack

### Bazzite (OS)

I came [Bazzite](https://docs.bazzite.gg/) while looking for OS that makes it easy for gaming on Linux. Most of the times, you will need personally install, handle Linux driver software for your respective GPUs and then software application to run windows games. It is built on Fedora Atomic Desktop, where the core system is read-only (immutable). Any modification has to be done using certain tools and commands that writes user config, modifications, executables into user directory. 

My personal experience with using this has been flawless, drivers all packed into the kernel, podman to easily run container apps, and pre-bundled game launchers if you want to start gaming.  

### Services

The services below are managed inside Podman containers with Quadlets. Podman Quadlets offers declarative way to manage configuration and also has build-in systemd integration to manage container life-cycle. Each application services below (other than tailscale) are managed as containers.

### tailscale

For Private VPN, tailscale default plan is great starting option. It allows you to add personal devices and manage your own VPN. Bazzite comes with tailscale out of the box, so it is only handful of commands to get this running:

```bash
ujust enable-tailscale
sudo tailscale up  # Redirects to login online
```

Project: [tailscale](https://tailscale.com)

#### traefik

I'd have various services running in homelab and managing the routes for individual can become cumbersome. Project traefik offers reverse proxy and load-balancer solution at enterprise scale to manage application networking. It offers service discoverability by allowing users to provide labelled configurations for their podman containers, and automatically register matching routes as per the label. This makes the networking management to be easily handled at each application level through simple container labels.

Project: [traefik proxy](https://doc.traefik.io/traefik/getting-started/docker/)
Config: [minipc/traefik](https://github.com/rahuldshetty/homelab/tree/main/apps/traefik)

#### Glance Dashboard

Homelab without a dashboard for homepage is lacking, so this is where glance comes in. As the name suggests, the project lets you to glance all your feeds through a single dashboard. It is highly customizable, has widget plugin ecosystem and minimalistic application.

![Glance Homepage](https://raw.githubusercontent.com/rahuldshetty/homelab/main/docs/glance.png)

Project: [glance](https://github.com/glanceapp/glance)
Config: [minipc/glance](https://github.com/rahuldshetty/homelab/tree/main/apps/glance)

#### QBittorrent

One of the main reason for setting up homelab is to use it to torrent data without having to do it over on my laptop or PC, which most of the times shuts down or sleeps thanks to Windows. With making this as a Linux service, and also making it remotely accessible, I can download large data easily and then later transfer them internally over LAN. 

Bazzite uses CoW for most of its file system by default for its own optimization, but for torrent use-case this can be a terrible option considering multiple chunks of writes it has to manage during downloads. One of the things is to make sure to disable this in the download directory with command:

`chattr +C /path/to/dir`

Config: [minipc/qbittorrent](https://github.com/rahuldshetty/homelab/tree/main/apps/qbittorrent)


## What's next?

- Running local LLMs/AI on CPU. With current compute, it should be able to handle 3-5B model weights on CPU. 
- External GPU for hosting larger models. This would depend on my luck to be able to acquire large VRAM GPU in today's market (even used cards).
- Security: I have not dwelled much into securing systems in the past other than following some best practices for container and application level. But definitely want to ensure more hardening at OS security at networking level.
- Kuberetes: While we have podman containers running on the system, a lightweight K8s with [k3s](https://k3s.io/) could be interesting to try out.

Code: [homelab](https://github.com/rahuldshetty/homelab)