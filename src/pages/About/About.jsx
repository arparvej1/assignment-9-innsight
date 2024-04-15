import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> About Us | InnSight </title>
      </Helmet>
      <div className="bg-gray-100 w-full p-6 md:p-12 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">About Us</div>
      <main className="bg-gray-100 rounded-xl">
        <section id="about-us" className="py-5 md:py-16 md:w-10/12 mx-auto">
          <div className="container flex flex-col gap-6 text-lg text-gray-700 mx-auto px-4">
            <h2 className="text-2xl font-bold mt-4">InnSight</h2>
            <p >Welcome to InnSight Apartments, your premier destination for high-quality residential properties in prime locations. At InnSight, we are dedicated to providing exceptional living spaces that cater to your lifestyle needs, whether you're looking to buy or rent.</p>
            <p >Our mission is to redefine urban living by offering meticulously designed apartments that blend luxury, comfort, and convenience. We believe in creating communities, not just buildings, where residents can thrive and build lasting memories.</p>
            <h2 className="text-2xl font-bold mt-4">Our Story</h2>
            <p >Founded in 2020, InnSight Apartments has quickly emerged as a leader in the real estate industry. With a team of experienced professionals and a commitment to excellence, we have successfully developed and managed numerous residential projects that exceed expectations.</p>
            <p >Our journey began with a vision to revolutionize the way people experience city living. We identified a need for modern, well-appointed apartments that not only offer a place to reside but also foster a sense of belonging and community.</p>
            <p >Driven by our passion for innovation and customer satisfaction, we have consistently raised the bar in the real estate market. Today, we are proud to have helped hundreds of individuals and families find their dream homes in vibrant neighborhoods.</p>
            <h2 className="text-2xl font-bold mt-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Quality: We are committed to delivering superior craftsmanship and attention to detail in every aspect of our properties.</li>
              <li>Integrity: Honesty, transparency, and ethical conduct are the foundations of our business practices.</li>
              <li>Customer-Centricity: We prioritize the needs and preferences of our clients, ensuring their satisfaction at every stage of the process.</li>
              <li>Innovation: We embrace innovation and continuously seek new ways to enhance the living experience for our residents.</li>
              <li>Community: We believe in fostering a sense of belonging and connectivity among residents, creating vibrant and inclusive communities.</li>
            </ul>

          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
