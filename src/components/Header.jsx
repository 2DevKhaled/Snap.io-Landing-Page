import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
export default function Header() {
  const [navigation, setNavigation] = useState([
    {
      id: 1,
      title: "Deoms",
      href: "/",
    },
    {
      id: 2,
      title: "Pages",
      href: "/",
    },
    {
      id: 3,
      title: "Support",
      href: "/",
    },
    {
      id: 4,
      title: "Contact",
      href: "/",
    },
  ]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        headerRef.current.style.background = "#F4F7FA";
        headerRef.current.style.padding = "20px ";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "10px";
      }
    });
  });
  return (
    <header ref={headerRef} className="px-[40px] py-[60px] fixed top-0 z-50 left-0 w-full duration-500">
      <div className="container mx-auto">
        <div className="flex justify-center gap-[300px] items-center">
          <div>
            <h3 className="text-[40px] font-bold ">Snap.io</h3>
          </div>
          <nav>
            <ul className="flex gap-[25px] text-base font-semibold">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <button className="w-[158px] h-[45px] bg-[#473BF0] rounded-md text-base font-semibold text-white flex justify-center items-center">
              Get started free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
