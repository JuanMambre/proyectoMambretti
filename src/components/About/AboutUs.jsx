import React from 'react';

const AboutUs = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-500">About Us</p>
        </div>
        <p className="text-2xl mt-20">
          Welcome to Innova Tech! We are a cutting-edge technology company based in Bahia Blanca, Buenos Aires, Argentina. At Innova Tech, our mission is to innovate and provide top-of-the-line tech products that meet the evolving needs of our customers.
        </p>

        <br />

        <p className="text-xl">
          Our team is passionate about technology and committed to delivering high-quality products ranging from powerful processors to state-of-the-art graphics cards. We pride ourselves on our extensive knowledge in the tech industry and our ability to stay ahead of the curve by constantly researching and integrating the latest technological advancements.
        </p>

        <br />

        <p className="text-xl">
          At Innova Tech, we value innovation, quality, and customer satisfaction above all. We work tirelessly to ensure that our customers receive the best possible service and the highest quality products. Our commitment to excellence is reflected in everything we do, from our customer support to our product development.
        </p>

        <br />

        <p className="text-xl">
          Join us on our journey as we continue to push the boundaries of technology and provide solutions that make a difference. Whether you're a tech enthusiast, a professional gamer, or a business looking for reliable tech solutions, Innova Tech has something for you.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
