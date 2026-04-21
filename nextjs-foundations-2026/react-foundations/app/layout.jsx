export const metadata = {
    title: 'Next.js app',
    description: 'This is a Next.js application'
};

export default function RootLayout({ children }) {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};
