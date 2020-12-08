import React, { FunctionComponent } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { connect } from "react-redux";
import { CourseState } from "../../interfaces/reducerInterfaces";
import "./ResourcePreview.scss";
import translate from "../../utils/translate.js";

interface ResourcePreviewProps {
  targetLanguage: string;
  resource: any;
  open: boolean;
  index: number;
  handleOpen: Function;
}

const ResoucePreview: FunctionComponent<ResourcePreviewProps> = ({
  resource,
  index,
  open,
  handleOpen,
  targetLanguage,
}) => {
  return (
    <div className="resource-preview-grand-wrapper">
      <div
        className="resource-preview__header"
        onClick={() => handleOpen(index)}
      >
        <h2>{resource.title}</h2>
        {!open ? (
          <IoIosArrowDropdownCircle className="header__dropdown-icon" />
        ) : (
          <IoIosArrowDropupCircle className="header__dropdown-icon" />
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
              <p>{translate("Download", targetLanguage)}</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps({ course }: { course: CourseState }) {
  return { targetLanguage: course.activeCourseDetail.targetLanguage };
}

export default connect(mapStateToProps, {})(ResoucePreview);
