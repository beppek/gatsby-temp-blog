---
title: 'How to quickly publish a blog using Gatsby and Netlify'
date: '2019-02-15'
tags: ['JavaScript', 'React', 'Gatsby', 'Netlify']
---

While working on my own site, which will be built using both [GatsbyJS](https://www.gatsbyjs.org) and [Netlify](https://www.netlify.com/), I decided to just quickly get a temporary blog up and running in the meantime. So I scanned through the starters over at Gatsby and settled for the tech blog starter because it allowed me to include links to my LinkedIn and Github pages, which allows people to connect directly with me and my code.

Gatsby and Netlify are really cool tools which work perfectly together to statically render dynamic content. You could kind of call Netlify a cms, but it doesn't use a database like WordPress. This has two main benefits:

1. It is a lot faster. And by a lot I really mean **a lot**. Once you have completed your site, please go ahead and run a Google Lighthouse test and see for yourself.
2. It is a lot more secure. Since there is no database which may be hacked you only need to worry about your Github (or Gitlab) account being hacked. While that's not impossible, it is still far less likely that the many other attack vectors that are potentially open on a standard WordPress server.

Ok, so you're convinced already, that's why you even came here in the first place, isn't it? Alright then, here's a quick guide on how to get started.

## Select your starter

Assuming you already have a Github account, the first step is to go over to the [starters page at gatsbyjs.org](https://www.gatsbyjs.org/starters?v=2) and select one that you like. Have a look at the demos and check the source code. The last one is by far the most important aspect, even if you are only going to use the starter for a temporary blog &mdash; like in my case &mdash; messy code is still going to present a problem for all the tweaks you are inevitably going to want to make.

## Deploy to Netlify

Once you've selected a starter you like &mdash; either with all the bells and whistles pre-installed, or the most bare bones approach there is which will allow you to develop your own site completely from scratch &mdash; click the Netlify button/link to deploy the starter to Netlify. This will bring you over to Netlify where you will be asked to connect to Github (or GitLab if you prefer that). Once you have allowed Netlify access to your Github account it will create an SSH key and add that to you Github account. This step allows Netlify to use Github as the source from which it automatically builds your site. Now go over to your Github page, find the new repository and clone it (it may take a few minutes before the repository has been updated, you just need to wait for Netlify to finish the build process). Now you have a local copy and can start developing.

Follow the instructions in [Gatsby's excellent documentation](https://www.gatsbyjs.org/docs/) to get started with developing locally with Gatsby. They have described the process far better than I can.

## Make changes

Once you are fully up and running with a local repo you can start making changes. Once you are satisfied, just commit the changes and push to your repo. Github will fire some webhooks to Netlify, notifying Netlify of the recent changes. This in turn will make Netlify pull the code from Github again and redeploy the site. It's as simple as that to get continuous delivery working for sites in 2019. It sure is a great time to be a JavaScript developer.
