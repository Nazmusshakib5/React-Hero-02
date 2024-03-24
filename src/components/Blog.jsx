import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover_img,author,author_img,reading_time,hashtags,status}=blog;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;