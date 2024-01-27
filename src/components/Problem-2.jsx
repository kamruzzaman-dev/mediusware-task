import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactList from "./ContactList";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [getAllContact, setGetAllContact] = useState(false);
  const [getUSContact, setGetUSContact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetching = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          getAllContact
            ? "https://contact.mediusware.com/api/contacts/?page=1&page_size=10"
            : "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1&page_size=10"
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const jsonData = await response.json();
        // console.log("Received data:", jsonData);
        setData(jsonData.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error during fetch:", error.message);
      }
    };

    dataFetching();
  }, [getAllContact, getUSContact]);

  const handleCloseModals = () => {
    setShowModal(false);
    setGetAllContact(false);
    setGetUSContact(false);
    setData([]);
  };

  const handleOpenModals = (contactValue) => {
    console.log(contactValue);
    setShowModal(true);
    if (contactValue === "us_contact") {
      setGetUSContact(true);
      setGetAllContact(false);
    } else {
      setGetUSContact(false);
      setGetAllContact(true);
    }
  };

  console.log(getAllContact, getUSContact);

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
            onClick={() => handleOpenModals("all_contact")}
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
            onClick={() => handleOpenModals("us_contact")}
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
              onClick={() => handleOpenModals("all_contact")}
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
              onClick={() => handleOpenModals("us_contact")}
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
          <ContactList isLoading={isLoading} data={data} />{" "}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Problem2;
