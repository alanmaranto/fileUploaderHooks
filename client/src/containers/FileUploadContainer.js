import React, { useState } from "react";
import axios from "axios";
import FileUpload from "../components/FileUploadView";

const FileUploadContainer = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file); //The string corresponds to the name on the request

    try {
      const result = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: ProgressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = result.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <FileUpload
      message={message}
      filename={filename}
      uploadedFile={uploadedFile}
      uploadPercentage={uploadPercentage}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default FileUploadContainer;
