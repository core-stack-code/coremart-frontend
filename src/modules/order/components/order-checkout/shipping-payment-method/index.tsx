import { Label } from '@/components/ui/label'
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'


interface ShippingPaymentMethodProps {
    Methods: {
        id:string,
        name:string
    }[],
    defaultSelect?: string
}



const ShippingPaymentMethod: React.FC<ShippingPaymentMethodProps> = ({ Methods, defaultSelect }) => {
    return (
        <RadioGroup defaultValue={defaultSelect}>
            {
                Methods.map((payment, index) => {
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <RadioGroupItem value={payment.name} id={payment.id} />
                            <Label htmlFor={payment.id}>{payment.name}</Label>
                        </div>
                    )
                })
            }
        </RadioGroup>
    )
}

export default ShippingPaymentMethod