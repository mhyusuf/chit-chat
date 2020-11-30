import React, { FunctionComponent } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import "./ResourcePreview.scss";

const ResoucePreview: FunctionComponent<any> = ({
  resource,
  index,
  open,
  handleOpen,
}) => {
  return (
    <div className="resource-preview-grand-wrapper">
      <div className="resource-preview__header">
        <h2>{resource.title}</h2>
        {!open ? (
          <IoIosArrowDropdownCircle
            className="header__dropdown-icon"
            onClick={() => handleOpen(index)}
          />
        ) : (
          <IoIosArrowDropupCircle
            className="header__dropdown-icon"
            onClick={() => handleOpen(null)}
          />
        )}
      </div>
      {open && (
        <div className="resource-preview__content">
          <div className="content__main">
            <p>{resource.description}</p>
            <div className="content__picture"></div>
          </div>
          <div className="content__buttons">
            <button>
              <p>Download</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResoucePreview;
