import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import axios from "axios";

import "./ResourceEdit.scss";

const ResourceEdit: FunctionComponent<any> = ({ history }) => {
  const [formValues, setFormValues] = useState<{
    id: number;
    title: string;
    description: string;
    level: string;
    extra: string;
    targetLanguage: string;
    fileData: any;
  }>({
    id: 0,
    title: "",
    description: "",
    level: "",
    extra: "",
    targetLanguage: "",
    fileData: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((formValues) => ({
      ...formValues,
      fileData: e.target.files && e.target.files[0],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formValues.title);
    formData.append("description", formValues.description);
    formData.append("level", formValues.level);
    formData.append("extra", formValues.extra);
    formData.append("targetLanguage", formValues.targetLanguage);
    formData.append("fileData", formValues.fileData);
    await axios.put(`/admin/resource/${formValues.id}`, formData);
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Edit resource</h3>
      <form onSubmit={handleSubmit} className="edit-resource-form">
        <label>
          Resource ID
          <input
            type="number"
            onChange={handleInputChange}
            name="id"
            required
          />
        </label>
        <label>
          Title
          <input type="text" onChange={handleInputChange} name="title" />
        </label>
        <label>
          description
          <textarea name="description" onChange={handleInputChange} />
        </label>
        <label>
          Level
          <input type="number" name="level" onChange={handleInputChange} />
        </label>
        <label>
          Language Code
          <input
            type="text"
            name="targetLanguage"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Extra:
          <label>
            True
            <input
              type="radio"
              name="extra"
              value="true"
              onChange={handleInputChange}
            />
          </label>
          <label>
            False
            <input
              type="radio"
              name="extra"
              value="false"
              onChange={handleInputChange}
            />
          </label>
        </label>
        <label>
          File
          <input type="file" name="fileData" onChange={handleFileInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResourceEdit;
