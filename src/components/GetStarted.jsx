export default function GetStarted() {
  return (
    <section className="pt-[100px] pb-10">
      <div className="container mx-auto block md:flex justify-center  gap-40">
        <div>
          <h1 className="text-[44px] font-medium tracking-wide  leading-none mb-3">
            Build better landing page <br/> fast 
          </h1>
          <p>
            With lots of unique blocks, you can easily<br/> build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="flex  gap-7">
          <button className="w-[182px] h-[60px] text-[#473BF0] bg-[#F9F9FE] drop-shadow-md rounded-lg flex justify-center items-center gap-3">
            <h5>Learn More</h5>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-[182px] h-[60px] text-[#F9F9FE] bg-[#473BF0] drop-shadow-md rounded-lg flex justify-center items-center gap-3">
            <h5>Get it now</h5>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
