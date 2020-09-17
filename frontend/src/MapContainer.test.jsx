import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MapContainer from "./MapContainer";
import App from "./App";

import axiosMock from "axios";

jest.mock("axios");

test("on clicking reset it renders 0.0", async () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const { getByText, getByPlaceholderText, getByTestId } = render(<MapContainer />);

  const resetButton = getByTestId("reset");
  expect(resetButton).toBeInTheDocument();

  fireEvent.click(resetButton);
  const responseTextNode = await waitForElement(() =>
    getByTestId("distance")
  );

  expect(getByTestId("distance")).toHaveTextContent(
    "0.0"
  );
})

// test("on calling markers it renders the number of characters", async () => {
//   const testPayload = [{
//     lat: '-34.58819281394148',
//     lng: '-58.40732661300582',
//     time: '2020-09-17T09:58:35.417Z'
//   },
//   {
//     lat: '-34.64357209868975',
//     lng: '-58.54087916427535',
//     time: '2020-09-17T09:58:36.249Z'
//   }];

//   const url = `/markers`;
//   axiosMock.get.mockResolvedValueOnce({
//     data: { distance: "13.69 km" },
//   });
//   const { getByText, getByPlaceholderText, getByTestId } = render(<MapContainer />);

//   const responseTextNode = await waitForElement(() =>
//     getByTestId("distance")
//   );

//   expect(axiosMock.get).toHaveBeenCalledTimes(1);
//   expect(axiosMock.get).toHaveBeenCalledWith(url);
//   expect(getByTestId("distance")).toHaveTextContent(
//     "13.69 km"
//   );
// });
