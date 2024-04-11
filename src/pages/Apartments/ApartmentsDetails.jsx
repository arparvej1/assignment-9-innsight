import { useLoaderData, useParams } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa6";
import { FaArrowsAlt, FaMapMarkerAlt } from "react-icons/fa";


const ApartmentsDetails = () => {
  const apartments = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const apartment = apartments.find(apartment => apartment.id === idInt);
  const { a_relevant_image, status, price, estate_title, beds, baths, area, location, segment_name, description, facilities } = apartment;
  return (
    <div className="flex flex-col justify-center gap-6 bg-[#f3f7fd] rounded-xl p-5 my-10">
      <div className="bg-white rounded-2xl p-5 flex flex-col md:flex-row gap-3">
        <h3 className='text-xl md:text-2xl font-medium'>{segment_name} : </h3>
        <h3 className='text-xl md:text-2xl font-medium'>{estate_title}</h3>
      </div>
      <div className="max-w-4xl mx-auto">
        <img className="rounded-2xl" src={a_relevant_image} alt={estate_title} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
          <p>
            <span className={`px-4 py-1  rounded-xl ${status === 'Sale' ? 'text-[#f74400] bg-[#f744001a]' : 'text-[#03a98a] bg-[#03a98a1a]'}`}>{status}</span></p>
          <h3 className='text-xl font-semibold'>{price}</h3>
          <div className='flex gap-2 items-center'>
            <span><FaMapMarkerAlt /></span>
            <span>{location}</span>
          </div>
          <div className="md:flex gap-3 items-center"><p className="font-bold mb-2 md:mb-0">Facilities: </p>
            <p className="grid md:grid-cols-3 gap-1">
              {facilities.map((item, idx) => <span key={idx} className="capitalize text-[#0080f7] bg-[#97a3ff1a] px-2 py-1  rounded-xl">{item}</span>)}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
          <div className='flex items-center gap-2'>
            <span className='bg-[#edf1f9] rounded-full p-2'><IoIosBed /></span>
            <span>{beds} Beds</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='bg-[#edf1f9] rounded-full p-2'><FaBath /></span>
            <span>{baths} Baths</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='bg-[#edf1f9] rounded-full p-2'><FaArrowsAlt /></span>
            <span>{area}</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 md:p-10 flex flex-col gap-3">
        <h4 className="text-xl font-semibold">Description</h4>
        <p className="md:text-lg text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ApartmentsDetails;