import React from 'react'
import Balancer from "react-wrap-balancer";
import Form from '@/components/shared/form';


export default function page() {
  return (
    <div className="relative col-span-1 h-96 overflow-hidden">
        <h1 className="mb-1 p-1 text-3xl font-semibold text-center text-purple-700">
          Let's Make Magic Brother
        </h1>
    <div
      className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
    >
      <div className="flex h-60 items-center justify-center">
        <Form />
     </div>
    </div>    
    </div>
  )
}
