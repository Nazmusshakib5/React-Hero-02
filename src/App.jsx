
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [timee,setTimee]=useState(0);

    const bookMarkHandle=(blog)=>{
      const newBookmarks=[...bookmarks,blog]
        setBookmarks(newBookmarks);
    }

    const readingTimeHandler=(readingTime)=>{
      setTimee(timee+Number(readingTime))  
    }
    const bookMarkHandler=(id)=>{
        const afterRemoveBookmarked=bookmarks.filter(bookmark => bookmark.id !=id)
        setBookmarks(afterRemoveBookmarked)
    }
  return (
    <>
      <Header></Header>
      <div className='md:flex md:max-w-7xl w-5/6 mx-auto gap-6'>
        <Blogs bookMarkHandle={bookMarkHandle} readingTimeHandler={readingTimeHandler} bookMarkHandler={bookMarkHandler}></Blogs>
        <Bookmarks bookmarks={bookmarks} timee={timee}></Bookmarks>
      </div>
    </>
  )
}

export default App
