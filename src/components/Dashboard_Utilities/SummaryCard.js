import React from 'react'

const SummaryCard = (props) => {
    let {figure, bgvalue,  title, text} =  props
    

  return (
    <div className='summary-card'>
      <div className="card-content">
        <p className='card-bg'>{bgvalue}</p>
        <h1>{figure}</h1>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SummaryCard
