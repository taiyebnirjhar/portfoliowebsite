import React from "react";
import { useLoaderData } from "react-router-dom";

function ProjectDetails() {
  const project = useLoaderData();

  const {
    name,
    about,
    banner,
    products,
    extra,
    projectData,
    Live,
    client,
    server,
  } = project[0];

  console.log(client);

  return (
    <>
      <>
        <main
          className="l-main menu-container mx-auto"
          // id={menuDetailsData.title}
        >
          <section className="section">
            <div className="lg:w-[90%]  mx-auto">
              <div className="flex flex-col xl:flex-row">
                <div className="w-[80%] xl:w-[27%] mx-auto">
                  <img src={banner} alt="" />
                </div>
                <div className=" w-[80%]  xl:w-[27%] mx-auto">
                  <img src={products} alt="" />
                </div>
                <div className="w-[80%]  xl:w-[27%] mx-auto">
                  <img src={extra} alt="" />
                </div>
              </div>

              <div className="flex flex-row gap-8 m-6 font-medium opacity-80  text-[10px] sm:text-base">
                <div className="">
                  <i className="fa-brands fa-github px-2"></i>
                  Source Code:
                  <a href={client} className="text-[#0b6bb0f1] inline px-2">
                    client
                  </a>
                  {server && (
                    <a href={server} className="text-[#0b6bb0f1] inline px-2">
                      server
                    </a>
                  )}
                </div>
                {/* <div className="">Price: {menuDetailsData?.price} Tk</div> */}
                <div className="">
                  Live Link:{" "}
                  <span>
                    <i className="fa-solid fa-link pl-2 pr-1"></i>
                    <a href={Live} className="text-[#0b6bb0f1] px-2">
                      {Live}
                    </a>{" "}
                  </span>
                </div>
              </div>

              <hr className="border-[1px] mt-4 border-green-600  opacity-10 b-t-0" />

              <hr className="border-[1px] mt-4 border-green-600  opacity-10 b-t-0" />

              <div className=" text-justify">
                <div className=" mx-4 my-6">
                  <h1 className="text-3xl pb-4">Description</h1>

                  {about}
                </div>
                <div className=" mx-4 my-6">
                  <h1 className="text-3xl pb-4">Details</h1>
                </div>
                <div className="mx-4 my-6 list-disc">
                  {projectData &&
                    projectData.map((items) => {
                      return <li>{items}</li>;
                    })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    </>
  );
}

export default ProjectDetails;
