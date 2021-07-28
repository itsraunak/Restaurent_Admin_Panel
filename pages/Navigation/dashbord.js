import React from 'react'
import Card from '../../components/Dashbord/card'
import Middle from '../../components/Dashbord/Middle'
import RightBar from '../../components/Dashbord/RightBar'





const Container = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full max-w-full " >
            {/* <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-lg">
                    Welcome 
            </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                    Admin!
            </p>
            </div> */}
            <div className="flex p-4 space-x-5">
                <Card title="PENDING"   icon={0} />
                <Card title="ONGOING"   icon={1} />
                <Card title="CANCELLED"  icon={2} />
                <Card title="DELIVERED"  icon={3} />
                <Card title="REJECTED" icon={4} />

            </div>
            <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                <Middle />
                <RightBar />
            </div>
        </div>
    )
}

export default Container