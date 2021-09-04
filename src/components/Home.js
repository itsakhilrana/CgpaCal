import React, { useState, useContext } from 'react'
import { getSemDetails, setCgpaDetails } from '../App'

const Home = () => {
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
      (((parseFloat(firstSem.cgpa) * parseFloat(firstSem.credit)) / 10 +
        (parseFloat(secondSem.cgpa) * parseFloat(secondSem.credit)) / 10) /
        (parseFloat(firstSem.credit) + parseFloat(secondSem.credit))) *
      10
    ).toFixed(2)
    let secondYear = (
      (((parseFloat(thirdSem.cgpa) * parseFloat(thirdSem.credit)) / 10 +
        (parseFloat(fourthSem.cgpa) * parseFloat(fourthSem.credit)) / 10) /
        (parseFloat(thirdSem.credit) + parseFloat(fourthSem.credit))) *
      10
    ).toFixed(2)
    let thridYear = (
      (((parseFloat(fivethSem.cgpa) * parseFloat(fivethSem.credit)) / 10 +
        (parseFloat(sixthSem.cgpa) * parseFloat(sixthSem.credit)) / 10) /
        (parseFloat(fivethSem.credit) + parseFloat(sixthSem.credit))) *
      10
    ).toFixed(2)
    let fourthYear = (
      (((parseFloat(seventhSem.cgpa) * parseFloat(seventhSem.credit)) / 10 +
        (parseFloat(eightthSem.cgpa) * parseFloat(eightthSem.credit)) / 10) /
        (parseFloat(seventhSem.credit) + parseFloat(eightthSem.credit))) *
      10
    ).toFixed(2)

    //setcgpa((firstYear + secondYear + thridYear, fourthYear) / 4)

    let sum = parseFloat(firstYear) + parseFloat(secondYear) + parseFloat(thridYear) + parseFloat(fourthYear)
    let finalCgpa = parseFloat(sum/4).toFixed(1)
    setmyCgpa(
      finalCgpa
    )
  }

  console.log(state)
  console.log('com render')

  const nextHandler = () => {
    setcount(count + 1)
  }

  const prevHandler = () => {
    setcount(count - 1)
  }

  return (
    <div className="  pt-20 w-full  pb-20  lg:pt-0 h-full lg:h-screen px-8  md:px-20 ">
      <div className="">
        <div className=" sm:flex justify-around items-center lg:h-screen">
          <div className="mt-16 text-4xl w-4/5 font-semibold  text-gray-100 sm:text-2xl md:text-4xl sm:font-semibold  md:w-2/4 md:mt-0">
            <p className="">We came, We saw, We conquered!</p>
          </div>
          <div className="cgpaCard mt-8 md:mt-16 sm:w-2/4 md:w-2/4 mx-auto">
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
                className=" p-4  h-12 w-full  flex justify-center items-center  bg-red-500 rounded-lg text-white "
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
                  className=" p-4 w-full h-12 flex justify-center items-center  bg-red-500 rounded-lg text-white "
                >
                  <p>Next</p>
                </button>
              ) : (
                <div
                  onClick={calculateHandler}
                  className="  p-4 w-full  h-12 flex justify-center items-center font-bold bg-gray-100 rounded-lg text-red-500 "
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

export default Home
