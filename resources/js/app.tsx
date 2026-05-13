import "../css/app.css"
import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"
import UserLayout from "@/layouts/UserLayout"
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

const token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    axios.defaults.headers.common["X-CSRF-TOKEN"] = (token as HTMLMetaElement).content
} else {
    console.error("CSRF token not found")
}

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true }) as Record<string, any>

        const path = Object.keys(pages).find(
            (key) => key.toLowerCase() === `./pages/${name}.tsx`.toLowerCase()
        )

        if (!path) {
            console.error("Available pages:", Object.keys(pages))
            throw new Error(`Page not found: ${name}`)
        }

        const Page = pages[path].default

        Page.layout =
            Page.layout ||
            ((page: React.ReactNode) => <UserLayout>{page}</UserLayout>)

        return Page
    },

    setup({ el, App, props }) {
        // createRoot(el).render(<App {...props} />)
        createRoot(el).render(
    <App {...props} />
)
    },
})