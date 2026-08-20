// Shows the pledges and cancels one. Owns no state: data comes down as props,
// canceling goes up via onCancelPledge (the button is here, the handler is in App).
function PledgeList({ pledges,}) {

  return (
    <div className="pledge-list">
      <h2>Your pledges</h2>
      <ul className="pledge-rows">
        {pledges.map((pledge) => (
          // key is the stable string id, never the array index.
          <li key={pledge.id} className="pledge-row">
            <span className="pledge-text">
              <strong>{pledge.name}</strong> 
              <strong>{pledge.quantity}</strong> 
                <strong>{pledge.needId}</strong>
            </span>
     
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PledgeList;
