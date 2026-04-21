/* 
    Allows likes to be persisted across page reloads, with this method:

    This uses a stateful server-side "loves" tracker in the 
    ./api/loves/route.js file, for a Next.JS classic backend API pattern.

    A real Next.JS-as-backend application would be using a DB, persisting data 
    across server restarts and needing authentication & asynchronous calls to 
    my RDBMS instance(s).

    A real Next.JS-as-SSR-layer application may skip the API layer entirely, 
    or the app may use it as a proxy. This proxying can hide backend 
    URLs/tokens/etc from the client, and it can perform pre-processing before 
    forwarding to a true backend.
*/

'use client';

import { useEffect, useState } from 'react';

export default function LikeButtonUsingServerActions( { step = 2 } ) {
    const [loves, setLoves] = useState(0);

    // useEffect with empty dependency array, for a one-time load on render
    useEffect(() => {
        async function loadLoves() {
            // calls the GET function from ./api/loves/route.js
            const response = await fetch('api/loves', { method: 'GET' });
            const data = await response.json();
            setLoves(data.loves);
        }
        loadLoves();
    }, []);

    async function handleClick() {
        const response = await fetch('api/loves',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: step // payload demonstration, to increment by the step count
                })
            }
        );
        const data = await response.json();
        const updatedLoves = data.loves;

        setLoves(
            // loves + 1
            updatedLoves
        );
    }

    return <button onClick={handleClick}>Love ({loves})</button>;
}
