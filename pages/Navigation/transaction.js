import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const Container = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full" >
        <div className="flex shadow-sm bg-gray-50  p-4 justify-between">
            <div className="flex space-x-3  ">
                <p className="text-gray-600 text-2xl font-semibold">Transaction</p>
            </div>
            <div className="flex space-x-4 text-gray-400 mr-3">

                <ArrowBackIosIcon />
                <p className="text-gray-600 font-semibold">Page </p>
                <p className="text-gray-600 font-semibold">01/30</p>
                <ArrowForwardIosIcon />
            </div>
        </div>
            <div className="text-center font-semibold flex grid p-4 justify-evenly grid-cols-4 rounded-xl border border-gray-100 bg-white mt-10 divide-x mb-1">
                <div>Client</div>
                <div>Shopkeeper</div>
                <div>Ammount</div>
                <div>Delivered by</div>
            </div>
            <div className="text-center font-semibold flex grid p-4 justify-evenly grid-cols-4 rounded-xl border border-gray-100 bg-white divide-x">
                <div className=" flex text-gray-700 grid-rows-4 space-x-4 0 hover:text-green-600  cursor-pointer">
                    <div className="scale-50"><PermIdentityIcon /></div>
                    <div>
                    <p>Raunak</p>
                    <p>Order_id - 00000000</p>
                    </div>
                </div>
                <div className=" flex text-gray-700  space-x-4 0  hover:text-green-600  cursor-pointer">
                    <div><StorefrontIcon /></div>
                    <div>
                    <p>Dominose_Pizza</p>
                    <p>Shop_id - 00000000</p>
                    </div>
                </div>
                <div className=" flex text-gray-700  space-x-4 0  hover:text-green-600  cursor-pointer">
                    <AttachMoneyIcon></AttachMoneyIcon>
                    <p>400</p>
                </div>
                <div className=" flex text-gray-700  space-x-4 0  hover:text-green-600  cursor-pointer">
                    <div><DirectionsBikeIcon /></div>
                    <div>
                    <p>Rohit Kumar</p>
                    <p>Boy_id - 00000000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
