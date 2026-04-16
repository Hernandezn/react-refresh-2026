## Next.js App Router Course - Starter

This is the [Next.js App Router](https://nextjs.org/learn/dashboard-app) exercise from the official Next.js documentation.

You may view the full exercise overview [here on the Next.js Website](https://nextjs.org/learn).

## Additional Notes

As given, this course explains a lot of what can work but not a lot of HOW it works. Additionally, from the 6th module of this exercise set, it attempts to gear my learning toward how to use Vercel's managed ecosystem rather than more generally applicable information.

However, with my prior knowledge of React, Node.JS, modules as a feature of baseline JavaScript, CI/CD, and AWS, I can glean more information from the starter application and transform their Vercel-centric practices into the AWS-infrastructure-based practices that I'll be using for my future applications.

Here's some knowledge that was either glossed over in the lessons or wasn't contextualized with my prior relevant knowledge:

- **Next.JS App Router Baseline Architecture**

  Next.JS runs on a Node.JS server that generates HTML that it serves from its endpoints. This is why, unlike Vite, there's no index.html to mount React components to, because the server generates the HTML as an output rather than holding onto an HTML file as a sort of base configuration. However, unlike my prior Node.JS applications, there's no project-specific "server.mjs" file, with the Next runtime holding this baseline Node functionality internally and using that to parse the files in my React application. For this application, this server's runtime files will appear under "nextjs-dashboard/node_modules/next" after running the "npm install" or "pnpm i" command. If I wanted to run as a Node application, I would typically use "node node_modules/next/dist/bin/next start" as long-hand for the "pnpm start" command. Some features of base NPM are restricted, however, as per this application's configuration using pnpm-lock.yaml.

- **How I'll ACTUALLY Deploy My Application & Set Up a Database**

  Using Vercel's managed ecosystem may be useful for me in the future. It's very simple to use and well-structured, which is excellent, but it isn't what I need to learn for my current project plans. Therefore, instead of using the information prescribed in the official Next.JS learning modules (from chapter 6, which just tells me to use Vercel), I'll be setting up using Amazon Web Services for RDS and deployment.
