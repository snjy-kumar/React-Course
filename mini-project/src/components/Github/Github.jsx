// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({})    
    // useEffect(() => {
    //     fetch("https://api.github.com/users/snjy-kumar")
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })
const follower = "https://github.com/snjy-kumar";
  return (
    <div className="text-center m-4 bg-gray-600 text-3xl p-4 text-white">Github followers: {data.followers}
    <br />Github following: {data.following}
    <br />Github Repo count: {data.public_repos}
    <img src={data.avatar_url} alt="avatar" className="rounded-full h-32 w-32 mx-auto" />
    <button>
      <a href={follower} className="text-blue-500">Follow Me</a>
    </button>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/snjy-kumar")
    return res.json()
}