import { CUSTOM_ICON_MAP } from "./utils";

type IconName = keyof typeof CUSTOM_ICON_MAP;

interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    className?: string;
}

const Icon = ({ name, width, height, fill, stroke, className }: IconProps) => {
    const IconComponent = CUSTOM_ICON_MAP[name];

    if (!IconComponent) {
        return null;
    }

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

export default Icon;