
import React from 'react'
import { Slider } from '../../slider';

interface SliderComponentProps extends Omit<React.ComponentProps<typeof Slider>, 'onChange'> {
  onChange: (value: number[]) => void;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ onChange, ...props }) => {
  const [value, setValue] = React.useState<number[] | undefined>(props.defaultValue); 

  return (
    <div className='flex flex-col gap-3'>
      <span className='text-xs text-muted'>$ {value ? value[0] : 0} - $ {value ? value[1] : 0}</span>
      <Slider
        value={value} 
        onValueChange={(val) => {
          setValue(val);
          onChange(val);
        }}
        {...props}
      />
    </div>
  )
}

export default SliderComponent
