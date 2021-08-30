import React from "react";
// import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSearch,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
export const Search = () => {
  return (
    <div className="flex space-x-3 p-2">
      <div className="relative flex flex-1 ">
        <input
          type="text"
          placeholder="Search Zuri..."
          className="flex-grow outline-none rounded-md"
        />
        {/* <FaSearch className="absolute" /> */}

        <FontAwesomeIcon icon={faSearch} className="absolute right-1 top-1" />
      </div>
      <div>
        <FontAwesomeIcon icon={faCog} className="text-gray-600" />
      </div>
      <div>
        <FontAwesomeIcon icon={faUserShield} />
      </div>
    </div>
  );
};
