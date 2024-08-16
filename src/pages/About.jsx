import React from 'react';

const About = () => {
  return (
    <>
      <section className="bg-white sm:mx-10">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900 dark:text-gray-900">
              Welcome to Inscribe ✨: Where Words Dance! 💃🕺
            </h2>
            <p className="mb-4 text-gray-600">
              At Inscribe, we don’t just scribble down words—we make them waltz across the page. 🖋️✨ As the mastermind behind this blog, Konain Raza, I’ve turned my love for storytelling into an art form. Our goal? To turn every article into a thrilling ride, complete with twists, turns, and maybe a few plot twists. 🎢
            </p>
            <p className='text-gray-600'>
              We’re not just a blog; we’re your literary amusement park. From brainstorming wild ideas to fine-tuning the final draft, we make sure every post brings a smile to your face and a spark to your mind. 🎉 So buckle up and enjoy the ride—your next great read is just around the corner! 📚🚀
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="Inscribe's creative space"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="Inscribe's cozy corner"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
