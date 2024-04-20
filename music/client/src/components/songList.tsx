import axios from 'axios'
import {useState,useEffect} from 'react'

export default function ProductList (){
    const [songs,setsongs]=useState([]);

    useEffect(()=>{
        async function getSongs(){
            const response=await axios.get('http://localhost:3000/songs')
            setsongs(response.data)
        }
        getSongs()
    },[])
    
    console.log(songs)
    return (
<div>

    <hr>from songList </hr>
</div>


    )
}