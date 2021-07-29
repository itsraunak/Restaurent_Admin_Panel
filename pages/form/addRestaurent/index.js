import Link from "next/link"
import { Fragment } from "react"

const addRestaurent = () =>
{
    return (
        <div class="min-h-screen flex items-center justify-center bg-grey-400">
            <div class="bg-white p-16 rounded shadow-2xl w-2/3">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Add New Restaurent</h2>
                <form class="space-y-5">

                    <div>
                    <label class="block mb-1 font-bold text-gray-500">Restaurent Name</label>
                    <input type="Name" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                    <label class="block mb-1 font-bold text-gray-500">Address</label>
                    <input type="Address" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                    <label class="block mb-1 font-bold text-gray-500">Phone</label>
                    <input type="Phone" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                    <label class="block mb-1 font-bold text-gray-500">Email</label>
                    <input type="Email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    {/* <div>
                    <label class="block mb-1 font-bold text-gray-500"></label>
                    <input type="" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                    <label class="block mb-1 font-bold text-gray-500">Password</label>
                    <input type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div> */}

                            
                            <Link href='../../Navigation/dashbord'>
                                <div>
                                    <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Log In</button>
                                </div>
                    </Link>
                </form>
            </div>
        </div>
    )      
}

export default addRestaurent