import { Link } from 'react-router-dom';
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa6";
import { FaArrowsAlt, FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { getStoredData, saveDataList } from '../../utility/localStorage';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const ApartmentsCard = ({ apartment }) => {
  const { id, a_relevant_image, status, price, estate_title, beds, baths, area, location } = apartment;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const handleCompare = () => {
    const checkData = getStoredData(user.uid);
    if (checkData.length < 3) {
      if (checkData.includes(id)) {
        toast.warn('Already Add for Compare, Add Another Choose.');
      } else {
        saveDataList(user.uid, id);
        if (checkData.length > 1) {
          console.log('checkData', checkData.length);
        }
      }
    } else {
      toast.error('Maximum 3 choose for Compare. Reset Compare and Choose again.');
    }
  }

  return (
    <div
      className='rounded-2xl border-2 overflow-hidden'
      data-aos={id % 3 === 0 ? "zoom-in-down" : id % 3 === 1 ? "zoom-in" : "zoom-in-up"}
    >
      <div>
        <img src={a_relevant_image} alt="" />
      </div>
      <div className='p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-1'>
          <div>
            <p>
              <span className={`px-4 py-1  rounded-xl ${status === 'Sale' ? 'text-[#f74400] bg-[#f744001a]' : 'text-[#03a98a] bg-[#03a98a1a]'}`}>{status}</span></p>
            <h3 className='text-lg font-medium'>{estate_title}</h3>
          </div>
          <h3 className='text-xl font-bold'>{price}</h3>
        </div>
        <div className='flex flex-wrap md:justify-end gap-3'>
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
        <hr />
        <div className='flex flex-wrap items-center justify-between gap-2'>
          <div className='flex gap-2 items-center'>
            <span><FaMapMarkerAlt /></span>
            <span>{location}</span>
          </div>
          <div className='flex gap-2'>
            {user && <button onClick={handleCompare} className='btn btn-primary'>Compare</button>}
            <Link to={`/apartments-details/${id}`} className='btn btn-primary'>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ApartmentsCard.propTypes = {
  apartment: PropTypes.object
}

export default ApartmentsCard;