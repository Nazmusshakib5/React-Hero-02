import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(item => <Blog key={item.tile} blog={item}></Blog>)
            }
        </div>
    );
};

export default Blogs;