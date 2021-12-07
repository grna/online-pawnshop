import BuyingForm from "../components/BuyingForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BuyingForm", () => {
  const renderBuyingForm = (customProps) => {
    const defaultProps = {
      product: {
        _id: "1",
        title: "Test product",
        quantity: 2,
        price: 222,
      },
      addToCart: () => {
        return;
      },
    };

    const props = { ...defaultProps, ...customProps };

    console.log(props);

    render(<BuyingForm {...props} />);

    const priceInput = screen.getByTestId("offeredPrice");
    const quantityInput = screen.getByTestId("quantity");
    const button = screen.getByText("To Cart");

    return { priceInput, quantityInput, button };
  };

  it("Should render buying form", () => {
    renderBuyingForm({});
    expect(screen.getByTestId("offeredPrice").value).toBe("222");
    expect(screen.getByTestId("quantity").value).toBe("1");
    expect(screen.getByText("To Cart")).toBeDefined();
  });

  it("Tests To Cart button click", async () => {
    const handleSubmit = jest.fn();
    const { button, quantityInput, priceInput } = renderBuyingForm({
      addToCart: handleSubmit,
    });

    userEvent.clear(priceInput);
    userEvent.type(priceInput, "333");
    userEvent.selectOptions(quantityInput, "2");
    userEvent.click(button);

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        _id: "1",
        price: 333,
        quantity: 2,
        title: "Test product",
      })
    );
  });

  it("Tests offeredPrice field validation", async () => {
    const { priceInput, button } = renderBuyingForm({});
    let error = {};

    userEvent.clear(priceInput);
    userEvent.click(button);

    error = await screen.findByTestId("errors-offeredPrice");
    expect(error.innerHTML).toBe("Required!");

    userEvent.type(priceInput, "aaa");
    error = await screen.findByTestId("errors-offeredPrice");
    expect(error.innerHTML).toBe("Must be a number!");

    userEvent.clear(priceInput);
    userEvent.type(priceInput, "0");
    error = await screen.findByTestId("errors-offeredPrice");
    expect(error.innerHTML).toBe("At least 1 euro!");
  });
});
