import { useEffect, useRef } from "react";
import { toast } from "sonner"
import Icon from "@/components/ui/icons";

interface ActioonOption {
    actionLabel?: string;
    action?: () => void;
}

type ToastType = "success" | "error" | "info" | "warning";

const TOAST_STYLE_MAP: Record<ToastType, string> = {
    success: "bg-green-50 border-green-400 text-green-900",
    error: "bg-red-50 border-red-400 text-red-900",
    info: "bg-blue-50 border-blue-400 text-blue-900",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-900",
}

const TOAST_ICON_MAP: Record<ToastType, React.ReactNode> = {
    success: <Icon name='Check' width={25} height={25} stroke="green" strokeWidth={2} />,
    error: <Icon name='X' width={25} height={25} stroke="red" strokeWidth={2}/>,
    info: <Icon name='Info' width={25} height={25} stroke="blue" strokeWidth={2}/>,
    warning: <Icon name='TriangleAlert' width={25} height={25} stroke="yellow" strokeWidth={2}  />,
}


export const useToast = () => {
    const loadingToastId = useRef<string | number | null>(null);

    const base = (
        type: "success" | "error" | "info" | "warning",
        title: string,
        description?: string,
        action?: ActioonOption
    ) => {
        toast[type](title, {
            unstyled: true,
            icon: TOAST_ICON_MAP[type],
            className: `flex gap-2 px-4 py-3 flex items-center rounded-lg border-2 font-semibold text-black shadow-md ${TOAST_STYLE_MAP[type]}`,
            description: description,
            action: action?.actionLabel
                ? {
                    label: action.actionLabel,
                    onClick: action.action!,
                }
                : undefined,
        });
    };

    const success = (
        title: string, description?: string, action?: ActioonOption
    ) => base("success", title, description, action);

    const error = (
        title: string, description?: string, action?: ActioonOption
    ) => base("error", title, description, action);

    const info = (
        title: string, description?: string, action?: ActioonOption
    ) => base("info", title, description, action);

    const warning = (
        title: string, description?: string, action?: ActioonOption
    ) => base("warning", title, description, action);

    const loading = (message: string = "Loading...") => {
        const id = toast.loading(message);
        return id;
    };

    const dismiss = (id: string | number) => toast.dismiss(id);

    const isLoading = (flag: boolean, message = "Loading...") => {
        useEffect(() => {
            if (flag) {
                if (!loadingToastId.current) {
                    loadingToastId.current = toast.loading(message);
                }
            } else {
                if (loadingToastId.current) {
                    toast.dismiss(loadingToastId.current);
                    loadingToastId.current = null;
                }
            }
        }, [flag, message]);
    };

    return { success, error, info, warning, loading, dismiss, isLoading };
}