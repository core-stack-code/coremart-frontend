import React from 'react'
import { Input } from '../../input'
import { cn } from '@/lib/utils';
import Label from '../label';
import Icon, { type CombinedIconName } from '../../icons';

interface TextfieldProps extends Omit<React.ComponentProps<"input">, "onChange" | "value"> {
    onChange: (value: string) => void;
    value: string;
    label?: string;
    error?: string;
    containerClass?: string;
    leftIcon?: CombinedIconName;
    rightIcon?: CombinedIconName;
}

const Textfield: React.FC<TextfieldProps> = ({
    value,
    onChange,
    label,
    error,
    containerClass,
    leftIcon,
    rightIcon,
    className,
    ...props
}) => {
        return (
            <div className={cn('flex flex-col gap-1', containerClass)}>
                {label && <Label>{label}</Label>}
                    <div className='flex items-center relative'>
                        {leftIcon && (
                            <div className='absolute left-3'>
                                <Icon name={leftIcon} width={16} height={16} fill="none" stroke="currentColor" />
                            </div>
                        )}
                        <Input
                            onChange={(e) => onChange(e.target.value.toString())}
                            value={value}
                            className={cn(
                                leftIcon && "pl-10", 
                                rightIcon && "pr-10",
                                (leftIcon && rightIcon) && "px-10",
                                "rounded-lg border-border focus:border-primary/90",
                                className
                            )}
                            {...props}
                        />
                        {rightIcon && (
                            <div className='absolute right-3'>
                                <Icon name={rightIcon} width={16} height={16} fill="none" stroke="currentColor" />
                            </div>
                        )}
                    </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        )
}

export default Textfield
