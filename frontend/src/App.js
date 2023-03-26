import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function App() {
  const tabsBoxRef = useRef();
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    const arrowData = document.querySelectorAll(".icon svg");

    const handleIcons = (scrollVal) => {
      let maxScrollableWidth =
        tabsBoxRef.current.scrollWidth - tabsBoxRef.current.clientWidth;
      arrowData[0].parentElement.style.display =
        scrollVal <= 0 ? "none" : "flex";
      arrowData[1].parentElement.style.display =
        maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };

    arrowData.forEach((icon) => {
      icon.addEventListener("click", () => {
        let scrollWidth = (tabsBoxRef.current.scrollLeft +=
          icon.id === "left" ? -340 : 340);
        handleIcons(scrollWidth);
      });
    });
  }, []);

  const handleMouseMove = (e) => {
    if (!dragging) return;
    tabsBoxRef.current.classList.add("drag");
    console.log(tabsBoxRef.current.classList);
    tabsBoxRef.current.scrollLeft -= e.movementX;
    // handleIcons(tabsBoxRef.current.scrollLeft);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    tabsBoxRef.current.classList.remove("drag");
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="icon">
          <IoIosArrowBack id="left" />
        </div>

        <ul
          className="tabs-box"
          ref={tabsBoxRef}
          onMouseDown={() => {
            setDragging(true);
          }}
          onMouseMove={handleMouseMove}
        >
          <li className="tab">Coding</li>
          <li className="tab active">JavaScript</li>
          <li className="tab">Podcasts</li>
          <li className="tab">Databases</li>
          <li className="tab">Web Development</li>
          <li className="tab">Unboxing</li>
          <li className="tab">History</li>
          <li className="tab">Programming</li>
          <li className="tab">Gadgets</li>
          <li className="tab">Algorithms</li>
          <li className="tab">Comedy</li>
          <li className="tab">Gaming</li>
          <li className="tab">Share Market</li>
          <li className="tab">Smartphones</li>
          <li className="tab">Data Structure</li>
        </ul>
        <div className="icon">
          <IoIosArrowForward id="right" />
        </div>
      </div>
    </div>
  );
}

export default App;
