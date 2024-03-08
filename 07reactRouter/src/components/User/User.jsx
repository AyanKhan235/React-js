import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userid}=useParams()
    return( 
        <div className="bg-gray-700  
        text-white flex justify-center text-3xl  p-4  m-6 align-center max-w-screen-xl item-center text-center ">User:{userid}</div>
    )
}
export default User