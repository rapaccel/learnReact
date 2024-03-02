
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {data:blogs,isPending,error}=useFetch("http://127.0.0.1:8000/api/blogs")
  console.log(blogs)
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading Content...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
