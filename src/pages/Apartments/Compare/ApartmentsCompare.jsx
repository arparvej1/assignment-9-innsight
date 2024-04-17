import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { getStoredData, getStoredDataReset } from "../../../utility/localStorage";
import { IoIosBed } from "react-icons/io";
import { FaArrowsAlt, FaBath } from "react-icons/fa";
import './compare.css';

const ApartmentsCompare = () => {
  const apartments = useLoaderData();
  const { user, loginCheck } = useContext(AuthContext);
  const [compareList, setCompareList] = useState([]);

  const handleCompareReset = () => {
    getStoredDataReset(user.uid);
    setCompareList([]);
  }

  useEffect(() => {
    if (user) {
      const compareId = getStoredData(user.uid);
      if (compareId.length > 0) {
        const compareAdd = apartments.filter(apartment => compareId.includes(apartment.id));
        setCompareList(compareAdd);
      }
    }
  }, [])

  useEffect(() => {
    loginCheck();
  }, []);
  return (
    <>
      <Helmet>
        <title> Apartment Compare | InnSight </title>
      </Helmet>
      <div>
        <div className="bg-gray-100 w-full p-6 md:p-12 text-xl md:text-4xl lg:text-5xl font-bold text-center rounded-3xl my-5">
          {
            compareList.length > 1 ? `Compare ${compareList.length} Apartments` : 'Please select minimum 2 choose for compare.'
          }
        </div>

        <div>
          {
            compareList.length > 1 ?
              <>
                <div className="overflow-x-auto">
                  <table className="table table-xs table-pin-rows table-pin-cols">
                    {/* <thead> */}
                    <tr>
                      <th className="text-center text-lg md:text-2xl lg:text-3xl">Title: </th>
                      {
                        compareList.map(item => <th className="text-center text-lg md:text-2xl lg:text-3xl" key={item.id}>{item.estate_title}</th>)
                      }
                    </tr>
                    {/* </thead> */}
                    <tbody>
                      <tr>
                        <td>Segment Name:</td>
                        {
                          compareList.map(item => <td key={item.id}>{item.segment_name}</td>)
                        }
                      </tr>
                      <tr>
                        <td>Picture:</td>
                        {
                          compareList.map(item => <td className="" key={item.id}><img className=" rounded-xl" src={item.a_relevant_image} alt={item.estate_title} /></td>)
                        }
                      </tr>
                      <tr>
                        <td>Apartment Status:</td>
                        {
                          compareList.map(item => <td key={item.id}><span className={`px-4 py-1  rounded-xl ${item.status === 'Sale' ? 'text-[#f74400] bg-[#f744001a]' : 'text-[#03a98a] bg-[#03a98a1a]'}`}>{item.status}</span></td>)
                        }
                      </tr>
                      <tr>
                        <td>Price:</td>
                        {
                          compareList.map(item => <td key={item.id}>{item.price}</td>)
                        }
                      </tr>
                      <tr>
                        <td>Location:</td>
                        {
                          compareList.map(item => <td key={item.id}>{item.location}</td>)
                        }
                      </tr>
                      <tr>
                        <td>Facilities:</td>
                        {
                          compareList.map(item => <td key={item.id}>
                            <p className="flex flex-wrap gap-1">
                              {item.facilities.map((tag, idx) => <span key={idx} className="capitalize text-[#0080f7] bg-[#97a3ff1a] px-2 py-1  rounded-xl">{tag}</span>)}
                            </p>
                          </td>)
                        }
                      </tr>
                      <tr>
                        <td>Beds:</td>
                        {
                          compareList.map(item => <td key={item.id}>
                            <div className='flex items-center gap-2'>
                              <span className='bg-[#edf1f9] hidden md:block rounded-full p-2'><IoIosBed /></span>
                              <span>{item.beds} Beds</span>
                            </div>
                          </td>)
                        }
                      </tr>
                      <tr>
                        <td>Baths:</td>
                        {
                          compareList.map(item => <td key={item.id}>
                            <div className='flex items-center gap-2'>
                              <span className='bg-[#edf1f9] hidden md:block rounded-full p-2'><FaBath /></span>
                              <span>{item.baths} Baths</span>
                            </div>
                          </td>)
                        }
                      </tr>
                      <tr>
                        <td>Area:</td>
                        {
                          compareList.map(item => <td key={item.id}>
                            <div className='flex items-center gap-2'>
                              <span className='bg-[#edf1f9] hidden md:block rounded-full p-2'><FaArrowsAlt /></span>
                              <span>{item.area}</span>
                            </div>
                          </td>)
                        }
                      </tr>
                      <tr>
                        <td></td>
                        {
                          compareList.map(item => <td className="text-center" key={item.id}><Link to={`/apartments-details/${item.id}`} className="btn btn-link">View Details</Link></td>)
                        }
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="my-10" />
                <div className="text-center">
                  <button onClick={handleCompareReset} className="btn bg-red-400 hover:bg-red-700 text-white  z-50 bottom-5 right-5">Reset Compare</button>
                </div>
              </>
              :
              <>
                <div className='flex flex-col justify-center items-center gap-2 p-4'>
                  <Link className='btn mx-auto bg-[#7ac5fbab] hover:bg-[#7ac5fb] md:text-lg' to='/'>Go Back to Home</Link>
                </div>
              </>
          }
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ApartmentsCompare;