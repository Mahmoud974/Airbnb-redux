import {FaAirbnb} from "react-icons/fa"
import {TbWorld} from "react-icons/tb"
import {IoIosMenu} from "react-icons/io"
import {FaRegCircleUser} from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between p-3 px-20 ">
      <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-[#ff5a5f]">
      <FaAirbnb className="text-4xl"/> <span>airbnb</span>
      </Link>
      
      <ul className="flex items-center justify-center gap-4">
        <li className="font-bold text-[#484848]"><Link to="/">Logment</Link></li>
        <li className=" text-[#484848]"><Link to="/">Expériences</Link></li>
        <li className=" text-[#484848]"><Link to="/">Expériences en ligne</Link></li>
       
      </ul>
      <div className="flex items-center justify-center gap-3">
<a href="#"> <TbWorld/></a>
      
 <div className="flex items-center justify-center gap-3 border border-[#rgb(237,237,237)] p-3 rounded-full hover:shadow-md cursor-pointer" >

    <IoIosMenu className="text-xl"/>
    <FaRegCircleUser className="text-xl"/>
 </div></div>

  
    </nav>
  )
}
