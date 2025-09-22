import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputComponent from "@/components/ui/form/input-component"
import TextareaComponent from "@/components/ui/form/textarea-component"
import { contactSchema, type ContactPayload } from "@/modules/contact/schemas/contactSchema"
import { contactFormDefaultValues } from "@/modules/contact/schemas/defaultValues"



const ContactForm = () => {

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: contactFormDefaultValues
  })


  const onSubmit = (formData: ContactPayload) => {
    console.log(formData)
  }

  return (
    <>

      <form
        className="flex flex-col border-[var(--color-border)] border rounded-[var(--border-radius)] px-15 py-12 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Row fields */}
        <div className="sm:flex-col md:flex lg:flex-row justify-between lg:gap-6 space-y-6 sm:space-y-6">
          {/* Name */}
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type="text"
                placeholder="Your Name"
                error={fieldState.error?.message}
                wrapperClassName="w-full border-border border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-primary"
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type="email"
                placeholder="Your Email"
                error={fieldState.error?.message}
                wrapperClassName="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-[var(--color-primary)]"
              />
            )}
          />

          {/* Contact */}
          <Controller
            name="contact"
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type="tel"
                placeholder="Your Contact Number"
                maxLength={10}
                minLength={10}
                error={fieldState.error?.message}
                wrapperClassName="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-[var(--color-primary)]"
              />
            )}
          />
        </div>

        {/* Message */}
        <div>
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <TextareaComponent
                {...field}
                wrapperClassName="w-full h-45 border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-2 focus:outline-none focus:ring focus:ring-[var(--color-primary)]"
                error={fieldState.error?.message}
                id="message"
                placeholder="Your Message"
              />
            )}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-end">
          <Button
            type="submit"
            className="bg-primary rounded-2xl px-10 py-2 text-background"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default ContactForm