import React from 'react'
import styles from './OCCard.module.css'
import pic from '../assets/images/stars-min.webp'
import linkedin from "../assets/svgs/linkedin.svg"
import insta from "../assets/svgs/insta.svg"

function OCCard(props) {
  return (
    <div className={styles.parentcard}>
      <div className={`${styles.card} ${styles.cardHover}`}>
        <img className={styles.image} src={props.img} alt="" />
        <div className={styles.content}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.position}>{props.domain}</p>
          <div className={styles.social}>
            <p><a className={styles.linkedin} href={props.linkedinId}><img src={linkedin} width={40} alt="" /></a></p>
            <p><a className={styles.insta} href={props.InstaId}><img src={insta} width={40} alt="" /></a></p>
          </div>
        </div>

        
        <img src="https://www.cognizance.org.in/Images/team/vectors/leftMid.png" className={styles.leftMid} alt=""></img>
        <img src={pic} className={styles.rightMid} alt=""></img>
      </div>

    </div>
  )
}

export default OCCard