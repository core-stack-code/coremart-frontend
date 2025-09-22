import Icon from '../icons'
import type { CUSTOM_ICON_MAP } from '../icons/utils';

type IconName = keyof typeof CUSTOM_ICON_MAP;

interface AboutBadgeProps {
  iconName: IconName,
  service: string,
  description: string
}

const AboutusBadge: React.FC<AboutBadgeProps> = ({ iconName, service, description }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="w-28 h-28 rounded-full flex justify-center items-center bg-[rgba(147,51,234,0.3)]">
          <div className="w-20 h-20 rounded-full bg-primary flex justify-center items-center">
            <Icon name={iconName} width={42} height={47} />
          </div>
        </div>
        <p className="font-bold mt-3">{service}</p>
        <p>{description}</p>
      </div>
    </>
  )
}

export default AboutusBadge