import React from "react";
import { render , screen, act} from "@testing-library/react";
import App from "./App";

test("Verify Texts", ()=>{
  render(<App />)
  screen.getByText('EXPERIMENTALITY TEST')
})

describe("Services Mocks", ()=>{
  // mock FETCH
  let originalFetch;
  beforeEach(() => {
      originalFetch = global.fetch;
      global.fetch = jest.fn(() => Promise.resolve({
          json: () => Promise.resolve([])
      }));
  });
  afterEach(() => {
      global.fetch = originalFetch;
  });

  it("API Service", async ()=>{
    await act(async()=>render(<App />))
    expect(screen.getByText(/\d/i)).toBeInTheDocument()
  })

})

