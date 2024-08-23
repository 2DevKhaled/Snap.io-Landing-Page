import { useState } from "react";
export default function Faq() {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      que: "Can I use Albino for my clients?",
    },
    {
      id: 2,
      que: "Does it work with WordPress?",
    },
    {
      id: 3,
      que: "Do I get free updates?",
    },
    {
      id: 4,
      que: "Will you provide support?",
    },
  ]);
  return (
    <section className="bg-[#161C2D] pt-[40px] pb-[100px]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 place-items-center ">
          {faqData.map((item) => (
            <div key={item.id} className="mt-8 flex  w-[500px] gap-3">
              <div>
                <p className="p-3 w-8 h-8 rounded-full bg-[#68D585] flex justify-center items-center text-white">
                  ?
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-light text-white tracking-widest mb-2">{item.que}</h2>
                <p className="text-white font-extralight text-sm tracking-widest">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page. Integer ut
                  Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-16 text-white text-lg">Haven’t got your answer? <a href="" className="text-[#68D585]">Contact our support now</a></p>
      </div>
    </section>
  );
}

{
  /* <p className="p-3 w-8 h-8 rounded-full bg-[#68D585] flex justify-center items-center text-white">
  ?
    </p> */
}
