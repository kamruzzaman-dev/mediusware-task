import React, { useState } from "react";

const data = [
  {
    id: 1,
    phone: "+1-202-555-0115",
    country: {
      id: 2,
      name: "United States",
    },
  },
  {
    id: 2,
    phone: "+1-202-555-0145",
    country: {
      id: 2,
      name: "United States",
    },
  },
  {
    id: 3,
    phone: "+1-202-555-0127",
    country: {
      id: 2,
      name: "United States",
    },
  },
  {
    id: 4,
    phone: "+1-202-555-0168",
    country: {
      id: 2,
      name: "United States",
    },
  },
  {
    id: 5,
    phone: "+880-165-552-5408",
    country: {
      id: 1,
      name: "Bangladesh",
    },
  },
  {
    id: 6,
    phone: "+880-115-553-7167",
    country: {
      id: 1,
      name: "Bangladesh",
    },
  },
];

const ContactList = () => {
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
              <th scope="col">country ID</th>
              <th scope="col">country</th>
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
