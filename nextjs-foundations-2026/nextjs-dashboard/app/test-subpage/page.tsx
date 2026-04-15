import Link from 'next/link';


export default function TestSubpage() {
    return (
        <>
            <h1>
                Hello, world!
            </h1>

            <p>
                This is a test subpage to see if I understand Next routing before continuing.
            </p>

            <p>
                <Link
                    href='../'
                    style={{textDecoration: 'underline', color: 'blue'}}
                >
                    Return to homepage
                </Link>
            </p>
        </>
    );
}
