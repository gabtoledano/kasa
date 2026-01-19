import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Collapse.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="collapse-button"
        aria-expanded={isOpen}
      >
        <span className="collapse-title">{title}</span>
        <FaChevronDown
          className={`collapse-icon ${isOpen ? "collapse-icon-open" : ""}`}
        />
      </button>

      <div
        className={`collapse-content ${isOpen ? "collapse-content-open" : ""}`}
      >
        <div className="collapse-text">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
