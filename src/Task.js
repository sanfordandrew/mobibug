import React from "react";
import {
    Eventcalendar,
    Page,
    Draggable,
    toast,
    setOptions,
    CalendarNav,
    CalendarPrev,
    CalendarToday,
    CalendarNext,
  } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./DowntimeCalendar.css"
export const Task = (props) => {

    const [draggable, setDraggable] = React.useState();

    const setDragElm = React.useCallback((elm) => {
      setDraggable(elm);
    }, []);

    return (
      <div ref={setDragElm} className="dynamically-color-and-invalidate-task">
        <div>
          {props.data.title}
          <span className="dynamically-color-and-invalidate-task-type">
            {props.data.category}
          </span>
        </div>
        <Draggable dragData={props.data} element={draggable} />
      </div>
    );
  }