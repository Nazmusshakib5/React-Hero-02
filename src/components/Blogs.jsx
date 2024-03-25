import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({bookMarkHandle,readingTimeHandler,bookMarkHandler}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map((item,index) => <Blog readingTimeHandler={readingTimeHandler} bookMarkHandle={bookMarkHandle} bookMarkHandler={bookMarkHandler} key={index} blog={item}></Blog>)
            }
        </div>
    );
};

export default Blogs;