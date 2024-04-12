import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const ErrorPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-5 lg:mx-auto">
        <Navbar></Navbar>
        <div>
          <div className='max-w-7xl mx-2 md:mx-4 lg:mx-auto mt-4 mb-5'>
            <div className='flex flex-col justify-center items-center gap-2 p-4'>
              <img className='max-w-96' src="https://i.ibb.co/qMSPP7h/image-404.jpg" alt="" />
              <h3 className='font-semibold text-3xl my-5'>Oops!!!! Page Not Found! </h3>
              <Link className='btn mx-auto' to='/'>Go Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;