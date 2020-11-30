import React, { FunctionComponent, useState } from "react";

import ResourcePreview from "../../components/ResourcePreview";
import "./Resources.scss";

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

const Resources: FunctionComponent<any> = () => {
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
            <button>Download</button>
          </tr>
          <tr className="teacher-pack__row">
            Course Guide pdf
            <button>Download</button>
          </tr>
        </tbody>
        <tr className="teacher-pack__action">
          <button>Download All</button>
        </tr>
      </table>

      <h1>Extra Resources</h1>
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

export default Resources;
