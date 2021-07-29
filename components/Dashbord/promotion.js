    import AllOutIcon from '@material-ui/icons/AllOut';
    import CancelIcon from '@material-ui/icons/Cancel';
    import DoneIcon from '@material-ui/icons/Done';
    import LockIcon from '@material-ui/icons/Lock';
    import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
    
    
    
    const Style = "text-white text-xs"
    
const arrayIcon =  [<AllOutIcon fontSize="small" className={Style} />,
                    <HourglassEmptyIcon fontSize="small" className={Style} />,
                    <CancelIcon fontSize="small" className={Style} />,
                    <DoneIcon fontSize="small" className={Style} />,
                    <LockIcon fontSize="small" className={Style} />]
                    
const Color = ["from-pink-600 to-pink-500",
                "from-indigo-600 to-indigo-400",
                "from-blue-600 to-blue-400",
                "from-green-600 to-green-400",
                "from-yellow-600 to-yellow-400"]
    
    
    const Promotion = (props) => {
        return (
            <div className={`transform hover:scale-110 cursor-pointer 
                            transition delay-100 w-3/12 ease-linear p-2 py-4 shadow-xl
                            border rounded-xl bg-gradient-to-r ${ Color[props.icon] }`} >
                
                <div className="flex justify-between">
                    <div></div>
                    <div className=" w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
                        {arrayIcon[props.icon]}
                    </div>
                </div>
                <p className="text-gray-200 text-xs  ">
                    {props.title}
                </p>
                <p className="text-gray-50 text-lg  font-semibold  ">
                    10 ORDER
                </p>
                <p className="text-gray-300  text-sm ">
                    20
                </p>    
            </div>
        )
    }

export default Promotion