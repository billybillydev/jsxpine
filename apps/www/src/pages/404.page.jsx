import { RootLayout } from "$views/layouts.view";

export function NotFoundPage() {
    return (
        <RootLayout seo={{ title: "Page not found" }}>
            <main class="flex items-center justify-center flex-col grow">
                <p class="text-4xl">404 Page Not Found</p>
            </main>
        </RootLayout>
    )
}