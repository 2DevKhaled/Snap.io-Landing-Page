import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  const [socialIcons, setSocialIcons] = useState([
    { key: 1, icon: "facebook" },
    { key: 2, icon: "twitter" },
    { key: 3, icon: "instagram" },
  ]);
  const [company, setCompany] = useState([
    {
      id: 1,
      title: "About us",
    },
    {
      id: 2,
      title: "Contact us",
    },
    {
      id: 3,
      title: "Careers",
    },
    {
      id: 4,
      title: "Press",
    },
  ]);
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Features",
    },
    {
      id: 2,
      title: "Pricing",
    },
    {
      id: 3,
      title: "News",
    },
    {
      id: 4,
      title: "Help desk",
    },
    {
      id: 5,
      title: "Support",
    },
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Digital",
    },
    {
      id: 2,
      title: "Marketing",
    },
    {
      id: 3,
      title: "Content Writing",
    },
    {
      id: 4,
      title: "SEO for",
    },
  ]);
  const [legal, setLegal] = useState([
    {
      id: 1,
      title: "Privacy Policy",
    },
    {
      id: 2,
      title: "Terms & Conditions",
    },
  ]);

  return (
    <section className="py-[100px]">
      <div className="container mx-auto">
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center items-center">
          <div>
            <h2 className="font-medium text-4xl">Snap.io</h2>
            <p className=" tracking-widest my-4 ">
              With lots of unique blocks,
              <br /> you can easily build a page <br />
              without coding. Build your
              <br /> next landing page.
            </p>

            <ul className="flex mt-4">
              {socialIcons.map((item) => (
                <li key={item.key}>
                  <a className="hover:text-primary100 transition-colors duration-200 text-base ">
                    <div className="w-[40px] h-[40px] element-center  border border-[#fff] rounded-full">
                      {item.icon === "facebook" ? (
                        <a href="">
                          <FaFacebook size={"30px"} />
                        </a>
                      ) : item.icon === "twitter" ? (
                        <a href="">
                          <FaTwitter size={"30px"} />
                        </a>
                      ) : (
                        <a href="">
                          <FaInstagram size={"30px"} />
                        </a>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <h3 className="text-lg font-light my-2">Company</h3>
              {company.map((item) => (
                <li key={item.id}>
                  <a href="" className="text-lg mt-1">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul>
            <h3 className="text-xl font-light my-2">Product</h3>
            {product.map((item) => (
              <li key={item.id}>
                <a href="" className="text-lg mt-1">{item.title}</a>
              </li>
            ))}
          </ul>
          <div>
            <ul>
              <h3 className="text-lg font-light my-2">Services</h3>
              {services.map((item) => (
                <li key={item.id}>
                  <a href="" className="text-lg mt-1">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <h3 className="text-lg font-light my-2">Legal</h3>
              {legal.map((item) => (
                <li key={item.id}>
                  <a href="" className="text-lg mt-1">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
