import React, { useState, useContext } from 'react'
import { getSemDetails } from '../App'

const Home = () => {
  
  
  const [state, setstate] = useContext(getSemDetails)

   console.log(state)

  
  
  
  return (
    <div className="  pt-20 w-full h-full pb-20  lg:pt-0 lg:h-screen  px-8 ">
      <div className=" ">
        <div className=" lg:flex  md:mx-auto lg:space-x-20  sm:w-2/3 sm:mx-auto justify-around  lg:mx-auto  items-center lg:h-screen">
          <div>
            <div className="Yr">
              <p>1st Semester</p>
              <div className="flex space-x-4 ">
                <div>
                  <label>Cgpa</label>
                  <input
                    className=" w-3/4 sm:w-full"
                    type="number"
                    value={state.firstSem.cgpa}
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        firstSem: { ...state.firstSem, cgpa: e.target.value },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    className=" w-3/4 sm:w-full"
                    type="number"
                    value={state.firstSem.credit}
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        firstSem: { ...state.firstSem, credit: e.target.value },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="Yr">
              <p>2nd Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.secondSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        secondSem: { ...state.secondSem, cgpa: e.target.value },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.secondSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        secondSem: {
                          ...state.secondSem,
                          credit: e.target.value,
                        },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="Yr">
              <p>3rd Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.thirdSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        thirdSem: { ...state.thirdSem, cgpa: e.target.value },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.thirdSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        thirdSem: { ...state.thirdSem, credit: e.target.value },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="Yr">
              <p>4th Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.fourthSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        fourthSem: { ...state.fourthSem, cgpa: e.target.value },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.fourthSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        fourthSem: {
                          ...state.fourthSem,
                          credit: e.target.value,
                        },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Yr">
              <p>5th Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.fivethSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        fivethSem: { ...state.fivethSem, cgpa: e.target.value },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.fivethSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        fivethSem: { ...state.fivethSem, credit: e.target.value },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="Yr">
              <p>6th Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.sixthSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        sixthSem: { ...state.sixthSem, cgpa: e.target.value },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.sixthSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        sixthSem: { ...state.sixthSem, credit: e.target.value },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="Yr">
              <p>7th Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.seventhSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        seventhSem: {
                          ...state.seventhSem,
                          cgpa: e.target.value,
                        },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.seventhSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        seventhSem: {
                          ...state.seventhSem,
                          credit: e.target.value,
                        },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="Yr">
              <p>8th Semester</p>
              <div className="flex space-x-4">
                <div>
                  <label>Cgpa</label>
                  <input
                    value={state.eightthSem.cgpa}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        eightthSem: {
                          ...state.eightthSem,
                          cgpa: e.target.value,
                        },
                      })
                    }}
                  ></input>
                </div>
                <div>
                  <label>Credit</label>
                  <input
                    value={state.eightthSem.credit}
                    className=" w-3/4 sm:w-full"
                    type="number"
                    placeholder = ""
                    onChange={(e) => {
                      setstate({
                        ...state,
                        eightthSem: {
                          ...state.eightthSem,
                          credit: e.target.value,
                        },
                      })
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
