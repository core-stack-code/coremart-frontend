import Icon from '@/components/ui/icons'

const ForCall = () => {
  return (
    <>
    <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Icon name="phoneIcon" width={30} height={24} />
                <p className="text-[18px] font-semibold">Call to us</p>
              </div>
              <div className="text-[var(--color-muted)] flex flex-col gap-1">
                <p>We are available 24/7.</p>
                <p>Contact no. +91 1234567890</p>
              </div>
            </div>
    </>
  )
}

export default ForCall