"use client";

import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const iconLibraries = { Fa: FaIcons, Md: MdIcons, Ai: AiIcons };

// Flatten all icons into an array
const allIcons = Object.entries(iconLibraries).flatMap(([prefix, lib]) =>
  Object.entries(lib).map(([name, Icon]) => ({
    name,
    Icon,
    fullName: `${prefix}${name}`,
  }))
);

console.log(allIcons.length);

const IconPicker = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = (event, icon) => {
    event.stopPropagation(); // Prevent Bootstrap dropdown from closing
    setSelectedIcon(icon);
  };

  return (
    <div className=" mt-5 text-center">
      <h3>Select an Icon</h3>

      {/* Bootstrap Dropdown with Icons */}
      <DropdownButton
        id="dropdown-basic-button"
        title={
          selectedIcon ? (
            <>
              <selectedIcon.Icon className="me-2" />
              {selectedIcon.name}
            </>
          ) : (
            "Select an Icon"
          )
        }
        variant="primary"
      >
        <div className="dropdown-scroll">
          {allIcons.map((icon) => (
            <Dropdown.Item key={icon.fullName} onClick={(e) => handleSelectIcon(e, icon)}>
              <icon.Icon className="me-2" /> {icon.name}
            </Dropdown.Item>
          ))}
        </div>
      </DropdownButton>


      {/* Display selected icon */}
      {selectedIcon && (
        <div className="mt-4">
          <h4>Selected Icon:</h4>
          <div className="display-3">{<selectedIcon.Icon />}</div>
          <p>{selectedIcon.name}</p>
        </div>
      )}
    </div>
  );
};

export default IconPicker;
