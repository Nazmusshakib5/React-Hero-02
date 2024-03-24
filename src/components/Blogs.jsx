import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({bookMarkHandle,readingTimeHandler}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(item => <Blog readingTimeHandler={readingTimeHandler} bookMarkHandle={bookMarkHandle} key={item.id} blog={item}></Blog>)
            }
        </div>
    );
};

export default Blogs;