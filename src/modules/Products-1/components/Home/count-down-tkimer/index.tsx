import { useEffect, useState } from "react"


interface CounteDownTimerProps {
    Days: string,
    Hours: string,
    Minutes: string,
    Seconds: string
}

const CounteDownTimer = () => {

    const [time, setTime] = useState<CounteDownTimerProps>({
        Days: '',
        Hours: '',
        Minutes: '',
        Seconds: ''
    })

    useEffect(() => {
        const targetTime = new Date()
        targetTime.setHours(targetTime.getHours() + 48)


        const updateTime = () => {
            const now = new Date().getTime();
            const OfferTime = targetTime.getTime() - now

            if (OfferTime <= 0) {
                setTime({
                    Days: '00',
                    Hours: '00',
                    Minutes: '00',
                    Seconds: '00'
                })
                return
            }
            const days = Math.floor(OfferTime / (1000 * 60 * 60 * 24))
            const hours = Math.floor((OfferTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((OfferTime % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((OfferTime % (1000 * 60)) / 1000)

            setTime({
                Days: String(days).padStart(2, '0'),
                Hours: String(hours).padStart(2, '0'),
                Minutes: String(minutes).padStart(2, '0'),
                Seconds: String(seconds).padStart(2, '0')
            })
        }

      
            const interval = setInterval(updateTime, 1000)

            return () => { clearInterval(interval)}
    }, [])


    return (
        <>
            <div className="flex justify-center items-center gap-3">
                {/* Days */}
                <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-black">Days</span>
                    <span className="text-2xl font-bold text-black">{time.Days}</span>
                </div>

                {/* Separator */}
                <span className="text-2xl font-bold text-purple-500">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-black">Hours</span>
                    <span className="text-2xl font-bold text-black">{time.Hours}</span>
                </div>

                {/* Separator */}
                <span className="text-2xl font-bold text-[var(--color-primary)]">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-black">Minutes</span>
                    <span className="text-2xl font-bold text-black">{time.Minutes}</span>
                </div>

                {/* Separator */}
                <span className="text-2xl font-bold text-[var(--color-primary)]">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-black">Seconds</span>
                    <span className="text-2xl font-bold text-black">{time.Seconds}</span>
                </div>
            </div>
        </>
    )
}

export default CounteDownTimer