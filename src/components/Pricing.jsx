import { useState } from "react";
import PricingBox from "./PricingBox";
export default function Pricing() {
    const [pricing ,setPricing] = useState([{
        id:1,
        plan:"Basic",
        price:"29",
    },
    {
        id:2,
        plan:"Standard",
        price:"49",

    },
    {
        id:3,
        plan:"Premium",
        price:"99",
    },])
  return (
    <section className="bg-[#161C2D] py-[100px]">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center text-[60px] text-white">
            Pricing & Plans
          </h1>
          <p className="text-center text-lg tracking-widest w-[600px] text-zinc-400">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
            <div className="block md:flex justify-center gap-4 items-center mt-8">
            {pricing.map((item) => (
            <PricingBox key={item.id} plan={item.plan} price={item.price}/>
        ))}
            </div>
      </div>
    </section>
  );
}
