import Promotion from '../../components/Dashbord/promotion'

const Promotioncard = () =>
{
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full max-w-full ">
            <div className="flex p-4 space-x-5">
            <Promotion title="PENDING"   icon={0} />
            <Promotion title="ONGOING"   icon={1} />
            <Promotion title="CANCELLED"  icon={2} />
            <Promotion title="DELIVERED"  icon={3} />
            <Promotion title="REJECTED" icon={4} />
            </div>
        </div>
    )
}
export default Promotioncard