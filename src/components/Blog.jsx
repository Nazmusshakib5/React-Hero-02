import PropTypes from 'prop-types';
import { BsBookmarkCheck } from "react-icons/bs";
const Blog = ({blog,bookMarkHandle,readingTimeHandler}) => {
    const {title,cover_img,author,author_img,reading_time,hashtags,status,date}=blog;
    return (
        <div className='mb-8'>
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
                    hashtags.map(item=> <span key={item.id} className='me-6'>#{item}</span>)
                }
            </div>
            <h1 className='text-4xl '>{title}</h1>
            <button onClick={()=>readingTimeHandler(blog.reading_time)}><a>Mark as read</a></button>
        </div>
    );
};

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;