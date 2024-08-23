import ButtonCTA from './ButtonCTA';
export default function PricingBox({plan,price}){
    return (
        <div className="w-[350px] h-[440px] p-[20px] bg-white rounded-md   grid grid-cols-1 place-items-center  text-center">
            <p className="bg-[#F4F7FA] flex h-fit py-2 px-6 w-fit text-[#473BF0] font-semibold tracking-wider rounded-3xl drop-shadow-md">{plan.toUpperCase()}</p>
            <p className="text-5xl font-semibold">${price}</p>
            <p className="text-base font-light">One time purchase</p>
            <p className="text-lg font-normal tracking-wider">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <button className='w-[100%] rounded-lg text-white text-lg font-medium flex justify-center items-center bg-[#473BF0] p-4'>Get started for free</button>
        </div>
    )
}
// .badges > button {
//     font-size: 0.875rem; /* 14px */
//     line-height: 1.25rem; /* 20px */
//     padding: 2px .5rem; /* 8px*/
//     cursor: pointer;
//     border: none;
//     border-radius: 0.375rem; /* 6px */
//     outline: none;
//   }