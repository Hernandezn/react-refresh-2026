/*
  ADDITIONAL NOTES FROM OUTSIDE THE LEARNING MODULE:
  (or: things the documentation isn't telling me about how this really works)

  Unlike Vite, Next.JS does not use an index.html file to mount React 
  components. It instead runs an internal Node.JS server that GENERATES html 
  that it serves from its endpoints. However, there's also no project-specific 
  "server.mjs" file that I would usually use in my self-managed Node.JS 
  projects. The server is managed internally through the Next runtime (found 
  after npm install or pnpm i, under the path ../node_modules/next/). If 
  I wanted to run using the node command, I would use 
  "node node_modules/next/dist/bin/next start" as long-hand for the 
  "pnpm start" command.

  =====

  This RootLayout component is nearly equivalent to the index.html I used to 
  mount components in Vite. The internal Node server uses this file to 
  generate the HTML page that comes from hitting its endpoints.

  The "children" prop is injected by Next.JS, and this prop is dynamically 
  selected depending on which path is being requested. Every path is relative 
  to the "/app" folder (the one containing this file by default), and the page 
  is only served if that folder contains a "Page.tsx" file whose default 
  export is a function that returns a React component.
  
  So, if I go to "/ui" and there does not exist a "/ui/Page.tsx" file, the 
  server will return a 404. If it DOES contain a "/ui/Page.tsx" file but the 
  file is not a React component, the server will return a runtime error. Once 
  the server does have a "/ui/Page.tsx" file that defines a usable React 
  component, the path "/ui" will return that component mounted within this 
  RootLayout component.

  This also means that an import like '@/app/ui/global.css' will be applied 
  across my pages when it's used here. This is a basic lesson trying to be 
  taught by chapter 2 of the official documentation's learning module, though 
  not with any of the abstraction explained like I've done here. The 
  documentation says "this is what works," and this is where I've dug into WHY 
  it works.
*/

import '@/app/ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
