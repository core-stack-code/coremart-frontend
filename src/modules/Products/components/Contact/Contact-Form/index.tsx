import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



const ContactForm = () => {
  return (
    <>

      <form className="flex flex-col border-[var(--color-border)] border rounded-[var(--border-radius)] p-10 gap-8">
        <div className=" sm:flex-col md:flex lg:flex-row justify-between lg:gap-6 space-y-6  sm:space-y-6 md:">
          <Input className="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-[var(--color-primary)]" type="text" placeholder="Your Name" required/>
          <Input className="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-[var(--color-primary)]" type="text" placeholder="Your Email" required/>
          <Input className="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-[var(--color-primary)]" type="text" inputMode="numeric" maxLength={10} placeholder="Your Contact Number" required/>
        </div>
        <div>
          <Textarea className="w-full h-[182px]" name="message" id="message" placeholder="Your Message"/>
        </div>
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-end">
          <Button className="bg-[var(--color-primary)] rounded-2xl px-10 py-2 text-[var(--color-background)]">Submit</Button>
        </div>
      </form>
    </>
  )
}

export default ContactForm