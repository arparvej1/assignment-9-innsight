import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward, IoIosCalendar } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Blog = ({ blog }) => {
  const { blogId, blogImage, blogTitle, publishedDate, blog_description } = blog;
  const urlTitle = blogTitle.split(' ').join('-');
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])
  return (
    <div className='border-2 rounded-2xl' data-aos={blogId % 3 === 0 ? "flip-up" : blogId % 3 === 1 ? "flip-down" : "zoom-in"}>
      <div className='flex flex-col gap-2 p-4'>
        <div>
          <img className='rounded-2xl' src={blogImage} alt={blogTitle} />
        </div>
        <div className="flex gap-2">
          <IoIosCalendar className='text-2xl' />
          <span>
            {publishedDate}
          </span>
        </div>
        <h4 className='font-semibold text-2xl'>
          {blogTitle}
        </h4>
        <p>
          {
            blog_description.slice(0, 100)
          }
        </p>
        <p>
          <Link to={`/blog-details/${blogId}-${urlTitle}`} className='flex gap-1 items-center text-[#1266e3] font-semibold'><span>Continue</span> <IoIosArrowRoundForward className='text-3xl' /></Link>
        </p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object
}

export default Blog;