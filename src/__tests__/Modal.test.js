import React from "react";

import { render } from "@testing-library/react";

import Modal from "../components/Modal";

describe("Test for Modal component", () => {
  it("Should check who the modal is shown on screen", () => {
    // const handleShowModal = jest.fn(() => {
    //   setShow(!show);
    // });
    const handleShowModal = jest.fn();

    const { getByText } = render(
      <Modal onClose={handleShowModal} show={true}>
        <div>test</div>
      </Modal>
    );

    expect(getByText("test")).toBeTruthy();
  });
});
