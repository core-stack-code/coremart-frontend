import { CUSTOM_ICON_MAP, LUCIDE_ICON_MAP } from "./utils";

type IconName = keyof typeof CUSTOM_ICON_MAP;
type LucideName = keyof typeof LUCIDE_ICON_MAP;
type CombinedIconName = IconName | LucideName;

interface IconProps {
    name: CombinedIconName;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    className?: string;
}
const Icon = ({ name, width, height, fill, stroke, className }: IconProps) => {
    const IconComponent = CUSTOM_ICON_MAP[name as IconName];
    const LucideComponent = LUCIDE_ICON_MAP[name as LucideName];

    if (LucideComponent) {
        return (
            <LucideComponent
                width={width}
                height={height}
                fill={fill ?? "#9333EA"}
                stroke={stroke}
                className={className}
            />
        );
    }

    if (IconComponent) {
        return (
            <IconComponent
                width={width}
                height={height}
                fill={fill ?? "#9333EA"}
                stroke={stroke}
                className={className}
            />
        );
    }
    
    return null;
}

export default Icon;