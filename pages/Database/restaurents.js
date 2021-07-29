import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import Link from 'next/link';

const restaurents = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
        <div className="flex shadow-sm bg-gray-50  p-4 justify-between">
            <div className="flex space-x-3  ">
                <p className="text-gray-600">Registerd Restaurents</p>
            </div>
            <div className="flex space-x-4 text-gray-400 mr-3">
                    <Link href="../form/addRestaurent">
                        <div className="flex-row flex">
                        <AddIcon/>
                        <p className="text-gray-600 font-semibold hover:bg-gray-50 hover:text-green-600  cursor-pointer">Add</p>
                        </div>
                    </Link>
                    <Link href="">
                        <div className="flex-row flex">
                        <DeleteIcon/>
                        <p className="text-gray-600 font-semibold hover:bg-gray-50 hover:text-green-600  cursor-pointer">Delete</p>
                        </div>
                    </Link>
        </div>
        </div>
            <div className="text-center font-semibold flex grid p-4 justify-evenly grid-cols-10 rounded-xl border border-gray-100 bg-white mt-5 divide-x">
                <div>Id</div>
                <div>Restaurents Name</div>
                <div>Address</div>
                <div>Phone</div>
                <div>Email</div>
                <div>Delivery Comission</div>
                <div>Pickup Comission</div>
                <div>Revenue</div>
                <div>Status</div>
                <div>Actions</div>
            </div>
            
            <div className="text-center flex grid p-4 justify-evenly grid-cols-10 rounded-xl border border-gray-100 bg-white divide-x mt-1">
                <div>1</div>
                <div>Dominose_Pizza</div>
                <div>Golapbag, Barddhman west Bengal</div>
                <div>1236547890</div>
                <div>12345@gmail.com</div>
                <div>0.1</div>
                <div>0.2</div>
                <div>10</div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    )
}

export default restaurents
