import React from 'react'
import Icon from '../icons'
import { Button } from '../button'

interface AddSubButtonProps {
    count: number
    addAction: () => void
    subAction: () => void
}


const AddSubButton: React.FC<AddSubButtonProps> = ({ count, addAction, subAction }) => {

    return (
        <div className='flex items-center gap-1 bg-background rounded-rad shadow'>
            <Button 
                variant='outline' 
                size="icon" 
                onClick={subAction} 
                className='bg-transparent hover:bg-transparent border-0 p-0 h-7'
            >
                <Icon name='MinusIcon' width={8} height={8} strokeWidth={3}  className='text-primary hover:text-primary-hover' />
            </Button>
            <span className='text-xs font-medium'>{count}</span>
            <Button 
                variant='outline' 
                size="icon" 
                onClick={addAction} 
                className='bg-transparent hover:bg-transparent border-0 p-0 h-7'
            >
                <Icon name='PlusIcon' width={8} height={8} strokeWidth={3} className='text-primary hover:text-primary-hover'  />
            </Button>
        </div>
    )
}

export default AddSubButton
