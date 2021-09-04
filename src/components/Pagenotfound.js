import React from 'react'
import {Link} from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <div className="h-screen pt-20">
      <div className="container mx-auto p-6 sm:py-12 lg:py-24">
        <h1 className=" text-4xl mt-10 md:mt-0 font-semibold">
          Opps, seems like you are lost?
        </h1>
        <div className="text-red-500 mt-2">
          <Link to="/">Mind going back Home!</Link>
        </div>
      </div>
    </div>
    )
}

export default Pagenotfound
