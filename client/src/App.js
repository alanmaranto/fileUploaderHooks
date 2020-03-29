import React from "react";
import FileUpload from "./containers/FileUploadContainer";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        <FontAwesomeIcon icon={faReact} /> React File Upload
      </h4>
      <FileUpload />
    </div>
  );
};

export default App;
