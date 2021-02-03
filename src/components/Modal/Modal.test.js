import React, { useState } from "react";

// import { renderHook, act } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";

import Modal from "./index";

describe("Test for Modal component", () => {
  it("Should check who the modal is shown on screen", () => {
    // const [show, setShow] = useState(false);
    // const { result } = renderHook(() => useCounter());

    // const handleShowModal = jest.fn(() => {
    //   setShow(!show);
    // });
    const handleShowModal = jest.fn();

    const { getByText } = render(
      <Modal onClose={handleShowModal} show={true}>
        <div>test</div>
      </Modal>
    );

    // fireEvent.click(container.querySelector("button"));
    expect(getByText("test")).toBeTruthy();

    // fireEvent.click(getByText(/close/i));
    // expect(handleShowModal).toBeCalled();
    // expect(handleShowModal).toHaveBeenCalledTimes(1)

    // expect(getByText("test")).toBeTruthy();
  });
});
