import React from "react";

import { act } from "react-dom/test-utils";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";

import App from "../../components/App";
import Subject from "../../pages/Subject";

describe("Testing integration a Subject component", () => {
  afterEach(cleanup);

  it("make sure I can submit on modal and show data on screen", async () => {
    // const [subjects, setSubjects] = React.useState({});
    // const subjects = mobx.observable([{ id: 1, name: "Algoritmos" }]);
    // const subjects = React.useState([{ id: 1, name: "Algoritmos" }]);

    let subjects = 0;

    const { getByPlaceholderText, getByTestId, getByText, debug } = render(
      <App>
        <Subject subjects={[{ id: 1, name: "Algoritmos" }]} />
      </App>
    );

    const openModalButton = getByTestId("open-modal-button");
    fireEvent.click(openModalButton);

    // const cardSubjectList = getByTestId("card-subject");
    const nameInput = getByPlaceholderText("Nome da Disciplina");
    const descriptionInput = getByPlaceholderText("Escreva aqui...");
    const submitButton = getByTestId("submit-create-subject-button");
    // fireEvent.click(submitButton);

    // await waitFor(() => expect(submitButton).toHaveBeenCalledTimes(1));

    fireEvent.change(nameInput, { target: { value: "Algoritmos" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Disciplina do 2periodo" },
    });
    fireEvent.click(submitButton);

    act(() => {
      subjects = 10;
    });

    // await waitFor(() => getByText("Algoritmos"));
    // await waitFor(() => expect(getByText("Algoritmos")).toBeTruthy());

    debug();
  });
});
