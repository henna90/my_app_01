import React from 'react';
// import { render } from '@testing-library/react';
import Button from './Button';
import { create } from "react-test-renderer";


describe("Button component", () => {
    test("it shows the expected text when clicked", () => {
      const component = create(<Button text="Click me"/>);
      const instance = component.root;
      const button = instance.findByType("button");
      button.props.onClick();
      const p = instance.findByType("p")
      expect(p.props.children).toBe("The button was clicked");
    });
});  
  