import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import { render, fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import Page404 from "../../pages/Page404";

import App from "../../components/App";

describe("Test routes on App component", () => {
  it("Should check bad router", () => {
    const history = createMemoryHistory();
    history.push("/bad/request");
    act(() => {
      render(
        <Router history={history}>
          <Page404 />
        </Router>
      );
    });

    expect(screen.getByText(/404!/i)).toBeInTheDocument();
  });
});
