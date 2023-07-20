import React from 'react';
import image from '../../images/planing.jpg';
import image2 from '../../images/trav.jpg';
import image3 from '../../images/water.jpg';
import './aboutUs.css';



  const About = () => {
    return (
      <div className="about-us">
        <h2 className="title">About Us</h2>
        <section className="section-1">
        <img className="photo" src={image} alt="Blog" />
       <h3></h3>
          <p className='text'> Welcome to our travel blog! We are a group of passionate travelers who love to explore new destinations and share our experiences with others. Our aim is to inspire and inform our readers, and to create a community of like-minded travelers who can share their own tips and stories.
          Our team is made up of experienced travelers who have been to all corners of the globe. We have backpacked through Southeast Asia, hiked the Inca Trail in Peru, gone on safari in Africa, and explored the cities of Europe. We believe that travel is one of the most enriching experiences a person can have, and we want to help others experience the same joy and wonder that we have found on our journeys.
          On this page, we share our travel adventures through captivating photos and stories. Our goal is to inspire you to wander farther and dip your toes in unknown waters. Whether you're planning your next getaway or merely escaping through our stories, we hope The Wanderers brings you joy and wanderlust!</p>
        </section>
        <section className="section-2">
        <img className="photo" src={image2} alt="Social Media" />
        <h3 className='subtitel'>About Social Media</h3>
          <p className='text'>About The Wanderers
          We're a group of travel lovers who enjoy exploring new places and discovering hidden gems. Our dream is to see as much of this incredible planet as possible, one journey at a time.
          Through our blog and social media channels, we share our travel stories, offer practical advice on planning and budgeting for trips, and provide recommendations for accommodations, restaurants, and activities. We also highlight lesser-known destinations and off-the-beaten-path experiences, as we believe that the best travel experiences often come from stepping outside of your comfort zone and trying something new.
         We believe travel has the power to transform and enrich our lives. Stepping outside our comfort zone and experiencing different cultures builds character, empathy and a greater appreciation for life's simple gifts. If just one of our tales sparks the urge to set out on your own journey, then we've succeeded.
          Our dream is to see as much of this incredible planet as possible, gathering stories from far-flung destinations to share with curious wanderers like you. On this page, we showcase our travels through photos, tales and tips from the road. Our goal is inspire you to step outside your comfort zone, fueling your wanderlust and helping you plan your next great escape.</p>
        </section>
        <section className="section-3">
        <img className="photo" src={image3} alt="Travel" />
        <h3 className='subtitel'>About Travel</h3>
          <p className='text'>Follow our adventures through lush jungles, dusty deserts, misty mountains and more. We can't wait to show you our next destination and help fuel your wanderlust. If you have any questions, suggestions or would simply like to say hello, feel free to reach out. We love hearing from fellow travelers!
            We believe travel has the power to transform our lives in profound ways. Stepping outside the familiar builds character, empathy and a greater appreciation for the simple gifts and shared humanity we all experience. If even one of our stories sparks a flicker of wanderlust in you, motivating you to set out on your own adventure, then we've succeeded in our mission.
            So come along with us as we wander the globe from jungle paths to city streets. Follow our adventures through lush landscapes, historic cities and cultures both familiar and fascinatingly different. We can't wait to reveal our next destination and help feed your appetite for wanderlust.  Thank you for joining us on our journey, and we hope that our blog and social media channels will inspire you to explore the world and create your own unforgettable travel experiences.
            Safe travels and happy wanderings.
</p>
        </section>
      </div>
    );
  };
  
  export default About;