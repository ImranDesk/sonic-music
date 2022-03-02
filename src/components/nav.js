import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic} from "@fortawesome/free-solid-svg-icons";
const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <div className="nav"><div className="tag">
      <h1>sONIC</h1>
      <h6>By Imran</h6></div>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        All Songs<span> </span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </div>
  );
};

export default Nav;
