import "./globals.css"
import Providers from "./Providers/Providers"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}