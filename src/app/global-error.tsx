/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/jsx-filename-extension */

'use client'

export default function GlobalError({
    // error,
    reset,
}: {
    // error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <h2>Algo deu errado!</h2>
                <button onClick={() => reset()}>Tente novamente</button>
            </body>
        </html>
    )
}