import { Link, useLoaderData } from 'react-router-dom';
import ApartmentsCard from '../Apartments/ApartmentsCard';
import { ToastContainer } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useContext, useEffect, useState } from 'react';
import './home.css';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowRoundForward, IoIosCalendar } from 'react-icons/io';
import { AuthContext } from '../../provider/AuthProvider';


const Home = () => {
  const { loginCheck } = useContext(AuthContext);
  const apartments = useLoaderData();
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    loginCheck();
    fetch('/review_data.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='my-5'>
      <Helmet>
        <title>InnSight | Home </title>
      </Helmet>
      {/* ---------- slider banner start ------------ */}
      <div className='mb-10 mt-5'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://i.ibb.co/z4SH5Hz/Tranquil-Suburban-Retreat.jpg" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Tranquil Suburban Retreat</h3>
                  <h3 className='text-xl font-semibold'>Price: $3,000/month</h3>
                  <div className='flex gap-2 items-center'>
                    <span><FaMapMarkerAlt /></span>
                    <span>Suburbia Haven</span>
                  </div>
                  <div className='flex'>
                    <Link className='btn btn-primary' to='/apartments-details/2'>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://i.ibb.co/Tkxf6Vv/Modern-Beachfront-Condo.jpg" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Modern Beachfront Condo</h3>
                  <h3 className='text-xl font-semibold'>Author: Sophie Carter</h3>
                  <div className="flex gap-2">
                    <IoIosCalendar className='text-2xl' />
                    <span>
                      June 10, 2023
                    </span>
                  </div>
                  <div className='max-w-96'>
                    <p>
                      Experience beachfront luxury in this modern condo overlooking the ocean. With sleek design,
                    </p>
                    <p>
                      <Link to={`/blog-details/9-Modern-Beachfront-Condo`} className='flex gap-1 items-center text-[#1266e3] font-semibold'><span>Continue</span> <IoIosArrowRoundForward className='text-3xl' /></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://i.ibb.co/d7Lpg73/Family-Friendly-Suburban-Home.jpg" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Family-Friendly Suburban Home</h3>
                  <h3 className='text-xl font-semibold'>Price: $320,000</h3>
                  <div className='flex gap-2 items-center'>
                    <span><FaMapMarkerAlt /></span>
                    <span>Suburbia Meadows</span>
                  </div>
                  <div className='flex'>
                    <Link className='btn btn-primary' to='/apartments-details/6'>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://i.ibb.co/h8rf3Cy/Rustic-Mountain-Cabin-Retreat.jpg" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Rustic Mountain Cabin Retreat</h3>
                  <h3 className='text-xl font-semibold'>Author: William Johnson</h3>
                  <div className="flex gap-2">
                    <IoIosCalendar className='text-2xl' />
                    <span>
                      May 15, 2023
                    </span>
                  </div>
                  <div className='max-w-96'>
                    <p>
                      Experience the serenity of nature in this rustic mountain cabin retreat. Surrounded by towering pines and majestic peaks,
                    </p>
                    <p>
                      <Link to={`/blog-details/6-Rustic-Mountain-Cabin-Retreat`} className='flex gap-1 items-center text-[#1266e3] font-semibold'><span>Continue</span> <IoIosArrowRoundForward className='text-3xl' /></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ---------- slider banner End ------------ */}
      {/* apartments card section */}
      <div className='my-10 text-center'>
        <h3 className='font-bold text-2xl lg:text-3xl'>Explore Good Places</h3>
        <p className='md:w-3/4 lg:1/2 mx-5 md:mx-auto mt-5'>Discover comfortable living and vibrant communities in our thoughtfully designed residential apartments, perfectly located to explore the best of their surroundings. Book your tour now!</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          apartments.map(apartment => <ApartmentsCard
            key={apartment.id}
            apartment={apartment}
          ></ApartmentsCard>)
        }
      </div>
      {/* ---------- slider review start ------------ */}
      <div className='my-6 md:my-10'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          {
            reviews.map(review => (
              <SwiperSlide key={review.review_id}>
                <div className="w-full flex flex-col gap-3 justify-center items-center pb-6 ">
                  <div className='border-2 rounded-full'>
                    <img className="w-32 h-32 rounded-full p-2" src={review.reviewer_img} />
                  </div>
                  <p className='w-10/12 md:w-8/12 text-xl md:text-2xl courgette-regular text-center'>
                    {review.short_review}
                  </p>
                  <div className="divider md:w-3/12 mx-auto">{review.reviewer_name}</div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      {/* ---------- slider review End ------------ */}
      <ToastContainer />
    </div>
  );
};

export default Home;