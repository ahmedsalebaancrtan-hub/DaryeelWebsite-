
function ContributionForm({needs}){

    return (
      <form className="contribution-form">
        <h2>make a pledge </h2>
       <div className="form-field">
        <label>Your Name </label>
        <input type="text" />
       </div>

         <div className="form-field">
        <label>Item Name </label>
        <select>
            <option value="">Select an item</option>
            {needs.map((need) => (
                <option key={need.id} value={need.id}>
                    {need.name}
                </option>
            ))}
        </select>
            </div>
            <div className="form-field">
                <label >How many ?</label>
                <input type="number" inputMode="numeric"/>

            </div>
            <button type="submit" className="pledge-button">
                Add
            </button>
      </form>
    )
}

export default ContributionForm;