import { useState } from "react";
import ImgProfile1 from "/src/assets/images/Oval.svg";
import ImgProfile2 from "/src/assets/images/Oval (2).svg";
export default function Testimonials() {
  const [testimonial, setTestimonials] = useState([
    {
      id: 1,
      img: ImgProfile1,
      review: "“You made it so simple”",
      desc: "My new site is so much faster and easier to work with than my old site.",
      name: "Corey Valdez",
      position: "Founder at Zenix",
    },
    {
      id: 2,
      img: ImgProfile2,
      review: "“Simply the best”",
      desc: "Better than all the rest. I’d recommend this product to beginners.",
      name: "Ian Klein",
      position: "Digital Marketer",
    },
  ]);
  return (
    <section className="py-[100px] bg-[#F4F7FA] ">
      <div className="container mx-auto md:flex justify-center gap-[100px] items-center">
        {testimonial.map((item) => (
          <div
            className="flex justify-center items-center flex-col text-center"
            key={item.id}
          >
            <img src={item.img} />
            <h3 className="mt-4 text-3xl font-semibold">{item.review}</h3>
            <p
              className="text-lg font-normal mt-2"
            >
              {item.desc}
            </p>
            <p className="text-xl font-semibold mt-2">{item.name}</p>
            <p className="font-light mt-1">{item.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
