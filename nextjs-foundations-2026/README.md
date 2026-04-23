# Next.JS Foundations - Official Learning Modules (2026)

This is a set of Next.JS learning subprojects using documentation provided by Vercel. The project work is mapped as follows.

---

### /react-foundations - [React Foundations](https://nextjs.org/learn/react-foundations)

  A well-explained introduction to Next.JS, from DOM manipulation in JavaScript, to manipulating & building pages using React, to using server-side React through a Node.JS server running Next.JS. Excellent for an adept JavaScript & Node.JS developer to grasp the syntax & structure needed to develop in Next.JS.

  Run this app with `npm run dev`

  <details>
    <summary>
      <ins>🗒️ ADDENDUM</ins>
    </summary>
    The React Foundations documentation ended with state that was managed entirely client-side, but I added backend-state components, to practice using Next.JS as either a fullstack application or as an SSR layer over another backend (like Spring Boot). For this, I added API route functionality and server-side / 'use server' actions functionality, which each persist their own state on the server, allowing their state values to persist across page loads. I wrote client-side components to interact with each method of backend access, to pre-populate the correct backend state values into these components on the UI.
    </details>

---

### /nextjs-blog - [Next.JS App Router Dashboard Application](https://nextjs.org/learn/dashboard-app)

  An introduction to the Pages Router architecture of Next.JS. Most useful for legacy systems, but this includes exercises around baseline server & client rendering strategies, the usage of CSS modules, and page metadata management. The learning documentation includes some mention of additional tools like SCSS/SASS and Vercel's deployment platform, but the lessons are generally well-focused around using Next.JS itself.

  Run this app with `npm run dev`

---

### /nextjs-dashboard - [Next.JS App Router Dashboard Application](https://nextjs.org/learn/dashboard-app)

  A dense, opinionated runthrough of several Next.JS features, including many pieces of tooling & architecture chosen by Vercel. Includes usage of Tailwind CSS, PNPM, ESLint, Next-Auth for authentication, Bcrypt, Suspense & streaming, CLSX, Zod, SQL using Postgres, Next.JS backend using server actions & API routes, route groups & dynamic paths, and more. Also requires interfacing with & updating code written by someone else.

  Run this app with `pnpm dev`

  <details>
    <summary>
      <ins>🗒️ ADDENDUM</ins>
    </summary>
    The Next.JS App Router documentation included deployment to Vercel's managed ecosystem for database connectivity. However, I instead opted to spin up my own AWS RDS and use that to serve my Postgres database.
  </details>
