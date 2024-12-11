import React from 'react';
import EventCard from '../components/EventCard'
import {EventsList} from '../assets/Events_data';
import styles from './EventSec.module.css'; 
import Title from "../components/Title";

function EventSec() {
  return (
    <div className='Homescrolled' style={{position:"relative", zIndex:"-1", paddingTop:"5rem"}}>
    <div className={styles.Container} style={{position:"relative", zIndex:"0"}}>
      <Title color={"Events"} noncolor={""} />
      <div className={styles.CardContainer}>
        {EventsList.map(item=>{
          return(
            <EventCard
            name={item.name}
            imgSrc= {item.imgUrl}
            des= {item.des}
            date={item.date}
            time={item.time}
            venue= {item.venue}
            link={item.link}
            deadline={item.deadline}
            />
          )
        })}
      </div>
    </div>
    </div>
  );
}

export default EventSec;

