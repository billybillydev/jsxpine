import { RootLayout } from "$views/layouts.view";

/**
 * @param {import("$components/page.component").PageContext<{}>} props 
 */
export function NotFoundPage(props) {
    return (
        <RootLayout {...props}>
            <main class="flex items-center justify-center flex-col grow">
                <p class="text-4xl">404 Page Not Found</p>
            </main>
        </RootLayout>
    )
}