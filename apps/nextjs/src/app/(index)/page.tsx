"use client";

// import { BackgroundBeams } from "@saasfly/ui/background-beams";
import Image from "next/image";

import footer from "../../../public/imgs/footer.png";
import img1 from "../../../public/imgs/img1.png";
import img2 from "../../../public/imgs/img2.png";
import img3 from "../../../public/imgs/img3.png";
import img4 from "../../../public/imgs/img4.png";
import img5 from "../../../public/imgs/img5.png";
import img6 from "../../../public/imgs/img6.png";

export default function IndexPage() {
  const imagesList = [
    {
      src: img2.src,
      alt: "Image 2",
      class: "w-full rounded-[20px] shadow-3xl",
    },
    {
      src: img6.src,
      alt: "Image 6",
      class: "w-full rounded-[20px] shadow-3xl",
    },
    {
      src: img4.src,
      alt: "Image 4",
      class: "w-full rounded-[20px] shadow-3xl",
    },
    {
      src: img1.src,
      alt: "Image 1",
      class: "w-full rounded-[20px] shadow-3xl",
    },
    {
      src: img3.src,
      alt: "Image 3",
      class: "w-full rounded-[20px] shadow-3xl",
    },
    {
      src: img5.src,
      alt: "Image 5",
      class: "w-full rounded-[20px] shadow-3xl",
    },
  ];

  return (
    <section className="container mt-contentTop flex w-full flex-wrap justify-between md:flex-nowrap">
      <div className="flex w-full flex-col px-4 sm:w-contentLeftBox sm:px-0">
        <div className="w-contentTitle text-titlexl font-bold">
          Quickly generate popular animated stories
        </div>
        <div className="w-contentDecs mt-11 text-2xl font-normal text-[#646464]">
          <div>Pixfun is an innovative Al animation video creatorfor</div>
          <div>one-stop creation, no prompt learningneeded, </div>
          <div>with personalized lP characters and avast library of</div>
          <div>popular video templates.</div>
          <div className="mt-9 font-normal">
            Choose from over 100 characters and 10+ styles.
          </div>
        </div>
        <div className="flex-grow">
          <div className="mt-subcribeTop w-contentLeftBox">
            <div className="text-2xl text-black">
              In development, subscribe for updates.
            </div>
            <div className="relative mt-6 h-subcribeHeight w-full rounded-r-[20px]">
              <input
                type="email"
                placeholder="Your email address"
                className="absolute h-full w-full rounded-[20px] border-2 border-r-0 px-4 py-2 text-subcribexl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="absolute right-0 h-full w-52 rounded-[20px] border-2 border-l-0 bg-pixColor px-4 py-3 text-subcribexl font-bold leading-[60px] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full text-center">
          <Image src={footer.src} alt="footer" width={280} height={66} />
        </div>
      </div>
      <div className="my-4 w-full sm:my-0 sm:w-contentRightBox">
        <div className="flex justify-center gap-x-5">
          <div className="w-imgBox flex flex-col gap-y-5">
            {imagesList.slice(0, 3).map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={280}
                  height={320}
                  className={image.class}
                />
              );
            })}
          </div>
          <div className="w-imgBox flex flex-col gap-y-5">
            {imagesList.slice(3, 6).map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={280}
                  height={320}
                  className={image.class}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
