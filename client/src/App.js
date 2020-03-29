import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        <FontAwesomeIcon icon={faReact}/>
        <i className="fab fa-react"/> React File Upload
      </h4>
    </div>
  );
};

export default App;
