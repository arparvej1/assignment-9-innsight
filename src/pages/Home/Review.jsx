import './review.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Review = (review) => {
  const { short_review, reviewer_name, reviewer_img } = review;
  return (
    <SwiperSlide>
      <div className="w-full flex flex-col gap-3 justify-center items-center pb-6 ">
        <div className='border-2 rounded-full'>
          <img className="w-32 h-32 rounded-full p-2" src="https://resido-v2.smartdemowp.com/wp-content/uploads/2022/07/p-25.jpg" />
        </div>
        <p className='w-10/12 md:w-8/12 text-2xl courgette-regular text-center'>
          The Luxury Riverside Apartment offers breathtaking river views, elegant interiors, and luxurious amenities, ensuring a truly indulgent stay. Ideal for families or couples seeking a tranquil retreat with easy access to city attractions.
        </p>
        <div className="divider w-3/12 mx-auto">KUSHOVA</div>
      </div>
    </SwiperSlide>
  );
};

export default Review;