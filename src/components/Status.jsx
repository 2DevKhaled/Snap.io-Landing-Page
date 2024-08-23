import { useState } from "react";
export default function Status() {
  const [dataStatus, setDataStatus] = useState([
    {
      id: 1,
      num: "1M+",
      desc: "Customers visit Albino every",
    },
    {
      id: 2,
      num: "93%",
      desc: "Satisfaction rate from our",
    },
    {
      id: 1,
      num: "4.9",
      desc: "Average customer ratings out of",
    },
  ]);
  return (
    <section className="py-[100px] px-[300px]">
      <div className="conrainer mx-auto ">
        <div className="flex  justify-around gap-[50px]">
        {dataStatus.map((item)=> (
            <div className="flex justify-center gap-[20px] w-full" key={item.id}>
                <h1 className="text-5xl font-medium">{item.num}</h1>
                <p className="mt-2 text-lg font-light">{item.desc}</p>
            </div>
        ))}
        </div>
      </div>
      
    </section>
  );
}
