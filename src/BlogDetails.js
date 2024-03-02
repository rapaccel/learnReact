import { useParams } from "react-router";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}= useParams()
    const {data,isPending,error}=useFetch("http://127.0.0.1:8000/api/blogs/"+id)


    return ( <div className="blog-details">
        {error && <div>{error.message}</div>}
        {isPending && <div>Loading Content...</div>}
        
        {data  && (
            <article>
            <img src={data.data.thumbnail} alt="i" width={300} height={220} />
            <h2>{data.data.judul}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.data.isi }} />
            </article>
        
      )}
    </div> );
}
 
export default BlogDetails;