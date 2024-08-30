---
title: LinkMemo (Browser Extension)
productLink: https://chromewebstore.google.com/detail/linkmemo-simplest-read-la/ldjlfegijibnmliabfelcjpkbklicbhi
productLinkText: Link to LinkMemo
publishDate: 2019-03-01 00:00:00
img: /assets/linkmemo.png
img_alt: LinkMemo logo
description: The simplest 'Read Later' Chrome Extension
tags:
  - Browser Extension
  - Preact
  - TypeScript
---

## Story

When I was a university student, I often felt stressed when learning something new.

<br>

The main issue was that **I couldn’t find the perfect tool for temporarily saving web articles or pages** that caught my interest.

<br>

I frequently used browser bookmarks, but as the number of saved pages grew, it became difficult to manage them. 

Although there were services like Pocket, they didn’t quite fit my needs.

<br>

That’s why I decided to create a new **"Read Later" tool that would be as simple and straightforward as possible**.

This led to the birth of LinkMemo.

<br>

It was a simple Chrome extension that allowed users to save URLs and titles with just one click. 
My blog post about it in Japanese garnered attention, and at one point, **over 1,200 users were using it**.

<br>

Unfortunately, due to a lack of maintenance, it was removed from the Chrome Web Store in 2022, but I resumed development in 2024 and released a new version.

<br>

Even today, around 500 users continue to use it, and it remains my ideal "Read Later" tool.

## Features

![how to](/assets/linkmemo/explain.png)

LinkMemo is the simplest 'Read Later' Chrome Extension. You can easily save the URL and title of any page with a single click.

<br>

- **One Click to Save**: Save the URL and title of the page you are viewing with just one click.
- **One Click to Open**: Open the saved page with just one click.
- **Two Click to Delete**: You can open the delete menu by clicking the trash icon, and delete the saved page with just one more click.

<br>

LinkMemo is initially implemented with Vue.js, but I migrated it to Preact and TypeScript in 2024 to improve the maintainability and readability of the code.