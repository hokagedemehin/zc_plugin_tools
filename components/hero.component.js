import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faCog,
  faSearch,
  //   faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="p-4 bg-white rounded-lg mx-2">
      <p className="font-bold">Tools</p>
      <div className="p-4 flex">
        <div>
          <div className="w-3/5">
            <p className="text-lg font-bold">
              Powerful tools integrated just for Zuri Chat
            </p>
            <p>
              Tools belong to you and your Team, and they provide you extra
              features to make you more productive. Install once and everyone
              can make use of them
            </p>
          </div>
          <div className="relative flex w-3/4">
            <input
              type="text"
              name="searchHero"
              id="searchHero"
              placeholder="Search for tools..."
              className="  flex-grow outline-none rounded-md border-2"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-1 top-1"
            />
          </div>
        </div>
        <div className=" relative h-50">
          <Image
            src={"/amico.png"}
            // layout="fill"
            // objectFit="cover"
            height="100"
            width="100"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};
