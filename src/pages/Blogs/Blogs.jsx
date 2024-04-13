import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <div className="bg-gray-100 w-full p-12 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">Blogs</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          blogs.map(blog => <Blog
            key={blog.blogId}
            blog={blog}
          ></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;