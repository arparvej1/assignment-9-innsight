import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ApartmentsCard from '../Apartments/ApartmentsCard';

const Home = () => {
  const apartments = useLoaderData();
  // const { apartments } = useContext(AuthContext);

  console.log(apartments);
  return (
    <div>
      <h3 className='text-3xl font-bold'>This is my home.</h3>
      {/* apartments card section */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          apartments.map(apartment => <ApartmentsCard
            key={apartment.id}
            apartment={apartment}
          ></ApartmentsCard>)
        }
      </div>
    </div>
  );
};

export default Home;