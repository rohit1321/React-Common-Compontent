"use client";

import { useState, useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";

const iconLibraries = { Fa: FaIcons, Md: MdIcons, Ai: AiIcons };

const IconPicker = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [search, setSearch] = useState("");

  // Memoize all icons to optimize performance
  const allIcons = useMemo(() => {
    return Object.entries(iconLibraries).flatMap(([prefix, lib]) =>
      Object.entries(lib).map(([name, Icon]) => ({
        name,
        Icon,
        fullName: `${prefix}${name}`,
      }))
    );
  }, []);

  // Filter icons based on search input
  const filteredIcons = allIcons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectIcon = (event, icon) => {
    event.stopPropagation();
    setSelectedIcon(icon);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-lg font-semibold mb-2">Select an Icon</h3>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search icons..."
        className="border p-2 rounded w-60 mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Dropdown for icons */}
      <DropdownButton
        id="dropdown-basic-button"
        title={
          selectedIcon ? (
            <>
              <selectedIcon.Icon className="me-2 text-lg" />
              {selectedIcon.name}
            </>
          ) : (
            "Select an Icon"
          )
        }
        variant="primary"
      >
        <div className="dropdown-scroll max-h-60 overflow-auto p-2">
          {filteredIcons.length > 0 ? (
            filteredIcons.map((icon) => (
              <Dropdown.Item
                key={icon.fullName}
                onClick={(e) => handleSelectIcon(e, icon)}
                className="flex items-center space-x-2"
              >
                <icon.Icon className="text-lg" />
                <span>{icon.name}</span>
              </Dropdown.Item>
            ))
          ) : (
            <p className="text-gray-500 p-2">No icons found</p>
          )}
        </div>
      </DropdownButton>

      {/* Display selected icon */}
      {selectedIcon && (
        <div className="mt-4 flex flex-col items-center">
          <h4 className="text-lg font-semibold">Selected Icon:</h4>
          <div className="text-4xl mt-2">
            <selectedIcon.Icon />
          </div>
          <p className="text-sm text-gray-600">{selectedIcon.name}</p>
        </div>
      )}
    </div>
  );
};

export default IconPicker;
