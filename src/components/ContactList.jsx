import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const ContactList = ({ isLoading, data, setPage }) => {
  const [onlyEvenChecked, setOnlyEvenChecked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState(null);

  const handleCheckboxChange = () => {
    setOnlyEvenChecked(!onlyEvenChecked);
  };

  const handleCountryDetails = (details) => {
    setShowDetails(true);
    setDetails(details);
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Fire the event only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  return (
    <div>
      <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
        {data.length > 0 && (
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
              {data
                .filter((dt) => (onlyEvenChecked ? dt.id % 2 === 0 : true))
                .map((dt) => (
                  <tr key={dt.id} onClick={() => handleCountryDetails(dt)}>
                    <td className="text-capitalize">#{dt.id}</td>
                    <td className="text-capitalize">{dt.phone}</td>
                    <td className="text-capitalize">{dt.country.id}</td>
                    <td className="text-capitalize">{dt.country.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {data.length > 0 && (
          <div
            ref={ref}
            className="w-100"
            style={{
              height: "100px",
              width: "100%",
              backgroundColor: "Transparent",
            }}
          ></div>
        )}
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
      {/* Modal */}
      <Modal
        backdrop="static"
        show={showDetails}
        centered
        onHide={() => setShowDetails(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Country Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "left", padding: "16px" }}>
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Country: {details?.country?.name}
            </h4>
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              Phone: {details?.phone}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              #Id: {details?.id}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactList;
