import React, {useContext} from 'react'
import { getSemDetails } from '../App'

const Navbar = () => {

  const [state] = useContext(getSemDetails)

  const calculateHandler = () => {
    
  }
  return (
    <div className="navBar fixed px-4 sm:px-20 z-50 w-full ">
      <div className="h-20  mx-auto flex justify-between items-center">
        <p className="font-bold text-lg">Cgpa Calculator</p>
        <div onClick={calculateHandler} className=" p-4  h-8 top-24 right-8 flex justify-center items-center  bg-red-500 rounded-sm text-white ">
          <p>Calculate</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
