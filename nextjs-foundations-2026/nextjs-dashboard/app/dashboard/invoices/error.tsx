'use client'

import { useEffect } from "react"

// args are passed in by Next.JS
// error is the thrown error, reset is a function that tries to re-render the currently selected route
export default function Error(
    {
        error,
        reset
    }
        :
    {
        error: Error & { digest?: string },
        reset: () => void
    }
) {
    // run this when there's any new error
    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center">
                Something went wrong!
            </h2>
            <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={
                    // tries to recover by re-rendering the invoices route that this error.tsx is under
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    )
}
