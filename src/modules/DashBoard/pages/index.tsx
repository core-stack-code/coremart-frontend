import Icon from "@/components/ui/icons"

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-[32px] font-bold">Dashboard</h1>
        <div className="flex justify-between items-center">

          <div className="flex flex-col bg-white p-4 rounded-[14px] gap-6">
            <div className="flex justiy-between gap-35">
              <div className="space-y-5">
                <p className="text-[var(--color-muted)]">Total User</p>
                <p className="text-[28px] font-bold">40,689</p>
              </div>
              <div>
                <Icon name="totaluserIcon" width={60} height={60} />
              </div>
            </div>
            <div className="flex gap-1.5">
              <Icon name="profitupIcon" width={24} height={24} />
              <p className="text-[var(--color-profitup)]">8.5%</p>
              <p className="text-[var(--color-muted)]">Up from yesterday</p>
            </div>
          </div>


          <div className="flex flex-col bg-white p-4 rounded-[14px] gap-6">
            <div className="flex justiy-between gap-36">
              <div className="space-y-5">
                <p className="text-[var(--color-muted)]">Total Order</p>
                <p className="text-[28px] font-bold">10,293</p>
              </div>
              <div>
                <Icon name="totalorderIcon" width={60} height={60} />
              </div>
            </div>
            <div className="flex gap-1.5">
              <Icon name="profitupIcon" width={24} height={24} />
              <p className="text-[var(--color-profitup)]">1.3%</p>
              <p className="text-[var(--color-muted)]">Up from past week</p>
            </div>
          </div>


          <div className="flex flex-col bg-white p-4 rounded-[14px] gap-6">
            <div className="flex justiy-between gap-36">
              <div className="space-y-5">
                <p className="text-[var(--color-muted)]">Total Sales</p>
                <p className="text-[28px] font-bold">$89,000</p>
              </div>
              <div>
                <Icon name="totalsalesIcon" width={60} height={60} />
              </div>
            </div>
            <div className="flex gap-1.5">
              <Icon name="profitdownIcon" width={27} height={12} />
              <p className="text-[var(--color-profitdown)]">4.3%</p>
              <p className="text-[var(--color-muted)]">Down from yesterday</p>
            </div>
          </div>

        </div>




        <div className="bg-white text-[24px] font-bold p-7 rounded-[14px]">
          <h1>Sales Details</h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard