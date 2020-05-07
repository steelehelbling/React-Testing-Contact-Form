import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});



test(' submit working', () => {

async () =>{  const { getByLabelText, getByTestId } = render(<ContactForm />);   
      
   const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/Email/i);
    const messageInput = getByLabelText(/Message/i);
  
    fireEvent.change(firstNameInput, {
      target: { name: 'firstName', value: 'ste' },
    });
    fireEvent.change(lastNameInput, {
      target: { name: 'lastName', value: 'helbling' },
    });
    fireEvent.change(emailInput, {
      target: { name: 'email', value: 'steelehelbling@gmail.com' },
    });
    fireEvent.change(messageInput, {
      target: { name: 'message', value: 'hi this is a messige for testing and this text is placeholder' },
    });
  
    expect(firstNameInput.value).toBe('ste')
    expect(lastNameInput.value).toBe('helbling')
    expect(emailInput.value).toBe('steelehelbling@gmail.com')
    expect(messageInput.value).toBe('hi this is a messige for testing and this text is placeholder')
  
    fireEvent.click(getByTestId("submit"))}

  });