import React from 'react'
import { MdEventNote } from "react-icons/md";
const AppointmentCard = (props) => {
const {date, title, body} = props

  return (
    <div className='appointment-card'>
      <div className="appointment-date">
        <h3>{date} </h3>
        <MdEventNote className='icon' size={20}/>
      </div>

        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default AppointmentCard
