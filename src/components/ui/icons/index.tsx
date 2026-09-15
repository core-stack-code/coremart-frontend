import { CUSTOM_ICON_MAP, LUCIDE_ICON_MAP } from "./utils";

type IconName = keyof typeof CUSTOM_ICON_MAP;
type LucideName = keyof typeof LUCIDE_ICON_MAP;

export type CombinedIconName = IconName | LucideName;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: CombinedIconName;
}

const Icon = ({ name, ...props }: IconProps) => {
    const IconComponent = CUSTOM_ICON_MAP[name as IconName];
    const LucideComponent = LUCIDE_ICON_MAP[name as LucideName];

    if (LucideComponent) return <LucideComponent {...props} />

    if (IconComponent) return <IconComponent {...props} />
    
    return null;
}

export default Icon;