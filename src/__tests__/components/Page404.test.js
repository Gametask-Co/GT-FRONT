import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Page404 from "../../pages/Page404";

describe("Test routes on Page404 component", () => {
  it("Should check bad router", () => {
    const history = createMemoryHistory();
    history.push("/bad/request");

    // componentes que sofrem alterações no state
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
