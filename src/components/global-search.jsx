import React, { memo, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Offcanvas } from "react-bootstrap";

const GlobalSearch = () => {
  const [show, setShow] = useState(false);

  const offCanvasShowControler2 = () => setShow(!show);
  return (
    <>
      <Button variant="success" onClick={offCanvasShowControler2}>
        Search
      </Button>
      <Modal
        show={show}
        onHide={offCanvasShowControler2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdropClassName="bg-black"
        centered
      >
        <Modal.Body>
          <Form.Group controlId="global-search">
            <Form.Control placeholder="Search..." />
          </Form.Group>
          <div className="w-auto p-2 mt-2 rounded-3 border border-1">
            <p role="button">111111</p>
            <p role="button">111111</p>
            <p role="button">111111</p>
            <p role="button">111111</p>
            <p role="button">111111</p>
            <p role="button">111111</p>
            <p role="button">111111</p>
            <p role="button">111111</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default memo(GlobalSearch);
