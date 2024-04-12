import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward, IoIosCalendar } from "react-icons/io";



const Blog = ({ blog }) => {
  const { blogImage, blogTitle, authorName, publishedDate, blog_description } = blog;
  return (
    <div className='border-2 rounded-2xl'>
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
          <Link className='flex gap-1 items-center text-[#1266e3] font-semibold'><span>Continue</span> <IoIosArrowRoundForward className='text-3xl' /></Link>
          </p>
      </div>
    </div>

  );
};

Blog.propTypes = {
  blog: PropTypes.array
}

export default Blog;