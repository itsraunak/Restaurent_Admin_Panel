import React from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CancelIcon from '@material-ui/icons/Cancel';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import Link from 'next/link';
import { Fragment } from 'react';

const Sidebar = () => {
    return (
        <Fragment>
            <div className=" flex md:w-3/12 h-6/12 bg-grey shadow-1.5xl border flex-col rounded-xl">
                <div className=" border-b py-3 flex justify-around ">
                    <p className="text-xl  font-semibold">Admin Panel</p>
                </div>
                    {/* <div className='flex-col'> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="flex h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg> */}
                        {/* <PersonIcon className="h-30 w-30 flex content-center"/> */}
                        {/* <p className="text-center text-2xl font-semibold">Admin</p>
                    </div> */}
                <div className=" ml-5 space-y-2 mt-4">
                    <Link href="../Navigation/dashbord">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer " >
                        <DonutLargeIcon />
                        <p >Dashbord</p>
                        </div>
                    </Link>
                    
                    <Link href="../Navigation/menu">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                            <MenuIcon/>
                            <p >Menu</p>
                        </div>
                    </Link>

                    <Link href="../Navigation/transaction">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                            <SyncAltIcon/>
                            <p >Transaction</p>
                        </div>
                    </Link>
                    
                    <Link href="../Database/user">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                            <PersonIcon/>
                            <p >User</p>
                        </div>
                    </Link>
                    
                    <Link href="../Database/restaurents">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                            <RestaurantIcon/>
                            <p >Restaurents</p>
                        </div>
                    </Link>
                    
                    <Link href="../Database/deliveryBoy">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                            <LocalShippingIcon/>
                            <p >DeliveryBoy</p>
                        </div>
                    </Link>
                    
                    <Link href="../Navigation/promotion">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                            <NotificationsActiveIcon/>
                            <p >Promotions</p>
                        </div>
                    </Link>
{/* 
                    <Link href="../Navigation/chat">
                        <div >
                                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer " >
                                <QuestionAnswerIcon />
                                <p >Chat with us</p>
                                </div>
                        </div>
                    </Link> */}

                        {/* <Link href="../Navigation/operatorControl">
                            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                                <SupervisorAccountIcon />
                                <p >Operator control</p>
                            </div>
                        </Link> */}

                        {/* <Link href="../Navigation/cancleReq">
                            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  ">
                                <CancelIcon />
                                <p >Cancle Request</p>
                            </div>
                        </Link> */}

                    </div>
            </div>
        </Fragment>
    )
}

export default Sidebar
