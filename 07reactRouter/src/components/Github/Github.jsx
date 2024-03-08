import  React from 'react'
import {useEffect,useState} from 'react'
// import { useLoaderData } from 'react-router-dom';
function Github() {
        // const data =useLoaderData();
        // differet way to fetch Api
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((responce)=>responce.json())
        .then(data=>{
            console.log(data);
            setData(data)
            
        })
        
    },[])
    return(
        <div className="text-center text-3xl text-white m-4 bg-gray-700 text-center ">
            GitHub Followers: {data.followers}
            <div className="flex justify-center align-center">
            <img width={200} src={data.avatar_url} alt="Git picture" />
            </div>
           
            </div>
    )
}
export default Github

// export const githubInfoLoader= async () =>{
//    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
//    return response.json()
// }