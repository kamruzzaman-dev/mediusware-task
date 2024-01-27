import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactList from "./ContactList";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/contacts/?page=1&page_size=6"
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const jsonData = await response.json();
        console.log("Received data:", jsonData);
        setData(jsonData.results);
      } catch (error) {
        console.error("Error during fetch:", error.message);
      }
    };

    dataFetching();
  }, []);

  const handleCloseModals = () => {
    setShowModal(false);
  };

  console.log(data);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: "#46139f",
              color: "#fff",
              borderColor: "#46139f",
            }}
            type="button"
            onClick={() => setShowModal(true)}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: "#ff7f50",
              color: "#fff",
              borderColor: "#ff7f50",
            }}
            type="button"
            onClick={() => setShowModal(true)}
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center gap-3">
            <Button
              style={{
                backgroundColor: "#46139f",
                color: "#fff",
                borderColor: "#46139f",
              }}
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => setShowModal(true)}
            >
              All Contacts
            </Button>
            <Button
              style={{
                backgroundColor: "#ff7f50",
                color: "#fff",
                borderColor: "#ff7f50",
              }}
              className="btn btn-md btn-outline-warning"
              type="button"
              onClick={() => setShowModal(true)}
            >
              US Contacts
            </Button>
            <Button
              style={{
                backgroundColor: "#46139f",
                color: "#fff",
                borderColor: "#46139f",
              }}
              className="btn btn-md"
              onClick={handleCloseModals}
            >
              Close
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <ContactList data={data} />{" "}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Problem2;
