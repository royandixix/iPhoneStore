import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ ...props }, ref) => (
    <DropdownMenuPrimitive.Trigger ref={ref} type="button" {...props} />
));
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

// ── Content ───────────────────────────────────────────────────────────────────
const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "z-50 min-w-[220px] overflow-hidden p-1.5",
                "rounded-[18px]",
                "border border-white/[0.08]",
                "bg-[#111]/80 backdrop-blur-3xl",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_64px_rgba(0,0,0,0.7),0_4px_16px_rgba(0,0,0,0.4)]",
                "origin-[var(--radix-dropdown-menu-content-transform-origin)]",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-[0.96] data-[state=open]:zoom-in-[0.96]",
                "data-[state=open]:duration-[180ms] data-[state=closed]:duration-[140ms]",
                className,
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

// ── Item ──────────────────────────────────────────────────────────────────────
const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
        inset?: boolean;
        icon?: React.ReactNode;
        shortcut?: string;
        variant?: "default" | "danger" | "success";
    }
>(({ className, inset, icon, shortcut, variant = "default", children, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            "group relative flex cursor-pointer select-none items-center gap-2.5",
            "rounded-[10px] px-3 py-[9px] text-[13px] font-[450]",
            "outline-none transition-all duration-[120ms]",
            "before:absolute before:inset-0 before:rounded-[10px] before:opacity-0",
            "before:transition-opacity before:duration-[120ms]",
            variant === "default" && [
                "text-white/60",
                "hover:text-white focus:text-white",
                "before:bg-white/[0.07] hover:before:opacity-100 focus:before:opacity-100",
            ],
            variant === "danger" && [
                "text-red-400/80",
                "hover:text-red-300 focus:text-red-300",
                "before:bg-red-500/10 hover:before:opacity-100 focus:before:opacity-100",
            ],
            variant === "success" && [
                "text-emerald-400/80",
                "hover:text-emerald-300 focus:text-emerald-300",
                "before:bg-emerald-500/10 hover:before:opacity-100 focus:before:opacity-100",
            ],
            inset && "pl-8",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
            className,
        )}
        {...props}
    >
        {icon && (
            <span className="relative z-10 flex h-[18px] w-[18px] shrink-0 items-center justify-center opacity-60 transition-opacity duration-[120ms] group-hover:opacity-100">
                {icon}
            </span>
        )}
        <span className="relative z-10 flex-1 leading-none">{children}</span>
        {shortcut && (
            <span className="relative z-10 ml-auto shrink-0 text-[11px] font-medium tracking-wide opacity-30 group-hover:opacity-50">
                {shortcut}
            </span>
        )}
    </DropdownMenuPrimitive.Item>
));
DropdownMenuItem.displayName = "DropdownMenuItem";

// ── Label ─────────────────────────────────────────────────────────────────────
const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn(
            "px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25",
            inset && "pl-8",
            className,
        )}
        {...props}
    />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

// ── Separator ─────────────────────────────────────────────────────────────────
const DropdownMenuSeparator = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
        ref={ref}
        className={cn("my-1.5 h-px bg-white/[0.06]", className)}
        {...props}
    />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

// ── CheckboxItem ──────────────────────────────────────────────────────────────
const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "group relative flex cursor-pointer select-none items-center gap-2.5",
            "roundned-[10px] py-[9px] pl-8 pr-3 text-[13px] font-[450]",
            "text-white/60 outline-none transition-all duration-[120ms]",
            "hover:bg-white/[0.07] hover:text-white focus:bg-white/[0.07] focus:text-white",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-3 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-white">
                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

// ── RadioItem ─────────────────────────────────────────────────────────────────
const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
            "group relative flex cursor-pointer select-none items-center gap-2.5",
            "rounded-[10px] py-[9px] pl-8 pr-3 text-[13px] font-[450]",
            "text-white/60 outline-none transition-all duration-[120ms]",
            "hover:bg-white/[0.07] hover:text-white focus:bg-white/[0.07] focus:text-white",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
            className,
        )}
        {...props}
    >
        <span className="absolute left-3 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <span className="block h-1.5 w-1.5 rounded-full bg-white" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

// ── SubTrigger ────────────────────────────────────────────────────────────────
const DropdownMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
        inset?: boolean;
    }

const DropdownMenuSubTrigger = React.forwardRef
    React.ElementRef
>(({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "flex cursor-pointer select-none items-center gap-2.5 rounded-[10px]",
            "px-3 py-[9px] text-[13px] font-[450] text-white/60 outline-none",
            "transition-all duration-[120ms]",
            "hover:bg-white/[0.07] hover:text-white focus:bg-white/[0.07] focus:text-white",
            "data-[state=open]:bg-white/[0.07] data-[state=open]:text-white",
            inset && "pl-8",
            className,
        )}
        {...props}
    >
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="ml-auto opacity-40">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

// ── SubContent ────────────────────────────────────────────────────────────────
const DropdownMenuSubContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            "z-50 min-w-[180px] overflow-hidden rounded-[18px] p-1.5",
            "border border-white/[0.08]",
            "bg-[#111]/80 backdrop-blur-3xl",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_64px_rgba(0,0,0,0.7)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
            "className,
        )}
        {...props}
    />
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuRadioGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
};