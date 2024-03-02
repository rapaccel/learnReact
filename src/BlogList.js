import { Fade,Zoom } from "react-reveal";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {

  return (
    <div className="blog-list">
      {blogs.data.map((blog) => (
        <Fade left>
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.judul}</h2>
        
            <div dangerouslySetInnerHTML={{ __html: blog.isi }} />
          </Link>
        </div>
        </Fade>
      ))}
    </div>
  );
};

export default BlogList;
