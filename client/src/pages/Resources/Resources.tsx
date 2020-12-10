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
    if(level) getAllResources(targetLanguage, level);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetLanguage, level]);

  return (
    <div className="resources-grand-wrapper">
      <div className="resources__teacher-pack">
        <div>
          <h2 className="teacher-pack__heading">Teacher's Pack</h2>
        </div>
        {!!resources.length && <div className="teacher-pack__body">
            {resources
              .filter((resource) => !resource.extra)
              .map((resource) => {
                return (
                  <div key={resource.id} className="teacher-pack__row">
                    {resource.title}
                    <a href={`/api/resource/${resource.id}`}>
                      <button>{translate("Download", targetLanguage)}</button>
                    </a>
                  </div>
                );
              })}
        </div>}
      </div>

      {!!resources.length &&
      <> <h2>Extra Resources</h2>
      <div className="resources__extra">
        {
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
      </div></>}
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
