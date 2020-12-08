import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import ResourcePreview from "../../components/ResourcePreview";
import "./Resources.scss";
import translate from "../../utils/translate";
import { CourseState } from "../../interfaces/reducerInterfaces";

const resources = [
  {
    id: 1,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 2,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 3,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
];

interface ResourcesProps {
  targetLanguage: string;
}

const Resources: FunctionComponent<ResourcesProps> = (props) => {
  const { targetLanguage } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="resources-grand-wrapper">
      <table className="resources__teacher-pack">
        <thead>
          <th className="teacher-pack__heading">Teacher's Pack</th>
        </thead>
        <tbody className="teacher-pack__body">
          <tr className="teacher-pack__row">
            Assessment Pack pdf
            <button>{translate("Download", targetLanguage)}</button>
          </tr>
          <tr className="teacher-pack__row">
            Course Guide pdf
            <button>{translate("Download", targetLanguage)}</button>
          </tr>
        </tbody>
        <tr className="teacher-pack__action">
          <button>{translate("Download All", targetLanguage)}</button>
        </tr>
      </table>

      <h2>Extra Resources</h2>
      <div className="resources__extra">
        {resources.map((resource, i) => {
          return (
            <ResourcePreview
              key={resource.id}
              resource={resource}
              open={i === openIndex}
              index={i}
              handleOpen={(i: number) => setOpenIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

function mapStateToProps({ course }: { course: CourseState }) {
  return { targetLanguage: course.activeCourseDetail.targetLanguage };
}

export default connect(mapStateToProps, {})(Resources);
