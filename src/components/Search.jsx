import React,{useState} from 'react'
import './Search.css'
export default function Search() {
    const [search,setSearch] = useState('')
    const handelChange = (event) =>{
        setSearch(event.target.value)
        
    }
    return (
        <>
        <div className='search'>
            <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={handelChange}
            />
            <button><i class="bi bi-search"></i></button>
        </div>
        </>
    )
}
