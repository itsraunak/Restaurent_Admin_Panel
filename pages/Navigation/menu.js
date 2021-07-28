import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';


const menu = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 h-screen " >
            <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-lg">
                    Menu
                </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                    Items!
                </p>
            </div>

        <div className="flex p-4 space-x-3">
            <div className="bg-white w-4/12 rounded-xl border border-gray-100">
                <div className="flex-row flex content-between border-b p-3 border-gray-100 justify-between font-semibold">
                    <div>
                        <p>Categories</p>
                    </div>
                    <div className=" flex flex-col">
                    <AddIcon/>
                    </div>
                </div>
                <div className="flex px-8 py-1 overflow-y-scroll h-96 flex-row justify-between ">
                    <div className=" flex flex-col">
                        <p>Asian</p>
                    </div>
                    <div className=" flex flex-col">
                        <EditIcon/>
                    </div>
                </div>
            </div>
            <div className="bg-white w-4/12 rounded-xl border border-gray-100">
                <div className="flex-row flex content-between border-b p-3 border-gray-100 justify-between font-semibold">
                    <div>
                        <p>Asian</p>
                    </div>
                    <div className=" flex flex-col">
                    <AddIcon/>
                    </div>
                </div>
                <div className="flex px-8 py-1 overflow-y-scroll h-96 flex-row justify-between">
                    <div>
                        <p>Roll</p>
                    </div>
                    <div className=" flex flex-col">
                        <EditIcon/>
                    </div>
                </div>
            </div>
            <div className="bg-white w-4/12 rounded-xl border border-gray-100">
                <div className="flex-row flex content-between border-b p-3 border-gray-100 justify-between font-semibold">
                    <div>
                        <p>Roll</p>
                    </div>
                    <div className=" flex flex-col">
                    <AddIcon/>
                    </div>
                </div>
                <div className="flex px-8 py-1 overflow-y-scroll h-96 flex-row justify-between ">
                    <div className=" flex flex-col ">
                        <p>Cheese Roll </p>
                        <p>Chicken Roll</p>
                    </div>
                    <div className=" flex flex-col">
                        <EditIcon/>
                        <EditIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default menu