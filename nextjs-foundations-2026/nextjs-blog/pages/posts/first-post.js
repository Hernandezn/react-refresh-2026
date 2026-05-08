import Link from 'next/link';
import Layout from '../../components/layout';
import Head from 'next/head';
// import Script from 'next/script';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>
                    First Post
                </title>
                {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
            </Head>

            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={
                    () => console.log('script loaded properly; window.FB is now populated')
                }
            /> */}

            <h1>First Post</h1>
            <h2>
                <Link href="/">&lt;&lt; Back home 🏠</Link>
            </h2>
        </Layout>
    );
}
