import React from "react";
import axios from "axios";

import { renderHook, act } from "@testing-library/react-hooks";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  update,
  screen,
} from "@testing-library/react";

import App from "../../components/App";
import Subject from "../../pages/Subject";

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

    jest.fn().mockResolvedValue({
      data: [
        { id: 1, name: "Algoritmos", description: "Disciplina do 2periodo" },
      ],
    });

    const mockFetch = jest.fn(() => Promise.resolve());

    const { getByPlaceholderText, getByTestId, getByText, debug } = render(
      <App>
        <Subject
          subjects={[
            {
              id: 1,
              name: "Algoritmos",
              description: "Disciplina do 2periodo",
            },
          ]}
        />
      </App>
    );

    act(async () => {
      const openModalButton = getByTestId("open-modal-button");
      fireEvent.click(openModalButton);
    });

    const cardSubjectList = getByTestId("card-subject");
    const nameInput = getByPlaceholderText("Nome da Disciplina");
    const descriptionInput = getByPlaceholderText("Escreva aqui...");
    const submitButton = getByTestId("submit-create-subject-button");

    act(async () => {
      fireEvent.change(nameInput, { target: { value: "Algoritmos" } });
      fireEvent.change(descriptionInput, {
        target: { value: "Disciplina do 2periodo" },
      });
      fireEvent.click(submitButton);
      fireEvent.click(getByText(/concluir/i));
    });

    waitFor(async () => expect(getByText("Algoritmos")).toBeTruthy());
    // debug();
  });
});
