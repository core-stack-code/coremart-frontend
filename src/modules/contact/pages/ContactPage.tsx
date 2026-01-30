import ContactInfo from "../components/contact-info"
import ContactForm from "../components/contact-form"


const Contact:React.FC = () => {
  return (
    <div className="w-full py-10">
      <h1 className="font-semibold text-4xl pb-8">Contact Us</h1>

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