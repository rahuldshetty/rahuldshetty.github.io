---
title: "Enhance SEO ratings with Social Meta Tags"
date: 2023-10-31T00:00:03+05:30
slug: enhance-seo-ratings-with-social-meta-tags
draft: false
description: In this blog post, I go over my learning about the techniques available to improve SEO visibility when sharing your blog/webpages on different social media.
author: Me
showToc: true
cover: https://upload.wikimedia.org/wikipedia/commons/e/ea/Demystifying_Search_Engine_Optimization_-viz_notes-_-wcyvr_%288084222814%29.jpg
cover_alt: "Credit: <a class="underline underline-offset-4" href="https://en.wikipedia.org/wiki/File:Demystifying_Search_Engine_Optimization_-viz_notes-_-wcyvr_(8084222814).jpg">Wikipedia</a> "
tags: SEO, Web, HTML, Tutorial
---

# Open Graph (OG) Protocol

The [Open Graph](https://ogp.me/) protocol is a set of standards developed by Facebook (now Meta) to standardize the use of metadata within a webpage. It defines a set of meta tag properties for defining contents like title, description, image, URLs, etc., to represent an entity that can be referred to by social media websites to render that particular page.

- It is adopted by many social media sites and platform applications.
- It is developer-friendly as it uses the HTML `<meta>` tag to define the OG properties for the webpage.
- The standard supports different webpage objects like Articles (News/Blog) and media objects like Audio, Video.

## Social Meta Tags:

You can refer to the [Open Graph](https://ogp.me/) site to find the complete list of properties.

To define a tag for your website, you will need to use the HTML **meta** tag as shown below. 
The *<key>* and *<value>* properties are replaced with the key from OG specification and value based on your website content.

OG Format: 
```html
<meta property="og:<key>" content="<value>" />
```

Some metadata properties contain metadata of its own field. For example, consider the following code snippet:

```html
<meta property="og:video" content="https://example.com/movie.swf" />
<meta property="og:video:secure_url" content="https://secure.example.com/movie.swf" />
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video:width" content="400" />
<meta property="og:video:height" content="300" />
```

The *og:video:width* and *og:video:height* are properties related to the og:video content. In the case of the above example, these properties will help social media websites render the video in a developer-specified resolution to avoid any aspect ratio issues.

![Social Meta Tags](https://programmingpercy.tech/_app/immutable/assets/img4-7a1be29e.webp)


## Twitter's Additional Tags

Twitter (now X) also uses the OG format to display content and, in addition, it offers its own set of meta tags for developers to render content on the platform.

You can find the complete list of available properties in their [official](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) documentation.

## Common Tags for your Website



```html
<!-- Open Graph Protocol -->
<meta property="og:site_name" content="RDS's Blog" />
<meta property="og:title" content="{data.post.title}" />
<meta property="og:type" content="article" />
<meta property="og:type" content="{data.post.description}" />
<meta property="og:image" content="{data.post.metadata.cover}" />
<meta property="article:published_time" content="{data.post.metadata.date}"/>

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
```

## Evaluate SEO Ratigs

**[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)**: This tool lets you visualize how a webpage will be rendered on Facebook platform while sharing the link to the page. This is a great tool as it provides quick analysis and breakdown for the website contents.


![Sharing Debugger](https://peacocksoftware.com/sites/peacocksoftware/files/2019-07-09%2016_17_24-Sharing%20Debugger%20-%20Facebook%20for%20Developers.png)