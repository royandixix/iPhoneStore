import { PageProps as InertiaPageProps } from "@inertiajs/react";

declare module "@inertiajs/react" {
    interface PageProps extends InertiaPageProps {
        auth: {
            user: {
                id: number;
                name: string;
                email?: string;
                role?: string;
            } | null;
        };

        cartCount?: number;
        notifCount?: number;

        [key: string]: any;
    }
}