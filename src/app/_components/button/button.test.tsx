import { describe } from "node:test";
import { Button } from "./button"
import { render, screen } from "@testing-library/react";

describe('Button', () => {
    test('render a default button', () => {
        const { getByText } = render(<Button>Click Here</Button>);
        expect(getByText('Click Here')).toBeInTheDocument()
    });

    test('disables the button when isDisable prop is true', () => {
        render(<Button isDisabled={true}>Click here</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('applies the correct css class for different button variant', () => {
        const { rerender} = render(<Button variant="primary">Click Here</Button>);
        expect(screen.getByRole("button")).toHaveClass("btn-primary");

        rerender(<Button variant="info">Click Here</Button>);
        expect(screen.getByRole("button")).toHaveClass("btn-info");
    })
})