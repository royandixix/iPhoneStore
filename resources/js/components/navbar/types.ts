export interface NavSubItem {
    label: string;
    href: string;
}

export interface NavItem {
    label: string;
    href?: string;
    dropdown?: NavSubItem[];
}

export interface PageProps {
    auth: {
        user: { name: string; email?: string } | null;
    };
    cartCount?: number;
    notifCount?: number;
    [key: string]: unknown;
}

export interface Notification {
    id: number;
    title: string;
    desc: string;
    time: string;
    unread: boolean;
}