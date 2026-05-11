interface ShowToastProps {
    message: string;
}

export default function ShowToast({ message }: ShowToastProps) {
    if (!message) return null;

    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black text-white text-[12px] uppercase tracking-widest px-6 py-3 rounded-full z-[60] shadow-lg whitespace-nowrap">
            ✅ {message}
        </div>
    );
}