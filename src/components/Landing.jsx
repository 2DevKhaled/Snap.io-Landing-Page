import { useState } from "react";
import HeroImg from '/src/assets/images/browser 01.svg'
import Codeicon from '/src/assets/icons/code.svg';
import Countdownicon from '/src/assets/icons/countdown-2.svg';
import Mobileicon from '/src/assets/icons/Shape.svg';
import FeaturesBox from "./FeaturesBox";
import ButtonCTA from "./ButtonCTA";
export default function Landing() {
    const [features ,setFeatures] =useState([{
        id:1,
        title:"Projects management",
        icon:Codeicon,
        desc:"With lots of unique blocks, you can easily build page without coding Build you next landing page."
    },
    {
        id:2,
        title:"Time tracking",
        icon:Countdownicon,
        desc:"With lots of unique blocks, you can easily build page without coding Build you next landing page."
    },
    {
        id:3,
        title:"Beautiful mobile app",
        icon:Mobileicon,
        desc:"With lots of unique blocks, you can easily build page without coding Build you next landing page."
    },]) 
  return (
    <section className="py-[180px] ">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col">
          <h2 className="text-center font-semibold text-[50px] mb-2">
            Get things done by awesome <br /> remote team
          </h2>
          <p className="text-center font-light text-xl mb-4">
            We share common trends and strategies for improving your <br />
            rental income and making sure ypu stay in high demand{" "}
          </p>
        </div>
        <div className="flex justify-center gap-[30px] items-center">
          <ButtonCTA />
          <a href="#">Learn More</a>
        </div>
        <div className="flex justify-center items-center mt-[50px] ">
            <img className=" shadow-gray-950 drop-shadow-2xl" src={HeroImg}/>
        </div>
        <div className=" lg:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-center ">
            {features.map((item)=>(
                <FeaturesBox key={item.id} icon={item.icon} title={item.title} desc={item.desc}/>
            ))}
        </div>
      </div>
    </section>
  );
}
