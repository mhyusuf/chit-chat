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
  const fileType = resource.fileName.match(/\.(doc|docx)$/)
    ? "wordDoc"
    : resource.fileName.match(/\.(ppt|pptx)$/)
    ? "powerpoint"
    : resource.fileName.match(/\.(pdf)$/)
    ? "pdf"
    : null;

  return (
    <div className="resource-preview-grand-wrapper">
      <div
        className="resource-preview__header"
        onClick={() => handleOpen(!open ? index : null)}
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
            <div
              className={`content__picture ${fileType ? fileType : null}`}
            ></div>
          </div>
          <div className="content__buttons">
            <a href={`/api/resource/${resource.id}`}>
              <button>{translate("Download", targetLanguage)}</button>
            </a>
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
