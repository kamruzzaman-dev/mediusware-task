import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);

  const handleCloseModals = () => {
    setShowModalA(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg  btn-primary btn-outline-primary"
            type="button"
            onClick={() => setShowModalA(true)}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-warning btn-outline-warning"
            type="button"
            onClick={() => setShowModalA(true)}
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModalA} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center gap-3">
            <Button
              style={{ backgroundColor: "#46139f", color:"#fff", borderColor: "#46139f" }}
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => setShowModalA(true)}
            >
              All Contacts
            </Button>
            <Button
              style={{ backgroundColor: "#ff7f50", color:"#fff", borderColor: "#ff7f50" }}
              className="btn btn-md btn-outline-warning"
              type="button"
              onClick={() => setShowModalA(true)}
            >
              US Contacts
            </Button>
            <Button
              style={{ backgroundColor: "#46139f", color:"#fff", borderColor: "#46139f" }}
              className="btn btn-md"
              onClick={handleCloseModals}
            >
              Close
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </div>
  );
};

export default Problem2;
