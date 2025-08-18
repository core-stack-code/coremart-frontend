import { Label } from '@/components/ui/label'
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'


interface ShippingPaymentMethodProps {
    Methods: string[],
    defaultSelect?: string
}



const ShippingPaymentMethod: React.FC<ShippingPaymentMethodProps> = ({ Methods, defaultSelect }) => {
    return (
        <RadioGroup defaultValue={defaultSelect}>
            {
                Methods.map((payment, index) => {
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <RadioGroupItem value={payment} id="r1" />
                            <Label htmlFor="r1">{payment}</Label>
                        </div>
                    )
                })
            }
        </RadioGroup>
    )
}

export default ShippingPaymentMethod