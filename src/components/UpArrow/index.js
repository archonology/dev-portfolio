import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const UpArrow = ({showBtn}) => {
  const [visibility, setVisibility] = useState({ display: "none" });
  useEffect(() => {
    if (showBtn === true) {
      setVisibility({ display: "block" });
    } else {
      setVisibility({ display: "none" });
    }
  }, [showBtn]);

  return (
    <div className="toTop">
      <button
        className="toTop-button"
        style={visibility}
        aria-label="Scroll to top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        <KeyboardDoubleArrowUpIcon />
      </button>
    </div>
  );
};

export default UpArrow;
