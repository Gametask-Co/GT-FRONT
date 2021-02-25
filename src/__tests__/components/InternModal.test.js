import React from "react";

import { render, fireEvent } from "@testing-library/react";

import { InternModal } from "../../components/Modais";
import { ButtomBar, ButtomCTA } from "../../components/Buttons/Index";

describe("Test for Modal component", () => {
  it("Should check who the modal is shown on screen", () => {
    const handleShowModal = jest.fn();

    const { getByText } = render(
      <InternModal onClose={handleShowModal} show>
        <div>test</div>

        <ButtomBar>
          <ButtomCTA secondary onClick={handleShowModal}>
            Cancelar
          </ButtomCTA>
          <ButtomCTA>Concluir</ButtomCTA>
        </ButtomBar>
      </InternModal>
    );

    expect(getByText("test")).toBeTruthy();

    fireEvent.click(getByText(/cancelar/i));
    expect(handleShowModal).toHaveBeenCalledTimes(1);
  });

  it("Should check who the modal not shown on screen", () => {
    const handleShowModal = jest.fn();

    const { queryByText } = render(
      <InternModal onClose={handleShowModal} show={false}>
        <div>test</div>

        <ButtomBar>
          <ButtomCTA secondary onClick={handleShowModal}>
            Cancelar
          </ButtomCTA>
          <ButtomCTA>Concluir</ButtomCTA>
        </ButtomBar>
      </InternModal>
    );

    expect(queryByText("test")).toBeNull();
  });
});
