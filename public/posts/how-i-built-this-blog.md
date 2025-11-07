---
title: How I Built This Blog
excerpt: 
categories: [STEM]
publishedDate: "2025-11-09T12:00:00"
tags: Next.js, React, Typescript, CSS, Vercel, MD, ESLint, Prettier
thumbnail: "/images/vscode-ss.jpg"
---

*A little preamble here, but skip to here if you want to get straight to the technical details.*

Seventeen year old, high school Annabelle had way too much time on her hands. Maybe she should've spent more time studying, but instead she spent her time reading magazines, fashion websites, and blogs. There's only so much content to consume though before it gets dull and creating the content seems more interesting. 

I created Belle Reve blog V1 during winter break of grade twelve. I didn't know how to create my own website, let alone code, but I was determined to have something of my own. The easiest way to do that then was WordPress. The first year was cheap since I had a trial, and by the second year I switched my website host (I don't even remember what I switched to). But as my subscription for the second year was terminating, I had enough. My main reasons for coding my own blog were:
- total customization
- no cost

Seems great, right? Except I had little coding experience and I didn't even know where to start. My first plan was to transfer my WordPress site with Jekyll. Except the templates were ugly and not dynamic. 

After some deliberation and consulting with my brother, Jonathan, I decided to code it from scratch. I owe a big part of this final product to my brother. He advised, debugged, and encouraged me throughout the process. It defintely wasn't smooth, and the entire process took almost eleven months. In retrospect, I could've done it in maybe a month of focused work. I got discouraged along the way, and even when progress stalled, he never failed to check up on me and that in turn boosted me to the finish line.

I've learned so much in the process. Skills that'll carry throughout my career. Reading documentation, debugging, and most importantly, problem solving. 

This post walks through how I designed and built the new version, and what I learned along the way. I split it up into nine sections:
1. Planning the Rebuild
2. Tech Stack
3. Project Structure
4. Components and UI
5. Markdown Parsing
6. Styling System
7. Deployment
8. Challenges and Lessons Learned
9. What's Next

--
# 1. Planning the Rebuild

I started by sketching what I wanted on GoodNotes. Below are some images of my website planning. I had a lot of fun with the full creative control. I planned the layout, but also sectioned off parts of the website that I could later code into components.

![first ui sketch](/images/ui-sketch-1.png)

*version 1*

![second ui sketch](/images/ui-sketch-v2.jpg)

*version 2*

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



# 4. Components and UI

# 5. Markdown Parsing

# 6. Styling System

# 7. Deployment

# 8. Challenges and Lessons Learned
- markdown parser
- transferring posts

# 9. What's Next

--

By the way, is the thumbnail image meta or what?