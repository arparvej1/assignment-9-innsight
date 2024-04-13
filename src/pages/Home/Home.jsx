import { useLoaderData } from 'react-router-dom';
import ApartmentsCard from '../Apartments/ApartmentsCard';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import './home.css';


const Home = () => {
  const apartments = useLoaderData();
  const [reviews, setReviews] = useState([])
  useEffect(() => {
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
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full h-[600px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full h-[600px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full h-[600px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full h-[600px]" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ---------- slider banner End ------------ */}
      {/* apartments card section */}
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
                  <p className='w-10/12 md:w-8/12 text-2xl courgette-regular text-center'>
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
    </div>
  );
};

export default Home;