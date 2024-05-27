import React,{useContext} from 'react'
import './BookList.css'
import { Context } from '../pages/Dashboard'

export default function BookList({title,aurthor,index}) {
    const {setBookList} = useContext(Context)
    const deleteBook = (i) =>{
        setBookList(pre=>pre.filter((list,index)=> index!==i ))
    }
  return (
    <>
    <div className='list-container'>
        <div className='book-info'>
            <div>Title:{title}</div>
            <div>Aurthor:{aurthor}</div>
        </div>
        <button onClick={()=>deleteBook(index)}><i className="bi bi-trash3-fill"></i></button>
    </div>
    </>
  )
}
