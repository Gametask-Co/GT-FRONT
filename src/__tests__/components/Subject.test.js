import React from "react";

import { act } from "@testing-library/react-hooks";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
} from "@testing-library/react";

import App from "../../components/App";
import Subject from "../../pages/Subject";
import CardSubjectList from "../../components/CardSubjectList";

beforeAll(() => {
  jest.fn().mockResolvedValue({
    data: [
      { id: 1, name: "Algoritmos", description: "Disciplina do 2periodo" },
    ],
  });
});

afterEach(cleanup);

describe("Testing integration a Subject component", () => {
  it("make sure I can submit on modal and show data on screen", async () => {
    jest.mock("axios");

    act(() => {
      render(
        <App>
          <Subject>
            <CardSubjectList
              name="Algoritmos"
              description="Disciplina do 2periodo"
            />
          </Subject>
        </App>
      );
    });

    act(() => {
      const openModalButton = screen.getByTestId("open-modal-button");
      fireEvent.click(openModalButton);
    });

    const cardSubjectList = screen.getByTestId("card-subject");
    const nameInput = screen.getByPlaceholderText("Nome da Disciplina");
    const descriptionInput = screen.getByPlaceholderText("Escreva aqui...");
    const submitButton = screen.getByTestId("submit-create-subject-button");

    act(() => {
      fireEvent.change(nameInput, { target: { value: "Algoritmos" } });
      fireEvent.change(descriptionInput, {
        target: { value: "Disciplina do 2periodo" },
      });
      fireEvent.click(submitButton);
      fireEvent.click(screen.getByText(/concluir/i));
    });

    waitFor(() => expect(screen.getByText("Algoritmos")).toBeTruthy());
  });
});
