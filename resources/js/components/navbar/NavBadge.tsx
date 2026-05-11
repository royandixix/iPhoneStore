export default function NavBadge({ count }: { count: number }) {
    if (!count) return null;
    return (
        <span className="absolute -top-0.5 -right-0.5 w-[14px] h-[14px] rounded-full bg-blue-500 text-[9px] font-bold text-white flex items-center justify-center leading-none">
            {count > 9 ? "9+" : count}
        </span>
    );
}