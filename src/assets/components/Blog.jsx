

const Blog = ({blog}) => {
    const {title,cover_img,author,author_img,reading_time,hashtags,status}=blog;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Blog;