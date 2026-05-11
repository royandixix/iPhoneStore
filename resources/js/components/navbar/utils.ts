export function urlMatches(href: string, currentPath: string, currentSearch: string): boolean {
    try {
        const target = new URL(href, window.location.origin);
        return target.pathname === currentPath && target.search === currentSearch;
    } catch {
        return false;
    }
}