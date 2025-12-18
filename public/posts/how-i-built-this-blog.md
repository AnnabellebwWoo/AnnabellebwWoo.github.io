---
title: How I Built This Blog
excerpt:
categories: [STEM]
publishedDate: "2025-12-21T12:00:00"
tags: Next.js, React, Typescript, CSS, Vercel, MD, ESLint, Prettier
thumbnail: "/images/vscode-ss.jpg"
---

_A little preamble first, but skip to here (INPUT LINK) if you want to get straight to the technical details._

In high school, I spent my time reading magazines, fashion websites, and blogs. There was only so much content I could consume before it got dull and creating the content seemed more interesting. I enjoyed writing, fashion, and wanted to have my own space online

I created Belle Reve Blog V1 during winter break of grade twelve. I didn't know how to create my own website, let alone code. But I was determined to have something of my own. WordPress worked well back then because it was simple and inexpensive, but when the subscription renewed in university I could no longer justify paying the price increase. I also felt limited in what I could customize. I wanted better control from features to design.

My first plan was to transfer my WordPress site with Jekyll. Except the templates lacked functionality and didn't allow me to customize layouts the way I envisioned.

So I decided to built it myself. Even though I wasn’t in computer science, and my only coding experience was some basic Python/Java and hackathon exposure, this became an engineering challenge: design a functional, visually appealing, maintainable website with almost no budget and limited technical experience.

I owe a big part of this final product to my brother. He advised, debugged, and encouraged me throughout the process.

The final repo can be found [here](https://github.com/AnnabellebwWoo/AnnabellebwWoo.github.io).

This post walks through how I designed and built the new version, and what I learned along the way. I split it up into nine sections. Click the links below if you'd link to skip to a particular topic:

# INPUT LINKS

1. [Planning the Rebuild](#1-planning-the-rebuild)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Components and UI](#4-components-and-ui)
5. [Markdown Parsing](#5-markdown-parsing-and-slugs)
6. [Styling System](#6-styling-system)
7. [Deployment](#7-deployment)
8. [Challenges and Lessons Learned](#8-challenges-and-lessons-learned)
9. [What's Next](#9-whats-next)

--

# 1. Planning the Rebuild

I started by sketching what I wanted on GoodNotes. Below are some images of my website planning. I had a lot of fun with the full creative control. I planned the layout, but also sectioned off parts of the website that I could later code into components.

![first ui sketch](/images/ui-sketch-1.png)

_version 1_

![second ui sketch](/images/ui-sketch-v2.jpg)

_version 2_

For the back-end, my brother recommended having blog posts in markdown files and parsing each file to fit into a React.js "blog post" component.

# 2. Tech Stack

- Next.js (App Router): routing, rendering, performance
- React + Typescript: components
- CSS modules: styling
- Vercel: deployment and hosting
- MD: write posts in markdown
- ESLint + Prettier: code formatting and consistency

# 3. Project Structure

The structure is based on the [Next.js app router]("https://nextjs.org/docs/app").

Mine ended up looking like this:

![file structure](/images/file-structure.png)

At the root I have my app, api, components, lib, and public.

In the app folder, I have my pages, "about-me" and "blog". Within "blog", I have "post", "category". Every page and component has two types of files: typescript files (.tsx) and a css module file (.css). Typescript files may be layout.tsx or page.tsx. Page files contain unique content and components. Whereas layout files provide the shared UI across multiple pages. For example, on my website, the header and footer is consistent across every single page. But the content between those components varies. There may be a blog article, the about me page, the home page with all articles, or more. There's separate rendering for blog posts and categories. "Blog/Category" filters blog posts and "Blog/Post/[slug]" shows an article. I have it automated and below in "5. Markdown Parsing and Slugs" I'll go into detail.

The api folder is for retrieving information.

Components are reusable parts I use throughout the app. I have BlogCard, BlogLayout, Footer, Header, Intro, and SideBar.

The lib folder contains three files, my markdown parser, a file to indicate types of inputs, and a file that holds functions that I use throughout the app. Functions include fetching all posts, fetching posts by slug, fetching posts by category, fetching recent posts, and more.

Public contains my posts and images. All my posts are markdown files that fit the template below. Once I write my posts fill the markdown template, my parser takes care of the rest and fits it into blog cards and blog posts.

```md
---
title: "Rebuilding My Blog From Scratch"
date: "2025-07-11"
category: "misc"
excerpt: "Behind the scenes of coding Belle Reve."
---

Your content here...
```

# 4. Components and UI

- BlogCard is the display for every article from the home page and each category. It shows the title, thumbnail image, date, cateogry, and tags.
- BlogLayout shows the full article with the same content as BlogCard, but also shows the actual article body and buttons for the previous and next article.
- Footer is the dark grey box at the end of every page that has links for categories and social contacts.
- Header is at the top of every page and has the title (Belle Reve, a lifestyle blog) and categories. Header is actually made up of the two components (Logo and HeaderLinks) so mobile versions have the side bar hamburger menu to include the header links.
- Intro is my little blurb that only shows on the home page. It says: Welcome to my blog! I write about all things beauty, STEM, and my life as a student.
- SideBar differs between screen sizes. It always shows the featured post, social contact links, and two most recent posts. But on screens smaller than 1024 px, it also has the header links (categories and about me page). Smaller screen sizes have a hamburger menu and full screen overlay to be more responsive. If I didn't have the hamburger menu, the smaller screen sizes would be overcrowded with a static sidebar and page content.

# 5. Markdown Parsing and Slugs

I decided to create a custom Markdown parser to convert my markdown files directly into blog articles. It differentiates the body content from the front matter. It can extract information the BlogLayout file requires: title, date, category, and excerpt.
types.ts is a definitions file also within _lib_ that outlines the type of data used throughout my project.

# 6. Styling System

I used css modules throughout my project. Every page requires a corresponding .module.css file, but it keeps my code organized and it's easy to go back and edit.

# 7. Deployment

I originally planned on hosting on Github Pages since it was the first free option to deploy my code. However, GitHub Pages only supports static apps. I then decided to deploy on Vercel, and I love it. It was very easy to configure with my Github repository and domain. It also provides analytics, speed insights, logs, and more useful information.

# 8. Challenges and Lessons Learned

At first, I fell into the trap of trying to master all the technologies before starting. Getting lost in the tutorial black hole of YouTube completely stalled my progress. Eventually I had to dive into the deep end and get started, no matter how uncomfortable I felt. I later learned that the scarier it felt, the more I learned _(no pain, no gain)_. Whenever I got stuck, I broke problems into solvable pieces, consulted Stack Overflow, and asked for help. Some problems were tedious, like migrating old posts while others were complex, like designing a system to convert Markdown into a consistent visual template.

The largest challenge I faced was configuring the markdown parser.

The app router...

# 9. What's Next

As I continue creating content, I'd like to implement more STEM topics. My interests have evolved since high school and as I continue to post about beauty and lifestyle, I'll also discuss materials science and engineering.

New features will also be implemented like a search bar, pagination, dark mode, jump to the top button, and more. Feel free to view the issues and which one I'm currently working on at the [repo](https://github.com/AnnabellebwWoo/AnnabellebwWoo.github.io).

Feedback, suggestions, questions, and comments are always welcome and can be directed to the [feedback form](https://forms.gle/8izwQaCbUymjEjbcA). Or feel free to message me on [instagram](https://www.instagram.com/bellereveblog/) or [email](mailto:bellereveblog@gmail.com)
