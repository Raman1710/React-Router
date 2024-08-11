import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className=' bg-slate-500 text-center p-8 text-2xl  '>User: {userid}</div>
  )
}

export default User