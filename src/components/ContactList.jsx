import React, { useState } from "react";
const ContactList = ({ data }) => {
  const [onlyEvenChecked, setOnlyEvenChecked] = useState(false);

  const handleCheckboxChange = () => {
    setOnlyEvenChecked(!onlyEvenChecked);
  };

  return (
    <div>
      <div>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Status</th>
              <th scope="col">Country ID</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dt, i) => (
              <tr key={i}>
                <td className="text-capitalize">#{dt.id}</td>
                <td className="text-capitalize">{dt.phone}</td>
                <td className="text-capitalize">{dt.country.id}</td>
                <td className="text-capitalize">{dt.country.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {data?.map((dt, i) => {})}
      </div>
      {/* Checkbox */}
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="onlyEvenCheckbox"
          checked={onlyEvenChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="onlyEvenCheckbox">
          Only even
        </label>
      </div>
    </div>
  );
};

export default ContactList;
