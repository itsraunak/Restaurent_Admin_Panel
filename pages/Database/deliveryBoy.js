import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import Link from 'next/link'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Deliveryboy = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
        <div className="flex shadow-sm bg-gray-50  p-4 justify-between">
            <div className="flex space-x-3  ">
                <p className="text-gray-600">Deliveryboy</p>
                </div>
                <div className="flex space-x-4 text-gray-400 mr-3">
                    <Link href="../form/addRestaurent">
                        <div className="flex-row flex text-gray-600 font-semibold hover:bg-gray-50 hover:text-green-600  cursor-pointer">
                        <AddIcon/>
                        <p>Add</p>
                        </div>
                    </Link>
                    {/* <Link> */}
                        <div className="flex-row flex text-gray-600 font-semibold hover:bg-gray-50 hover:text-green-600  cursor-pointer">
                        <DeleteIcon/>
                        <p>Delete</p>
                        </div>
                    {/* </Link> */}
            </div>
        </div>
            <div className="text-center font-semibold flex grid p-4 justify-evenly grid-cols-10 rounded-xl border border-gray-100 bg-white mt-5 divide-x mb-1">
                <div>Id</div>
                <div>Image</div>
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Occupation</div>
                <div>Restaurents</div>
                <div>Revenue</div>
                <div>Status</div>
                <div>Actions</div>
            </div>
            
            <div className="text-center flex grid p-4 justify-evenly grid-cols-10 rounded-xl border border-gray-100 bg-white divide-x">
                <div>1</div>
                <div><PermIdentityIcon/></div>
                <div>Bansal Kumar</div>
                <div>12345@gmail.com</div>
                <div>1236547890</div>
                <div>Student</div>
                <div>All</div>
                <div>2000</div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    )
}

export default Deliveryboy
