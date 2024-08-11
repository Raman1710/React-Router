import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState();
    // useEffect(() => {
    //   fetch("https://api.github.com/users/raman1710")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
    
  return (
    <>
        <div className=' bg-slate-500 text-3xl m-8 text-center p-8 '>Github Name: {data.name}
        <img src = {data.avatar_url} alt='github_pic' width={250} />
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const  response = await fetch("https://api.github.com/users/raman1710")

    return response.json();
}