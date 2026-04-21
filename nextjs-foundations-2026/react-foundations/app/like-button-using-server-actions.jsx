/* 
    Allows likes to be persisted across page reloads, with this method:

    This uses a stateful server-side "likes" tracker in the ./actions.js file, 
    for a server-side actions pattern.

    A real Next.JS-as-backend application would be using a DB, persisting data 
    across server restarts and needing authentication & asynchronous calls to 
    my RDBMS instance(s).

    A real Next.JS-as-SSR-layer application may skip the actions layer 
    entirely, or the app may use it as a proxy. This proxying can hide backend 
    URLs/tokens/etc from the client, and it can perform pre-processing before 
    forwarding to a true backend.
*/

'use client';

import { useEffect, useState } from 'react';
import { getLikes, incrementLikes } from './actions';

export default function LikeButtonUsingServerActions() {
    const [likes, setLikes] = useState(0);

    // useEffect with empty dependency array, for a one-time load on render
    useEffect(() => {
        // uses getLikes from getLikes (from actions.js) that has the use server directive 
        async function loadLikes() {
            const currentLikes = await getLikes();
            setLikes(currentLikes);
        }
        loadLikes();
    }, []);

    async function handleClick() {
        // uses incrementLikes (from actions.js) that has the use server directive 
        const updatedLikes = await incrementLikes();

        setLikes(
            // likes + 1
            updatedLikes
        );
    }

    return <button onClick={handleClick}>Like ({likes})</button>;
}
