

import ButtonCTA from "./ButtonCTA";
import SideImg from '/src/assets/images/Image.svg'
export default function About (){

    return (
        <section className="bg-[#F4F7FA] py-[100px] md:max-w-full">
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 items-center place-items-center px-[140px]">
                <div>
                    <h2 className="mb-5 text-5xl font-medium ">Getting started with Albino is easier than ever</h2>
                    <p className="tracking-widest text-lg mb-5">With lots of unique blocks, you can<br/> easily build a page without coding.<br/> Build your next landing page so<br/> quickly with Albino.</p>
                    <ButtonCTA/>
                </div>
                <div>
                    <img className="w-[500px]" src={SideImg}/>
                </div>
            </div>
        </section>
    )
}