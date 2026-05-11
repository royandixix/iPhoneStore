import { forwardRef } from "react";
import { Bell } from "lucide-react";
import NavBadge from "./NavBadge";
import { Notification } from "./types";

interface Props {
    notifCount: number;
    open: boolean;
    onToggle: () => void;
    notifications: Notification[];
}

const NotifDropdown = forwardRef<HTMLDivElement, Props>(
    ({ notifCount, open, onToggle, notifications }, ref) => (
        <div ref={ref} className="relative">
            <button
                onClick={onToggle}
                className="relative w-8 h-8 flex items-center justify-center text-white/75 hover:text-white transition-colors"
                aria-label="Notifikasi"
            >
                <Bell size={16} />
                <NavBadge count={notifCount} />
            </button>

            <div className={`absolute top-full right-0 mt-2 w-72 rounded-2xl overflow-hidden
                bg-[#1c1c1e]/96 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60
                transition-all duration-200 origin-top-right
                ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
                    <span className="text-white text-[13px] font-medium">Notifikasi</span>
                    <button className="text-blue-400 text-[12px] hover:text-blue-300 transition-colors">
                        Tandai dibaca
                    </button>
                </div>

                {notifications.length === 0 ? (
                    <p className="text-white/30 text-[13px] text-center py-6">Tidak ada notifikasi</p>
                ) : (
                    notifications.map((n) => (
                        <div
                            key={n.id}
                            onClick={onToggle}
                            className={`flex gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 ${
                                n.unread ? "bg-blue-500/5" : ""
                            }`}
                        >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${n.unread ? "bg-blue-400" : "opacity-0"}`} />
                            <div>
                                <p className="text-white text-[12px] font-medium">{n.title}</p>
                                <p className="text-white/40 text-[12px] mt-0.5">{n.desc}</p>
                                <p className="text-white/25 text-[11px] mt-1">{n.time}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
);

NotifDropdown.displayName = "NotifDropdown";
export default NotifDropdown;