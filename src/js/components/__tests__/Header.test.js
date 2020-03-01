import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Header from "../Header";
import faker from "faker";

const createProps = () => ({
  title: faker.lorem.word(2),
  email: faker.internet.email(),
  location: faker.address.streetName(),
  phone: faker.phone.phoneNumber()
});

describe("<Header />", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("can render props", () => {
    const props = createProps();
    render(<Header {...props} />, container);

    expect(container.querySelector(".title").textContent).toBe(props.title);
  });
});
