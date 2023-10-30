import {
  Eventcalendar, setOptions
} from "@mobiscroll/react";
import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./DowntimeCalendar.css";

export const BugTest = () => {
  console.log("Running DnyColor..");

  setOptions({
    theme: "ios",
    themeVariant: "light",
  });
   
  const myEvents = React.useMemo(() => {
    return [{
        start: '2023-10-28T08:00',
        end: '2023-10-30T08:00',
        title: 'Event 1',
        resource: 'res1',
        recurring: {
            repeat: 'weekly'
        }
    }, ]
}, []);

const myResources = React.useMemo(() => {
    return [{
        id: 'res1',
        name: 'Resource 1',
        color: '#1dab2f'
    }, {
        id: 'res2',
        name: 'Resource 2',
        color: '#76e083'
    }, {
        id: 'res3',
        name: 'Resource 3',
        color: '#4981d6'
    }, {
        id: 'gro1',
        name: 'Group 1',
        color: '#ff1717',
        eventCreation: false,
        children: [{
            id: 'res4',
            name: 'Resource 4',
            color: '#f7961e',
        }, {
            id: 'res5',
            name: 'Resource 5',
            color: '#34c8e0',
        }]
    }, {
        id: 'gro2',
        name: 'Group 2',
        collapsed: true,
        eventCreation: false,
        children: [{
            id: 'gro3',
            name: 'Group 3',
            color: '#af0000',
            eventCreation: false,
            children: [{
                id: 'res6',
                name: 'Resource 6',
                color: '#843100',
            }, {
                id: 'res7',
                name: 'Resource 7',
                color: '#4caf00',
            }, {
                id: 'res8',
                name: 'Resource 8',
                color: '#7056ff',
            }]
        }, {
            id: 'res9',
            name: 'Resource 9',
            color: '#4caf00',
        }, {
            id: 'res10',
            name: 'Resource 10',
            color: '#e20000',
        }]
    }, {
        id: 'res11',
        name: 'Resource 11',
        color: '#d6d145'
    }, {
        id: 'res12',
        name: 'Resource 12',
        color: '#e25dd2'
    }]
}, []);

const view = React.useMemo(() => {
    return {
        timeline: {
            type: 'day'
        }
    };
}, []);

return (
    <Eventcalendar
        theme="ios" 
        themeVariant="light"
        className="md-resource-grouping-hierarchy"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        view={view}
        data={myEvents}
        resources={myResources}
   />
); 
 
  
};
