import React from "react";
import axios from "axios";

import { renderHook, act } from "@testing-library/react-hooks";
// import { act } from "react-dom/test-utils";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
// import nock from 'nock'; // to mock API

import App from "../../components/App";
import Subject from "../../pages/Subject";

// jest.mock("axios");

afterEach(cleanup);

describe("Testing integration a Subject component", () => {
  it("make sure I can submit on modal and show data on screen", async () => {
    // const [subjects, setSubjects] = React.useState({});
    // const subjects = mobx.observable([{ id: 1, name: "Algoritmos" }]);
    // const subjects = React.useState([{ id: 1, name: "Algoritmos" }]);

    // axios.get.mockResolvedValue({
    // jest.fn().mockResolvedValue({
    //   data: [{ id: 1, name: "Algoritmos" }],
    // });

    const { result } = renderHook(() => {
      const [subjects, actions] = Subject();
      return { subjects, ...actions };
    });
    console.log(result.current.subjects);

    const { getByPlaceholderText, getByTestId, getByText, debug } = render(
      <App>
        <Subject
        // useState={{ subjects: () => [{ id: 1, name: "Algoritmos" }] }}
        // useState={{
        //   handleCreateSubject: () => [{ id: 1, name: "Algoritmos" }],
        // }}
        />
      </App>
    );

    const openModalButton = getByTestId("open-modal-button");
    act(() => {
      fireEvent.click(openModalButton);
    });

    const cardSubjectList = getByTestId("card-subject");
    const nameInput = getByPlaceholderText("Nome da Disciplina");
    const descriptionInput = getByPlaceholderText("Escreva aqui...");
    const submitButton = getByTestId("submit-create-subject-button");

    act(() => {
      fireEvent.change(nameInput, { target: { value: "Algoritmos" } });
      fireEvent.change(descriptionInput, {
        target: { value: "Disciplina do 2periodo" },
      });
      fireEvent.click(submitButton);
      fireEvent.click(getByText(/concluir/i));
    });
    // console.log("cardSubjectList", cardSubjectList);

    // const listNode = await waitFor(() => getByTestId("card-subject"));
    // console.log("listNode", listNode.children);

    // expect(submitButton).toBeCalled(1);
    // expect(submitButton).toHaveBeenCalledTimes(1);

    // check upload state
    // const setSubjects = jest.fn();
    // const wrapper = mount(<App onClick={changeSize} />);
    // const handleClick = jest.spyOn(React, "useState");
    // handleClick.mockImplementation((subjects) => [subjects, setSubjects]);
    // expect(setSubjects).toBeTruthy();

    // await waitFor(() => getByText("Algoritmos"));
    // await waitFor(() => expect(getByText("Algoritmos")).toBeTruthy());

    // expect(getByText(/Algoritmos/i).textContent).toBe("Algoritmos");
    // debug();
  });
});
