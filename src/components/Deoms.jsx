import { useState } from "react";
import DemoImg from "/src/assets/images/Image (1).svg";
export default function Deoms() {
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Create a project",
      desc: "With lots of unique blocks, you can easily build a page without",
    },
    {
      id: 2,
      title: "Assign related people",
      desc: "With lots of unique blocks, you can easily build a page without",
    },
    {
      id: 3,
      title: "Make it done on-time",
      desc: "With lots of unique blocks, you can easily build a page without",
    },
  ]);
  return (
    <section className="py-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl mb-8 ">Manage your projects fast</h1>
          <p className="text-lg tracking-widest">
            With lots of unique blocks, you can easily build a<br /> page
            without coding. Build your next landing page.
          </p>
        </div>
        <div className="block md:flex justify-center gap-[100px]  items-center ">
          <div className="mt-6">
            <img src={DemoImg} />
          </div>
          <div className="">
            {steps.map((step) => (
              <div className="flex gap-[20px] mt-[50px] " key={step.id}>
                <div className="w-10 h-10 flex justify-center items-center text-[#473BF0] bg-[#E9E9FC] rounded-full">
                  <p >{step.id}</p>
                </div>
                <div>
                  <h2 className="  text-2xl font-medium ">{step.title}</h2>
                  <p className="w-[260px] mt-3">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
