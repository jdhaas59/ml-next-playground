import React from 'react'

export default function Form() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <form>
    
    <div className="flex w-full items-start justify-center bg-grey-lighter mb-5 mt-[5rem] ">
      <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-600">
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input type="file"  name="file"  className="hidden"/>
      </label>
    </div>
    <span className="text-white">File Uploaded : </span>

    <div className="flex items-center justify-center">
      <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5" type="submit">
        PREDICT
      </button>
    </div>
    </form>
    </div>
  )
}
