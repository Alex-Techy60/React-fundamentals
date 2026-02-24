import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/alex-techy60')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <p>Github UserName: {data.login}</p>
            <p>Github Repositories: {data.public_repos}</p>
            <img className='mx-auto' src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/alex-techy60')
    if (!response.ok) {
        throw new Error(`GitHub error: ${response.status}`);
    }

    return response.json();
}