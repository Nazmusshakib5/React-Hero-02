import propTypes from 'prop-types';
import { BsBookmarkCheck } from "react-icons/bs";
const Blog = ({blog,bookMarkHandle,readingTimeHandler,bookMarkHandler}) => {
    const {title,cover_img,author,author_img,reading_time,hashtags,id,date}=blog;
    return (
        <div className='mb-8 shadow-xl p-4'>
            <img className='w-full mb-8 rounded-md' src={cover_img} alt="" />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-12' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h3> {reading_time} min read</h3>
                    <button onClick={()=>bookMarkHandle(blog)} className='ms-2'>
                    <BsBookmarkCheck />
                    </button>
                </div>
            </div>
            <div>
                {
                    hashtags.map((item,index)=> <span key={index} className='me-6'>#{item}</span>)
                }
            </div>
            <h1 className='text-4xl '>{title}</h1>
            <div className='flex justify-between my-4'>
                <div>
                    <button className='bg-sky-500/15 rounded-lg p-4' onClick={()=>readingTimeHandler(blog.reading_time)}><a className='text-xl font-bold'>Add to ReadList</a></button>
                </div>
                <div>
                    <button className='bg-sky-500/15 rounded-lg p-4' onClick={()=>bookMarkHandler(id)}><a className='text-xl font-bold'>Remove Bookmark</a></button>
                </div>
            </div>
            
        </div>
    );
};

Blog.propTypes={
    blog:propTypes.object.isRequired
}
export default Blog;