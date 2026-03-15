---
title: "I created a new blog framework from scratch (again)"
date: 2026-03-15T00:00:00+05:30
slug: inscribe-new-blog-framework
draft: false
description: In this blog post, I talk about my experience building a new static site generator called Inscribe.
author: Me
showToc: false
cover: /static/blog/2026-03-16-ssg.jpg
tags: Web, Blog, Project
---

One thing about blogging is that there are many options to choose from depending on your content, target audience, and preferences. Traditionally, these systems are known as **Content Management Systems** (CMS for short), which allow you to create and manage your content in a database and display it on a website. You can manage authors, categories, tags, and many other details; moreover, you can create content from scratch without coding. I've used some of these solutions in the past, and they are great for running news or company websites (small to medium-sized). A well-known product in this space is **WordPress**, which runs on PHP and can be easily self-hosted. With its massive ecosystem of plugins and themes, it is a great choice for most users.

But for a solo developer like me, maintaining a full-stack CMS is overkill when I rarely post and have fewer than 1,000 visitors a month (mostly scrapers). I built a static site generator in the past, which my old blog used. It was built with [Svelte 4](https://svelte.dev/) and [SvelteKit](https://svelte.dev/kit). I mainly wanted to learn the Svelte framework, so I took on the challenge of building my own static site generator. It worked great: I maintained content in **.md** files along with HTML, and it built a single-page static application that I could easily publish on GitHub Pages. The performance was excellent, and thanks to Tailwind CSS, I was able to quickly apply basic styling to make my blog look like something on [Devpost](https://devpost.com) or [Medium](https://medium.com).

### My experience with my first SSG (Svelte 4)

Svelte is great when it comes to performance and compatibility with most JS libraries. I put together a custom parser for my markdown files, which allowed me to plug in and render a complete notebook in my blog posts. This was very nice, but I never got to use it as extensively as I had imagined.

After building the framework for a while, and due to some poor design decisions I made along the way, my codebase started to get messy. I initially managed all my content in markdown files under a specific content folder. But over time, this changed as I made more enhancements to my codebase. My content was getting tangled with the SSG's source code. I used SvelteKit's directory structure to maintain some static files and used hardcoded JS to fetch and present data on my home page.

Since my codebase was bundled with my blog content, it meant that if I wanted to use my SSG on another website, I would have to maintain separate copies. Since I was rarely posting, this didn't bother me much at first. However, I knew I didn't want to continue this way, especially if I wanted to reuse my framework across multiple sites in the future.

### Building Inscribe: Simple Static Site Generator

![Inscribe](https://raw.githubusercontent.com/rahuldshetty/inscribe/main/docs/static/inscribe.png)

[Inscribe](https://github.com/rahuldshetty/inscribe) is a simple static site generator that I built to replace my old one. It is built with TypeScript and Bun and uses the CLI building library [Clerc](https://clerc.so1ve.dev/). I wanted to build a simple SSG that uses markdown files for content and allows users to customize the theme, layout, and even add their own pages to the site.

Inscribe isn't a brand-new idea; instead, it takes inspiration from existing blogging and documentation tools like [Hugo](https://gohugo.io/documentation/) and [Docusaurus](https://docusaurus.io/).

There are a couple of aspects to consider when building an SSG for documentation and blogs. All these frameworks use markdown files for content management. Each markdown file contains a header section (front matter) which contains the metadata associated with the page. Inscribe follows a similar pattern with its blog pages consisting of the following metadata:

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

Metadata like the slug and title are also used to generate links and page titles for the website.

The framework uses template-based rendering using [Nunjucks](https://mozilla.github.io/nunjucks/). Each part of the site is broken down into components in the [layouts](https://github.com/rahuldshetty/inscribe/tree/main/template/layouts) folder. If you have used [Jinja2](https://jinja.palletsprojects.com/) in Python, then this is exactly the same. Nunjucks is a project by Mozilla and enables you to create template-driven rendering for JS/TS based applications. Inscribe lets users copy and customize this _layout_ to create their own custom themes, including the homepage.

Nowadays, modern CSS frameworks use typography systems. This basically defines what fonts (including types, weights, colors, styling, etc.) should be used and where. Inscribe lets you specify custom typography through [themes](https://github.com/rahuldshetty/inscribe/tree/main/template/themes). Themes not only help set the typography but also control the color scheme used in the site.

### Coding Experience with Antigravity (AI IDE)

> Note: I will be using _AI_ and _Agents_ interchangeably, but they both refer to tools or services that can help with writing code, debugging, testing, etc.

I've been using AI for most of my coding, but I did not want to outsource the entire work of building the SSG from scratch. Instead, I started the project from scratch and used AI to build each component and feature one by one. This process can be tedious, but it ensures that a human (me) is fully in the loop, evaluating every code change made by the AI.

I've been using [Antigravity](https://antigravity.google/) (formerly known as Windsurf before Google's acquisition). Similar to Cursor, it provides a VS Code-based editor with AI Agent integration for inline coding, autocomplete, and chat-based interactions. I am using the free tier via my Google account (which is required), and it comes with access to six top-tier models. Token usage is limited per quota and resets every week.

I switched between almost all of the models as I was exceeding the budget with many of them. I'm not sure why some models consume so many tokens, considering the codebase wasn't very large to begin with. Then again, I would mostly start a new conversation after implementing each feature, which might have reset the context. Regardless, for a free offering, it works great and helped me reduce development time to one week—down from the month it took to build with Svelte 4.

One thing I found frustrating was when a model failed abruptly without retrying. It forced me to manually retry or switch models, which ended up costing extra tokens. Fortunately, if you have multiple Google accounts, you can switch between them to get more tokens (though I wouldn't recommend abusing this as it's likely against the ToS).

I had over 30 conversations, and in more than 90% of them, I had the AI handle the initial planning before building the feature. This planning-driven development helps create a spec that can be customized before starting code generation.

## Conclusion

In conclusion, I was able to "vibe-code" a new static site generator from scratch for this blog. AI-driven coding helped significantly reduce the overall effort, though at times it would refactor so many things that I might have lost changes without source control. I plan to continue improving the SSG, as it is still in the early phases. My roadmap includes SEO optimization, RSS feeds, Google Analytics integration, and several other capabilities to make it a complete blogging platform.
