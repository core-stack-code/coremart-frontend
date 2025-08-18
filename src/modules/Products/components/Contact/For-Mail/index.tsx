import Icon from '@/components/ui/icons'

const ForMail = () => {
  return (
    <>
    <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Icon name="mailIcon" width={30} height={24} />
                <p className="text-[18px] font-semibold">Write to us</p>
              </div>
              <div className="text-[var(--color-muted)] flex flex-col gap-1">
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Email: <br /> coremart@corestack.com</p>
              </div>

            </div>
    </>
  )
}

export default ForMail