import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import ResourcePreview from "../../components/ResourcePreview";
import "./Resources.scss";
import translate from "../../utils/translate";
import { CourseState, Resource } from "../../interfaces/reducerInterfaces";
import { getAllResources } from "../../actions";

interface ResourcesProps {
  targetLanguage: string;
  getAllResources: Function;
  level: number;
  resources: Resource[];
}

const Resources: FunctionComponent<ResourcesProps> = (props) => {
  const { targetLanguage, getAllResources, level, resources } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    getAllResources(targetLanguage, level);
  }, []);

  return (
    <div className="resources-grand-wrapper">
      <table className="resources__teacher-pack">
        <thead>
          <th className="teacher-pack__heading">Teacher's Pack</th>
        </thead>
        <tbody className="teacher-pack__body">
          {resources &&
            resources
              .filter((resource) => !resource.extra)
              .map((resource) => {
                return (
                  <tr className="teacher-pack__row">
                    {resource.title}
                    <button>{translate("Download", targetLanguage)}</button>
                  </tr>
                );
              })}
        </tbody>
        <tr className="teacher-pack__action">
          <button>{translate("Download All", targetLanguage)}</button>
        </tr>
      </table>

      <h2>Extra Resources</h2>
      <div className="resources__extra">
        {resources &&
          resources
            .filter((resource) => resource.extra)
            .map((resource, i) => {
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

function mapStateToProps({
  course,
  resources,
}: {
  course: CourseState;
  resources: Resource[];
}) {
  return {
    targetLanguage: course.activeCourseDetail.targetLanguage,
    level: course.activeCourseDetail.level,
    resources,
  };
}

export default connect(mapStateToProps, { getAllResources })(Resources);
