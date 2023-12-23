// import { useEffect } from "react";
// import { useState } from "react"

import { useLoaderData } from "react-router-dom";

function Github() {

    // GENERAL APPROACH :(Here when the user clicks on the github link and comes to this page the fetch request is sent, whereas we want to optimize it and send the request while being on the previous screen as soon as we hover on the link to current page)

    // const [data, setData] = useState({});

    // useEffect(()=>{
    //     // setData(()=>{
    //     //     return (fetch("https://api.github.com/users/ankit-kr27"))
    //     //     .then(response=>response.json())
    //     //     .then(data=>{
    //     //         console.log(data)
    //     //         return data
    //     //     })
    //     //     .catch(err=>console.log(err))
    //     // })
    //     // console.log(data);

    //     fetch('https://api.github.com/users/ankit-kr27')
    //     .then((response)=>response.json())
    //     .then((info)=>{
    //         console.log(info);
    //         setData(info);
    //     })
    // }, [])
    
    const data = useLoaderData();

  return (
    <div className="">
      <img src={data.avatar_url} width={200} alt="" className="rounded-full mx-auto" />
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.followers} </h1>
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Username: {data.login} </h1>
    </div>
  )
}

export default Github

export const githubLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/ankit-kr27")
    return response.json();
}

// DATA FLOW
// githubLoader(Github) -> <Route loader={githubLoader}/>(main) -> useLoaderData()(Github)