import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover_img,author,author_img,reading_time,hashtags,status,date}=blog;
    return (
        <div className='mb-12'>
            <img src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-12' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <h3> {reading_time} min read</h3>
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    );
};

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;