import React from "react";

import { render } from "@testing-library/react";

import Modal from "../src/components/Modal";

describe("Test for Modal component", () => {
  it("Should check who the modal is shown on screen", () => {
    const handleShow = jest.fn();

    const { getByText } = render(
      <Modal show={handleShow}>
        <div>test</div>
      </Modal>
    );

    expect(getByText("test")).toBeTruthy();
    // fireEvent.click(getByText(/close/i))
  });
});
