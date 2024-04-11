import { useLoaderData } from 'react-router-dom';
import ApartmentsCard from '../Apartments/ApartmentsCard';


const Home = () => {
  const apartments = useLoaderData();

  console.log(apartments);
  return (
    <div className='my-10'>
      
      {/* apartments card section */}
      <h3 className='mx-auto my-10 font-bold text-2xl text-center lg:text-4xl'>This is home. React New Version.</h3>
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