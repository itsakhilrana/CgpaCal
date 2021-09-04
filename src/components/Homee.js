import React, { useState, useContext } from 'react'
import { getSemDetails, setCgpaDetails } from '../App'

const Homee = () => {
  const [state, setstate] = useContext(getSemDetails)
  const [myCgpa, setmyCgpa] = useContext(setCgpaDetails)
  const [cgpa, setcgpa] = useState(0)

  const [count, setcount] = useState(0)

  const inputDetails = [
    {
      name: 'firstSem',
      sem: '1st Semester',
      myState: state,
    },
    {
      name: 'secondSem',
      sem: '2nd Semester',
      myState: state,
    },
    {
      name: 'thirdSem',
      sem: '3rd Semester',
      myState: state,
    },
    {
      name: 'fourthSem',
      sem: '4th Semester',
      myState: state,
    },
    {
      name: 'fivethSem',
      sem: '5th Semester',
      myState: state,
    },
    {
      name: 'sixthSem',
      sem: '6th Semester',
      myState: state,
    },
    {
      name: 'seventhSem',
      sem: '7th Semester',
      myState: state,
    },
    {
      name: 'eightthSem',
      sem: '8th Semester',
      myState: state,
    },
  ]

  const {
    firstSem,
    secondSem,
    thirdSem,
    fourthSem,
    fivethSem,
    sixthSem,
    seventhSem,
    eightthSem,
  } = state

  const calculateHandler = () => {

    let firstYear = (
      ((parseInt(firstSem.cgpa) * parseInt(firstSem.credit)) / 10 +
        (parseInt(secondSem.cgpa) * parseInt(secondSem.credit)) / 10) /
      (parseInt(firstSem.credit) + parseInt(secondSem.credit))
    ).toFixed(2)
    let secondYear = (
      ((parseInt(thirdSem.cgpa) * parseInt(thirdSem.credit)) / 10 +
        (parseInt(fourthSem.cgpa) * parseInt(fourthSem.credit)) / 10) /
      (parseInt(thirdSem.credit) + parseInt(fourthSem.credit))
    ).toFixed(2)
    let thridYear = (
      ((parseInt(fivethSem.cgpa) * parseInt(fivethSem.credit)) / 10 +
        (parseInt(sixthSem.cgpa) * parseInt(sixthSem.credit)) / 10) /
      (parseInt(fivethSem.credit) + parseInt(sixthSem.credit))
    ).toFixed(2)
    let fourthYear = (
      ((parseInt(seventhSem.cgpa) * parseInt(seventhSem.credit)) / 10 +
        (parseInt(eightthSem.cgpa) * parseInt(eightthSem.credit)) / 10) /
      (parseInt(seventhSem.credit) + parseInt(eightthSem.credit))
    ).toFixed(2)

    //setcgpa((firstYear + secondYear + thridYear, fourthYear) / 4)
    setmyCgpa((firstYear + secondYear + thridYear, fourthYear) / 4)
  }
  
  console.log(state)
  console.log("com render")

  const nextHandler = () => {
    setcount(count + 1)
  }

  const prevHandler = () => {
    setcount(count - 1)
  }

  return (
    <div className="  pt-20 w-full  pb-20  lg:pt-0 h-screen  px-8 ">
      <div className="">
        
        <div className=" lg:flex   w-full  justify-around    items-center lg:h-screen">
          <div className="cgpaCard mt-24 md:mt-16 sm:w-2/4 md:w-1/4 mx-auto">
            <div>
              <h1 className="text-red-500 font-semibold text-4xl mb-5">
                {inputDetails[count].sem}
              </h1>
              <div className="mb-5">
                <label>Cgpa</label>
                <input
                  className="w-full  text-8xl"
                  type="number"
                  value={
                    inputDetails[count].myState[inputDetails[count].name].cgpa
                  }
                  placeholder=""
                  onChange={(e) => {
                    setstate({
                      ...state,
                      [inputDetails[count].name]: {
                        ...inputDetails[count].myState[
                          inputDetails[count].name
                        ],
                        cgpa: e.target.value,
                      },
                    })
                  }}
                ></input>
              </div>
              <div>
                <label>Credit</label>
                <input
                  className="w-full text-8xl"
                  type="number"
                  value={
                    inputDetails[count].myState[inputDetails[count].name].credit
                  }
                  placeholder=""
                  onChange={(e) => {
                    setstate({
                      ...state,
                      [inputDetails[count].name]: {
                        ...inputDetails[count].myState[
                          inputDetails[count].name
                        ],
                        credit: e.target.value,
                      },
                    })
                  }}
                ></input>
              </div>
            </div>

            <div className=" flex space-x-4 mt-10">
              <button
                onClick={prevHandler}
                disabled={count === 0}
                className=" p-4  h-8 w-full  flex justify-center items-center  bg-red-500 rounded-sm text-white "
              >
                <p>Previous</p>
              </button>
              {count < inputDetails.length - 1 ? (
                <button
                  onClick={nextHandler}
                  disabled={
                    inputDetails[count].myState[inputDetails[count].name]
                      .cgpa &&
                    inputDetails[count].myState[inputDetails[count].name].credit
                      ? false
                      : true
                  }
                  className=" p-4 w-full  h-8 flex justify-center items-center  bg-red-500 rounded-sm text-white "
                >
                  <p>Next</p>
                </button>
              ) : (
                <div
                  onClick={calculateHandler}
                  className="  p-4 w-full  h-8 flex justify-center items-center  bg-red-500 rounded-sm text-white "
                >
                  <p>Calculate</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homee
