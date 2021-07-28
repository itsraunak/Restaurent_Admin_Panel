import Link from "next/link"
const Header = () => {
    return (
        <div className="flex shadow-sm bg-gray-50  p-4 justify-between border-b py-3 mt-1 max-w-full ">
            <div className="flex space-x-3  ">
                <p className="text-gray-400">Delivery App </p>
            </div>

            <div className="flex space-x-4 text-gray-400 mr-3">
                <Link href="../Login">
                    <p className="text-gray-600 font-semibold hover:bg-gray-50 hover:text-green-600  cursor-pointer">Log in</p>
                </Link>
                <Link href="../Signup">
                    <p className="text-gray-600 font-semibold hover:bg-gray-50 hover:text-green-600  cursor-pointer">Sign up</p>
                </Link>
        </div>
    </div>
    )
}

export default Header