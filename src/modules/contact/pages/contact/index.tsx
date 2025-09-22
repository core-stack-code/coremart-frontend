import ContactForm from "../../components/contact/contact-form"
import ForCall from "../../components/contact/for-call"
import ForMail from "../../components/contact/for-mail"


const Contact = () => {
  return (
    <>
      <div className="flex flex-col pt-2 pb-11 gap-8 ">
        
        <div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">Contact Us</h1>
        </div>
     
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          <div className="w-full md:w-1/3 flex flex-col p-5 gap-5 border-[var(--color-border)] border rounded-[var(--border-radius)]">
            <ForCall />
            <hr className="text-[var(--color-muted)]" />
            <ForMail />
          </div>
        
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact