import Image from "next/image";
import avatar from "@/public/avatar.png";
import { useState } from "react";
import clsx from "clsx";
import Atropos from "atropos/react";

export default function Home() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      <div
        className={`bg-[#167E83] h-full py-20 relative transition-all ${clsx({
          ["min-w-[60px] w-[60px] px-2"]: isCollapse,
          "min-w-[280px] w-[280px] px-4": !isCollapse,
        })}`}
      >
        <div className="absolute right-2 top-2 ">
          <BurgerMenu onClick={() => setIsCollapse(!isCollapse)} />
        </div>

        <div
          className={`flex items-center  ${clsx({ "opacity-0": isCollapse })}`}
        >
          <Avatar className="w-20 h-20" />
          <div className="ml-6 w-full">
            <div className="ml-2 text-white text-3xl font-bold">Loli</div>
            <hr className="w-full border-[#73CACB] border-t-2" />
            <div className="ml-2 text-white font-medium">kucing</div>
          </div>
        </div>

        <div className="mt-8">
          <div
            className={`hover:opacity-100 bg-[#4CA6A7] opacity-80 text-white flex items-center min-h-[40px] h-[40px] rounded-lg ${clsx(
              { "px-0 justify-center": isCollapse },
              { "px-4": !isCollapse }
            )}`}
          >
            <svg
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <div
              className={`${clsx({ hidden: isCollapse, "ml-2": !isCollapse })}`}
            >
              Dashboard
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-full w-full pt-10 px-12 overflow-y-auto">
        <div className="flex items-center justify-end">
          <div>
            <h1 className="font-bold text-3xl">Hi Loli,</h1>
            <h2 className="font-medium text-xl">Welcome Back</h2>
          </div>
          <Avatar className="w-36 h-36" />
        </div>

        <div className="bg-[#73CACB] px-20 pt-12 pb-8 rounded-3xl relative mt-16 mb-10">
          <div className="absolute -top-3 right-0 left-0 flex justify-center">
            <div className="bg-[#167E83] w-10/12 py-1 text-white font-bold text-3xl rounded-2xl text-center">
              PROFIL PELIHARAAN
            </div>
          </div>
          <div className="flex justify-between flex-wrap w-full">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
          </div>

          <div className="flex gap-x-3 justify-center mt-8">
            <div className="bg-[#167E83] h-3 w-3 rounded-full"></div>
            <div className="bg-white h-3 w-3 rounded-full"></div>
            <div className="bg-white h-3 w-3 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AnimalCard = () => (
  <Atropos shadowScale={0} highlight={false} className="my-atropos">
    <div className="overflow-hidden rounded-xl max-w-min mt-3 ">
      <div className="h-56 w-56 bg-white text-white relative">
        <div className="bg-[#167E83] py-3 px-5 rounded-lg flex absolute bottom-0 w-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9688 4.18748H27.8438L27.3823 3.26516C27.211 2.92257 26.9477 2.63445 26.6219 2.43307C26.2961 2.23169 25.9206 2.12501 25.5376 2.12498H22.0816L20.3234 0.366704C19.673 -0.282984 18.5625 0.177211 18.5625 1.09567V10.7533L26.8125 13.6995V11.4062H28.875C31.1534 11.4062 33 9.55965 33 7.28123V5.21873C33 4.64897 32.5385 4.18748 31.9688 4.18748ZM24.75 7.28123C24.1802 7.28123 23.7188 6.81975 23.7188 6.24998C23.7188 5.68022 24.1802 5.21873 24.75 5.21873C25.3198 5.21873 25.7812 5.68022 25.7812 6.24998C25.7812 6.81975 25.3198 7.28123 24.75 7.28123ZM6.1875 12.4375C5.05055 12.4375 4.125 11.5119 4.125 10.375C4.125 9.2361 3.20139 8.31248 2.0625 8.31248C0.923613 8.31248 0 9.2361 0 10.375C0 13.0601 1.72928 15.3282 4.125 16.1822V29.9687C4.125 30.5385 4.58648 31 5.15625 31H9.28125C9.85102 31 10.3125 30.5385 10.3125 29.9687V22.75H20.625V29.9687C20.625 30.5385 21.0865 31 21.6562 31H25.7812C26.351 31 26.8125 30.5385 26.8125 29.9687V15.8889L17.1478 12.4375H6.1875Z"
              fill="#F2F2F2"
            />
          </svg>
          <div className="ml-4 ">Siro</div>
        </div>
      </div>
    </div>
  </Atropos>
);

const Avatar = ({ className = "" }) => (
  <div className="border-4 w-min rounded-full">
    <div
      className={`text-center rounded-full overflow-hidden relative bg-white ${className}`}
    >
      <Image
        src={avatar}
        layout="fill"
        objectFit="cover"
        className="rounded-full select-none"
        alt="Image Avatar"
      />
    </div>
  </div>
);

const BurgerMenu = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center"
    >
      <svg
        className="w-6 h-6 text-white active:outline-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </div>
  );
};
