import React, {useContext, useState} from 'react'
import { getSemDetails, setCgpaDetails} from '../App'

const Navbar = () => {

  const [myCgpa, setmyCgpa] = useContext(setCgpaDetails)
  
  return (
    <div className="navBar fixed px-4 py-4 sm:px-20 z-50 w-full ">
      <div className="h-12 sm:h-8  mx-auto flex justify-between items-center">
        <p className="font-bold text-lg"> Cgpa Calculator</p>
        <div className=" p-4  h-8 top-24 right-8 flex justify-center items-center  bg-red-500 rounded-sm text-white ">
          <p>{myCgpa}</p>
        </div>
      </div>
      <p className=" text-sm">Please fill all the feilds for better results.</p>
    </div>
  )
}

export default Navbar
