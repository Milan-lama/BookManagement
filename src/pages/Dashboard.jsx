import React, { useState } from 'react'
import AddBook from '../components/AddBook'
import NavBar from '../components/NavBar'
import BookList from '../components/BookList'
import './Dashboard.css'
import Search from '../components/Search'
export const Context = React.createContext();
export default function Dashboard() {
    const [bookList, setBookList] = useState([])
    console.log(bookList)
    return (
        <>
            <Context.Provider value={{ bookList, setBookList }}>
                <div className='home'>
                    <div className="container">
                        <div className='add-book-container'>
                            <NavBar />
                            <AddBook />
                        </div>
                        <div className="book-container">
                            <Search />
                            <div className='book-list'>
                                <div className='lists'><h1>List of Books</h1></div>
                                {   
                                    bookList.length >0 ? bookList.map((value,index)=>(
                                        <BookList key={index} title={value.bookTitle} aurthor={value.aurthor} index={index}/>
                                    )):<div className='empty'><div>List is empty</div></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Context.Provider>
        </>
    )
}
