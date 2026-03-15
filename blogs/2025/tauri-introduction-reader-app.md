---
title: "My Personal Experience with Tauri: Building Reader-Project"
date: 2025-02-11T00:00:00+05:30
slug: my-personal-experience-with-tauri-building-reader-project
draft: false
description: In this blog post, I talk about my experience building a desktop app using the Tauri framework.
author: Me
showToc: false
cover: https://raw.githubusercontent.com/rahuldshetty/reader-project/refs/tags/v0.1.0/docs/media/demo-beta.jpg
tags: Web, Tauri, Project
---

[Tauri](https://tauri.app/) is a cross-platform app development framework designed to package your code into tiny, blazingly fast binaries. If you’ve built desktop applications using Electron or Flutter, you should consider trying Tauri for your next project.

In my opinion, Tauri is an excellent starting point for developers coming from a JavaScript background who want to build desktop apps. It supports all popular [web frameworks](https://v2.tauri.app/start/frontend/) like SvelteKit, React, Next.js, and more—so you don’t have to worry about learning a new language or framework.

In addition to a web-based frontend, Tauri uses Rust as its core backend language. If you're like me and haven’t heard much about Rust before—it's a general-purpose programming language focused on performance, type safety, and concurrency (not to be confused with the game [Rust](https://store.steampowered.com/app/252490/Rust/)). This might sound complicated, but don’t worry—it won’t make app development with Tauri any harder (unless you run into some niche issues... more on that later).

# It started with An Idea

![Idea](https://images.unsplash.com/photo-1550418290-a8d86ad674a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

I learned programming by building applications from scratch. Tutorials are great for learning the basics, but true experience (and the horrors of debugging) comes when you start creating something from the scratch while encountering crazy errors. I've had this idea for a long time to build a news/blog aggregator that pulls in the latest articles from various sources and presents them in one place.

During my research, I found that RSS and Atom feed readers closely match my requirements. I also came across a great blog post by Joey—**[I Ditched the Algorithm for RSS—and You Should Too](https://joeyehand.com/blog/2025/01/15/i-ditched-the-algorithm-for-rssand-you-should-too/#medium-1-hackernews)**—where he discusses hosting [Tiny Tiny RSS](https://tt-rss.org/) and fetching the latest updates from various social media sites.  

This blog was one of the key inspirations behind my project, [Reader-Project](https://github.com/rahuldshetty/reader-project) which is an XML feed reader (hence the name) built using modern tech stacks.

# The Development

![Coding](https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww)

Using my prior knowledge in web and app development, I began planning the details of my project:  

- **Frontend**: I've been using [Svelte & SvelteKit](https://svelte.dev/) for some of my recent web projects and found it to be a great successor to React. It addresses many of React's core issues—such as the complexity introduced by hooks—by offering a more reactive and intuitive approach to building web applications.  

  For styling, I chose [Tailwind CSS](https://tailwindcss.com/) to design the UI/UX. It provides a standardized way to style HTML with great flexibility, eliminating the need to write custom CSS.  

- **Backend**: As mentioned earlier, Tauri uses Rust behind the scenes to bridge the gap between the frontend and the operating system. The Tauri team has already identified common patterns in application development and built a [plugin ecosystem](https://v2.tauri.app/plugin/) to simplify things. Thanks to these plugins, you don’t need to work with Rust as much as you might think.  

- **Database**: Tauri provides a [SQL plugin](https://v2.tauri.app/plugin/sql/) that allows the frontend to interact directly with SQL-like databases. For my desktop application, I wanted a lightweight persistence storage option, so I chose SQLite.  

  You can check out the complete code for the [database tables](https://github.com/rahuldshetty/reader-project/blob/master/src-tauri/src/db.rs) and its [frontend logic](https://github.com/rahuldshetty/reader-project/blob/master/src/lib/db.ts) in the source code.  


## Problem: WebView Limitations

![Problem](https://images.unsplash.com/photo-1622522138652-71eb0775c637?q=80&w=2638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)


Tauri uses [WRY](https://github.com/tauri-apps/wry), a cross-platform WebView rendering library responsible for processing your frontend code and rendering it on the UI. It achieves this by providing a common interface to the OS-native web view engine (e.g., on Windows, it uses Microsoft Edge Chromium). However, this WebView is not the same as the one used in traditional web applications. There are certain restrictions, particularly when working with packages that rely on direct DOM manipulation.  

One of my key use cases in *Reader-Project* is displaying a webpage's overview content so users don’t have to open the full page in a browser to read it. This was fairly straightforward, as we can simply make an HTTP `GET` request to fetch the webpage’s raw HTML (as long as there are no CAPTCHAs or bot detection mechanisms). However, since this response is raw, we need to parse the webpage and extract key elements like the title, article body, and images.  

Fortunately, there's already a library that handles this heavy lifting—[*@postlight/parser*](https://github.com/postlight/parser). I integrated it into my app, and it provides a structured JSON output of a webpage’s content, making it easy to display within the application.  

```
{
  "title": "Thunder (mascot)",
  "content": "... <p><b>Thunder</b> is the <a href=\"https://en.wikipedia.org/wiki/Stage_name\">stage name</a> for the...",
  "author": "Wikipedia Contributors",
  "date_published": "2016-09-16T20:56:00.000Z",
  "lead_image_url": null,
  "dek": null,
  "next_page_url": null,
  "url": "https://en.wikipedia.org/wiki/Thunder_(mascot)",
  "domain": "en.wikipedia.org",
  "excerpt": "Thunder Thunder is the stage name for the horse who is the official live animal mascot for the Denver Broncos",
  "word_count": 4677,
  "direction": "ltr",
  "total_pages": 1,
  "rendered_pages": 1
}
```

But here’s the catch—when you bundle the app for distribution using [Tauri’s bundler](https://tauri.app/distribute/), the parsing process fails with the release app. After days of debugging, I discovered that the issue occurred at a specific point in the library code where it used [cheerio](https://github.com/cheeriojs/cheerio) to parse HTML and load it as a DOM. When the app is built, certain aspects of the actual HTML—like the DOM are not directly accessible in Tauri's WebView.  

There is a way to [polyfill](https://www.npmjs.com/package/vite-plugin-node-polyfills) these missing dependencies in Tauri’s WebView, but despite multiple attempts, I couldn’t get it to work. Eventually, I decided to take a different approach - one that relied on Node.js’s actual DOM engine to handle the parsing instead.  

### Solution: Side-Car

![Side Car](https://images.unsplash.com/photo-1613944320367-3ae88ba8c8f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Tauri provides a way to embed external binaries and call them directly from code using the [shell](https://tauri.app/plugin/shell/) plugin. To solve my previous issue, I created a standalone script that takes a webpage URL as a system argument and outputs the parsed content as a JSON string. I was able to test this easily using my favorite package manager/runtime/toolkit—[Bun](https://bun.sh/).  

Before calling this script from Tauri, I needed to convert it into an executable. To do this, I first used [esbuild](https://esbuild.github.io/getting-started/#your-first-bundle) to create a single JavaScript file containing all the necessary Node.js dependencies, including `@postlight/parser`. Next, I used [@yao-pkg/pkg](https://www.npmjs.com/package/@yao-pkg/pkg), a CLI utility that converts Node.js projects into standalone executable files.  

Once the executable was ready, I followed Tauri’s [embedding external binaries guide](https://tauri.app/develop/sidecar/) to bundle it into the app. One important thing to note is that the executable needs to be built separately for different environments. However, `pkg` makes this easy by allowing you to specify the target environment when building.

## Svelte Stores

The app uses SQLite for persistent storage, but we still need to manage additional states that control various aspects of the UI, such as *showing a loading bar*, *displaying popups*, or *maintaining a list of articles*, etc. For state management, Svelte provides [stores](https://svelte.dev/docs/svelte/stores), which function similarly to [Redux](https://redux.js.org/) by offering a centralized state management system for building complex applications.

## Persisting User Settings (settings.json)


In addition to Svelte’s built-in stores, Tauri provides its own [store](https://v2.tauri.app/plugin/store/#lazystore) for persisting key-value information. I used this store to save application configurations such as *post refresh time* and *dark mode/light mode* (the latter isn’t in use yet but is planned for the future). This store allows key-value pairs to be stored in a simple JSON text file, which can also be easily modified externally if needed.  

# Reader Project

![App](https://raw.githubusercontent.com/rahuldshetty/reader-project/refs/tags/v0.1.0/docs/media/demo-beta.jpg)

This brings us to the initial release of my app, "Reader-Project" that currently features the following:

- 📌 Add & Manage Feeds - Easily add custom RSS feeds.
- 🔄 Auto-Refresh - Refresh feeds periodically while avoiding unnecessary requests.
- 📌 Read/Unread Tracking - Keep track of read articles.
- 📁 Offline Storage - Persist articles in an SQLite database.
- 🎨 Modern UI - Built with Tailwind CSS for a smooth experience.
- 📰 Content Extraction - Load and display article contents efficiently.

There are few more items planned in [backlog](https://github.com/users/rahuldshetty/projects/4). I am also open to community feedbacks and welcome contributions to the [project](https://github.com/rahuldshetty/reader-project).

## Installation

You can download the app today from Github: [Release v0.1.0](https://github.com/rahuldshetty/reader-project/releases/tag/v0.1.0)


## Documentation

The documentation for this project is available at [https://rahuldshetty.github.io/reader-project/](https://rahuldshetty.github.io/reader-project/). 

🚧 As of writing this blog, the documentation is still under construction. 

