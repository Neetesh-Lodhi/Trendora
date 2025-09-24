import React from 'react'
import Title from '../components/Title' 
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            e want registered users to have their picture as part of their
            profile. Front end questions: when does a user provide a picture? On
            first registration? Required? Editing profile? Can they do it in the
            mobile app
          </p>
          <p>
            How critical are photos (backup and redundancy) How many people will
            have photos (scale) Common questions How critical are photos (backup
            and redundancy) How many people will have photos (scale) Common
            questions
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            If you are a complete beginner who is just getting started, you can
            start by learning a backend programming language such as Python,
            Ruby, Java, Go etc. Once you have got the basic to intermediate
            understanding of the language, learn about the package manager for
            that language and learn how to install and use external
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We provide 7 days free return policy we offer free exchange policy
            we provide 24/7 customer support
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>
            With user-friendly interface, you can easily find what you need and
            make your order without any hassle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our dedicated customer service team is always ready to assist you
            with any questions or concerns you may have.
          </p>
        </div>
      </div>


      <NewsletterBox/>
    </div>
  );
}

export default About
