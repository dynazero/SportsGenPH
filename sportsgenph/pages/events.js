import { MotionConfig, motion } from 'framer-motion';
import React, { useState,useRef, useEffect } from 'react'
import ReactDOM from "react-dom";
import images from '../public/events/images.js'

const eventItem = [
  { id:1, 
    title: "ekf referee course kata - larnca 2023", 
    eventdate:  Date("2023-02-03"), 
    logo: images.image1,
    regdatestart:  Date("2023-02-03"),
    regdateend:  Date("2023-02-05"),
    //days+hrs
    // countdown: Date(regdatestart - regdateend)
  },
  { id:2, 
    title: "karate1 series a - athens 2023", 
    eventdate: Date("2023-01-13"),
    logo: images.image2,
    regdatestart: Date("2023-01-13"),
    regdateend: Date("2023-01-15"),
    //days+hrs
    // countdown: regdatestart-regdateend
  },
  { id:3, 
    title: "karate1 premier league - cairo 2023", 
    eventdate: Date("2023-01-27"),
    logo: images.image3,
    regdatestart: Date("2023-01-01"),
    regdateend: Date("2023-01-27"),
    //days+hrs
    // countdown: regdatestart-regdateend
  },
  { id:4, 
    title: "ekf referee course kata - larnca 2023", 
    eventdate:  Date("2023-02-03"), 
    logo: images.image1,
    regdatestart:  Date("2023-02-03"),
    regdateend:  Date("2023-02-05"),
    //days+hrs
    // countdown: regdatestart-regdateend
  },
  { id:5, 
    title: "karate1 series a - athens 2023", 
    eventdate: Date("2023-01-13"),
    logo: images.image2,
    regdatestart: Date("2023-01-13"),
    regdateend: Date("2023-01-15"),
    //days+hrs
    // countdown: regdatestart-regdateend
  },
  { id:6, 
    title: "karate1 premier league - cairo 2023", 
    eventdate: Date("2023-01-27"),
    logo: images.image3,
    regdatestart: Date("2023-01-01"),
    regdateend: Date("2023-01-27"),
    //days+hrs
    // countdown: regdatestart-regdateend
  }
];

export default function events() {
 let a = eventItem[0].eventdate;
 let dateDay = new Date(a);
 let b = dateDay.getMonth();

 console.log(a);
console.log(b);
  return (
    <>
    <div className='picClass mx-auto'>
    <h1 className='eventsH1' style={{ textAlign: 'center' }}>Events</h1>
      {eventItem.map((item, i) => (
        <motion.div
        key={item.id}
        className='picClassItem eventsDialogBox shadow-lg p-3 mb-5 bg-body rounded'
        initial={{ opacity: 0, translateX: -50, translateY: -50 }}
        animate = {{ opacity: 1, translateX: 0, translateY: 0}}
        transition={{ duration: 0.3, delay: i * 0.2}}
        >
          <h2> {item.title} </h2>
        <div>
         {/* {toString(item.eventdate[0].Date)} */}
        </div>

        </motion.div>
      ))}
    
      </div>
    </>
  )
}

