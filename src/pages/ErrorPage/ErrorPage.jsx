import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div className='max-w-7xl mx-2 md:mx-4 lg:mx-auto mt-4 mb-7'>
        <div className='flex flex-col justify-center items-center gap-4 p-4'>
          <h3 className='font-semibold text-3xl my-10'>Oops!!!! Page Not Found! </h3>
          <Link className='btn mx-auto' to='/'>Go Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;