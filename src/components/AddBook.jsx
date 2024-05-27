import React,{useState,useContext} from 'react'
import './AddBook.css'
import { Context } from '../pages/Dashboard'
export default function AddBook() {
    const {setBookList} = useContext(Context)
    const [bookInfo,setBookInfo] = useState({
        bookTitle:"",
        aurthor:"",
        description:""
    })
    const handelChange = (event) =>{
        const{name,value} = event.target    
        setBookInfo({
            ...bookInfo,
            [name]:value,
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setBookList(pre=>[...pre,bookInfo])
        setBookInfo({
            bookTitle:"",
            aurthor:"",
            description:""
        })
    }
  return (
    <>
    <div className='entrey_container'>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Book Title'
                name='bookTitle'
                value={bookInfo.bookTitle}
                onChange={handelChange}
                required
            />
            <input 
                type='text'
                placeholder='Aurthor'
                name='aurthor'
                value={bookInfo.aurthor}
                onChange={handelChange}
                required
            />
            <input 
                type='text'
                placeholder='Short Description'
                name='description'
                value={bookInfo.description}
                onChange={handelChange}
                required
            />
            <button type='Submit'>Add Book</button>
        </form>
    </div>
    </>
  )
}
