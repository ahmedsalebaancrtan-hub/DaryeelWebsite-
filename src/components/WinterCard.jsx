import React, { useState } from 'react'

const WinterCard = ({ need }) => {
    const [showDetails, setShowDetails] = useState(false)

      const progressPct = Math.min(
    100,
    Math.round((need.receivedQuantity / need.requestedQuantity) * 100)
  );

  // This gives us variable for urgent
  const isUrgent = need.priority === "Urgent";

  function handleToggleDetails(){
    setShowDetails(!showDetails)
  }
  return (
   <article className={isUrgent ? "need-card need-card--urgent" : "need-card"}>
      <div className="badge-row">
        <span className="badge">{need.category}</span>
        <span className={isUrgent ? "badge badge--urgent" : "badge"}>
          {need.priority} priority
        </span>
      </div>
      <h2>{need.name}</h2>
      <p>{need.description}</p>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: progressPct + "%" }}
        ></div>
      </div>
      <p className="progress-caption">
        {need.receivedQuantity} of {need.requestedQuantity} received ({progressPct}%)
      </p>
      <button
        type="button"
        className="details-button"
        onClick={handleToggleDetails}
      >
        {showDetails ? "Hide donation details" : "Show donation details"}
      </button>
      {showDetails && (
        <div className="need-details">
          <p>
            <strong>Sizes needed:</strong> {need.sizes.join(", ")}
          </p>
          <p>
            <strong>Condition:</strong> {need.condition}
          </p>
          <p>
            <strong>Still needed:</strong>{" "}
            {need.requestedQuantity - need.receivedQuantity} items
          </p>
        </div>
      )}
    </article>
   
  )
}

export default WinterCard