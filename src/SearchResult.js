import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useParams } from "react-router";
const SearchResult = () => {
    const { query } = useParams();
    const { data: blogs, isPending, error } = useFetch(`http://127.0.0.1:8000/api/blog/search/${query}`);
  
    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading Content...</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
  };

  export default SearchResult;