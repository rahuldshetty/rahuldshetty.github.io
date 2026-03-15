---
title: "I created a new blog framework from scratch (again)"
date: 2026-03-15T00:00:00+05:30
slug: inscribe-new-blog-framework
draft: false
description: In this blog post, I talk about my experience building a desktop app using the Tauri framework.
author: Me
showToc: false
cover: https://raw.githubusercontent.com/rahuldshetty/reader-project/refs/tags/v0.1.0/docs/media/demo-beta.jpg
tags: Web, Blog, Project
---

One thing about blogging is that we have so many options to choose from depending on your content, content writers and the audient target. Traditionally these systems are called as **Content Management Systems** (CMS for short), which basically lets you to create and manage your content in a database and display it on a website. You can manage the authors, categories, tags and many other details for your content, and moreover you can directly create the content from scratch without coding. I've used some of these solutions in the past and they are great when you are running a website for your news channel, company website (small, medium level). A well known product in this space is **WordPress**, which runs on PHP and you can easily self-host on a web server. With huge eco-system of plugins and themes, it is a great choice for most of the users.

But for a single developer like me, maintaining a fullstack CMS is an overkill when I rarely post and have less than 1000 users a month (mostly scrapers) visiting this blog. I've built a static site generator in the past, which my old blogpost was using. It was built with [Svelte 4](https://svelte.dev/) and [SvelteKit](https://svelte.dev/kit). I mainly wanted to learn Svelte framework, so I took on the challenge to build my own static site generator. It did work great, where I used to maintain the content in **.md** files, along with HTML and also build me a Single-Page static application that I could easily publish in Github Pages. The performance was nice, and thanks to tailwind.css, I was able to quickly use basic styling make my blogpost look like something posted on [devpost](devpost.com) and [medium](medium.com).

### My experience with my first SSG (Svelte 4)

Svelte is great when it comes to performance and support for most of the JS libraries out there. I was able to put together a custom parser for my markdown files which allowed me to plugin and render a complete notebook in my blogpost. This was very nice, but I never got to use it to full extent as I imagined.

After building the framework for some time, and due to my bad decision that I made along the way, my codebase started to get messy. I initially was managing my all the content in a markdown files under a specific content folder. But overtime, this changes as I made more enhancement to my codebase. My content was getting tangled with source code for the SSG generator. I used SvelteKit's directory structure to maintain some of the static files, use hardcoded JS to fetch data to present it on my home page and so on.

Since my codebase went with my blog content, that means that if I need to use my SSG on another website, then I would need to maintain my SSG with that new website. But again I was rarely posting, so this didn't bother me much. But I know I didn't want to go through this route especially if I want to re-use my framework across multiple sites in the future.

### Building Inscribe: Simple Static Site Generator

![Inscribe](https://raw.githubusercontent.com/rahuldshetty/inscribe/main/docs/static/inscribe.png)

[Inscribe](https://github.com/rahuldshetty/inscribe) is a simple static site generator that I built to replace my old SSG generator. It is built with TypeScript, Bun and uses CLI building library [clerc](https://clerc.so1ve.dev/). I wanted to build a simple static site generator that uses markdown files for content and also allows users to customize the theme, layout and even bring in their own pages to the site.

Inscribe isn't a brand new idea, but instead it takes inspirations from existing blogging and documentation tooling out there like [Hugo](https://gohugo.io/documentation/) and [Docusaurus](https://docusaurus.io/).

There are couple of aspects when it comes to building a SSG for documentations and blogs. All these frameworks uses markdown files for content management. Each markdown file contains an header section which has the metadata associated with the page and the content. Inscribe also follows a similar pattern with its blogpage consisting of following metadata:

```
---
title: 'The Future of Web Design: Glassmorphism and Beyond'
author: 'Alex Rivers'
date: 2026-03-14
slug: future-of-web-design
description: 'Exploring the next generation of digital aesthetics, from glassmorphism to dynamic micro-animations.'
cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'
cover_alt: 'A beautiful abstract glass-like background with vibrant colors.'
tags: 'design, trends, 2026, web'
weight: 10
showToc: true
draft: false
---
```

The metadata like slug, title are also used in direct HTML to generate links and head titles for the webpage.

The framework uses a template based rendering using [Nunjucks](https://mozilla.github.io/nunjucks/). Each part of the site is broken down into componentss in the [layout](https://github.com/rahuldshetty/inscribe/tree/main/template/layouts). If you have used [Jinja2](https://jinja.palletsprojects.com/) in Python, then this is exactly the same. Nunjucks is a project by Morzilla and provides you to create template driven rendering for JS/TS based applications. Inscribe lets users to copy and customize this _layout_ to create their own custom layouts for their site including customizing homepag.

These days, modern CSS framework use a typography system. This basically tells what type of fonts (including their type, weights, colors, styling, etc) needs to be used where. Inscribe lets you specify custom typography through [themes](https://github.com/rahuldshetty/inscribe/tree/main/template/themes). Themes not only help set the typography but also control the color scheme used in the site.

### Coding Experience with Antigravity (AI IDE)

> I will be using _AI_ and _Agents_ interchangibly, but they both mean a tool or service that can help with writing code, debugging, testing, etc.

I've been using AI for most of the coding, but I did not want to completely give away the entire work of building the SSG from scratch with AI. Instead I start buiilding the project from scratch and try to use AI to build each component and features one-by-one. This process can be tedious but it ensures that a human (which is me) is in the loop completely evaluating every code changes made by the AI.

I've been using [Antigravity](https://antigravity.google/) (foremely known as windsurf until Google's acquisition). Similar to cursor, it provides a VS Code editor with AI Agent integration where you can do in-line coding, auto-completele and chat-based interaction to do programming. I am using a free-tier based subscription through my Google account (which you will must need) and it comes with 6 top tier models for usage. The token usage is limited once you complete your quota, but it gets reset every week.

I had almost switched between all of the models, as I was going over the budget with many of them. I don't know why most of the models end up making use of so many tokens, considering the code-base wasn't too large from beginning. But again, I would mostly start a new conversation everytime after implementing a feature, which might be reseting the context. Anyway for free-tier offering, it works great and indeed helped me reduce the development time to 1 week, unlike previously which took me around a month for building from scratch with Svelte 4.

One thing I did find very frustrating at times when model abruptly failed, without even retrying. It made me manually retry, or have me switch between models. This ended up costing me some of the tokens as well. Luckily for me, if you have multiple Google accounts, then you can switch between them to get more tokens. (But do not abuse it, as its probably against ToS).

I had almost **over 30** conversations with each over 90% of them where I had it come up with initial planning and then build a feature. This **planning** driven development helps to create a spec and you can customize the spec before really starting the code generation.

## Conclusion

In conclusion, I was able to vibe-code from scratch a new Static-Site Generator for my new blog (which you are reading right now). AI driven coding has helped a lot to reduce the overall effort, but at times it would also end up re-factoring so many things that without source control, I would have lost few changes. I plan to continue improving the SSG as it still in early phase and I plan to bring SEO optimization, RSS feed, Google Analytics integration and few more capabilities in the future to make it a complete blogging platform.
