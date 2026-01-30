import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputComponent from "@/components/ui/form/input-component"
import TextareaComponent from "@/components/ui/form/textarea-component"
import { contactSchema, type ContactPayload } from "@/modules/contact/schemas/contactSchema"
import { contactFormDefaultValues } from "@/modules/contact/schemas/defaultValues"
import Label from "@/components/ui/form/label"



const ContactForm = () => {

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: contactFormDefaultValues
  })


  const onSubmit = (formData: ContactPayload) => {
    console.log(formData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">

        {/* Top Fields */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label>Your Name</Label>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <InputComponent
                  {...field}
                  type="text"
                  placeholder="Enter your name"
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label>Your Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <InputComponent
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  error={fieldState.error?.message}
                  wrapperClassName="w-full"
                />
              )}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <Label>Your Phone Number</Label>
            <Controller
              name="contact"
              control={control}
              render={({ field, fieldState }) => (
                <InputComponent
                  {...field}
                  type="tel"
                  placeholder="Enter your number"
                  error={fieldState.error?.message}
                  wrapperClassName="w-full"
                />
              )}
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <Label>Your Message</Label>
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <TextareaComponent
                {...field}
                placeholder="Write your message here..."
                error={fieldState.error?.message}
                wrapperClassName="min-h-35"
              />
            )}
          />
        </div>

        <div className="flex justify-end pt-2">
          <Button
            variant="default"
            size="lg"
            className="text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm