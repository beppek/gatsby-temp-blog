---
title: 'New Project Deployed - YMade'
date: '2019-02-08'
tags: ['JavaScript', 'Gatsby', 'Project', 'Netlify']
---

I recently had the opportunity to develop and deploy a landing page for a local builder here in Melbourne. My friends over at [Susu Studios](http://www.susustudio.com/) handed me the design documents, and a short list of requirements. One of the requirements was an admin login route which would allow the client to change the images in the gallery. At first, WordPress was suggested as a CMS which would allow the client to make changes. However, I am not a fan of either WordPress, nor PHP, and would do almost anything to avoid using either. Besides, the scope of the project was quite small, only a single page with 4 sections, so it wouldn't make sense to slow it down unnecessarily. So I suggested the combination of Gatsby and Netlify which would accomplish the desired results, but much better. Let me explain why.

## Developer joy

I would lie if I didn't rate this reason the highest. I have worked with WordPress before and I can't say that it was a joyful experience. Moving from local development to production is needlessly painful. The same goes for PHP which, in my opinion, is a hideous and clunky programming language. Development on tooling has come a long way in recent years, so there is simply little reason to start a new project using WordPress in 2018 (when I was brought in to develop the site).

PHP and WordPress bashing aside, I work with JavaScript across the entire stack (apart from the smart contracts which are written in solidity) in my regular, full-time job. So it would only be natural for me to use tools and technology that I am familiar with and good at. We had previously used Gatsby and Netlify to develop landing pages for clients. My prior experience with React from multiple projects certainly played a big role in attracting me to Gatsby.

## Speed

Apart from my personal opinions about WordPress and PHP, they are simply not going to be as speedy as a site developed using Gatsby and deployed with Netlify. There are several reasons for this, the main being how WordPress renders pages and queries the database for content vs how Gatsby renders pages and builds content.

### React and SPA

Gatsby uses React to create Single Page Applications of your site, which means that there is no need to make separate requests for each page. Instead the new page you want to move to is already loaded. Visitors definitely notice how fast and easy your site is to navigate around. SPA is not a brand new concept, however, it's been around for a few years. In the past it's been avoided due to SEO reasons. But since Gatsby renders all your pages on the server as well this is not a problem anymore. When the search engines crawlers navigate to new pages of your site, they are served up as regular static pages, which allows the spiders to parse and analyse them naturally.

### Plugins and images

Both WordPress and Gatsby have multiple plugins, but the philosophy behind the plugins are completely different. While many plugins tend to slow down a WordPress system, Gatsby plugins have a completely different affect on the system. Lazy loading images in Gatsby is easy using the [gatsby image plugin](https://www.gatsbyjs.org/packages/gatsby-image/), and a blurry placeholder can be put in place while the real image is loaded. The images you get are always loaded at the best size for the current viewport. As a result, the pages load extremely fast, with very little overhead. This makes Google, Bing and all the others very happy. In fact, have a try of the audit tab in the developer console in your Chrome browser on a Gatsby powered page vs a WordPress powered page and see the results for yourself. Below is the result of the audit on ymade.com.au. Notice how all the categories score a high ranking, except for PWA which I didn't do anything for. The performance rating was initially 95, so without me doing anything at all the site was already getting a very high score for performance.

![Y Made audit score](/img/y-made-audit-score.png)

Here is the same score for a site which I know was developed in WordPress, and I would consider this site to be speedy. I won't name the site here so you will just have to take my word for it, but feel free to run this test on other WordPress powered sites and see what scores you get.

![WordPress powered site audit score](/img/wp-site-audit-score.png)

Notice the performance score. If you were to actually go to that site and click around, it is quite fast, especially for a WordPress site. But as you can see the score is nowhere near what Gatsby produces.

## Security

Another big advantage to using Gatsby and Netlify to build your sites is the increased security. As I already mentioned, static content is far more secure than a MySQL database which may or may not have had the standard authentication details changed. There are just fewer attack vectors. On top of that, Netlify issues SSL certificates automatically so you get https out of the box, ensuring the connection is encrypted from end to end. Again, making the search engines give you some extra love and lifting you higher in the rankings compared to the competitors.

## Backups

Yes, you can have automatic backup systems in place for WordPress, but they require setups and might not help with changes to the code which all of a sudden breaks your site. Since Netlify pulls the code from Github to build the site, as long as you have a habit of committing your work properly, you can always roll back your site to a previously working state and undo changes with ease (at least as much ease as your level of git understanding).

## CI/CD

Continuous integration and continuous delivery have been all the rage in development over the last few years. So why not use it for even a simple landing site? Changes to the site are quickly and easily deployed automatically as soon as you push the latest changes to Github.

## Conclusion

In my case the decision was very easy, and I am very happy with the choice. Developing in Gatsby has been a joy and it made me start developing my personal site using Gatsby as well. To any JavaScript developer, Gatsby is simply amazing. By using GraphQL you can mostly eliminate the need for redux, greatly simplifying development of React powered applications. You can, of course, also bring in TypeScript for typesafety.

If you are not a JavaScript developer, or if you hate React for some reason, Gatsby is probably not the right choice for you. But then again, if you are not a JavaScript developer I am willing to bet that you are having a tough time making anything on the frontend these days. Even backends are increasingly powered by JavaScript. Node.js makes it really easy to write applications, when the entire stack uses the same language it is much easier to develop a feature across the entire stack than if you need to do a quick language reset as you jump from one end to the other. Newly developed skills on the frontend are also likely to carry over to the backend and vice versa.
