import React from "react"
import { Typography } from "@/components/ui/typography"
import ContactInfo from "../components/contact-info"
import ContactForm from "../components/contact-form"

const Contact: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-10">
      <Typography variant='h1' className="font-semibold">Contact Us</Typography>

      <div className="w-full flex justify-between gap-10">

        <div className="w-1/3 flex flex-col gap-5 border border-border  border-l-primary/60 border-l-4 rounded-rad">
          <ContactInfo />
        </div>

        <div className="w-full rounded-2xl border border-border bg-background p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact