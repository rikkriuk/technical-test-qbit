import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BannerComponent from "../../components/BannerComponent";
import { postEmail } from "../../redux/slice/BannerSlice";

const mockStore = configureStore([]);

jest.mock("../../redux/slice/HeroSlice", () => ({
   default: jest.fn(),
}));
jest.mock("../../redux/slice/DataSlice", () => ({
   default: jest.fn(),
}));
jest.mock("../../redux/slice/CategorySlice", () => ({
   default: jest.fn(),
}));
jest.mock("../../redux/slice/ProductSlice", () => ({
   default: jest.fn(),
}));
jest.mock("../../redux/slice/TestimonialSlice", () => ({
   default: jest.fn(),
}));
jest.mock("../../redux/slice/BannerSlice", () => ({
   default: jest.fn(),
}));

jest.mock("../../redux/slice/BannerSlice", () => ({
   postEmail: jest.fn(),
 }));

describe("BannerComponent", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      banner: {
        succces: false,
        loading: false,
        error: null,
      },
    });
  });

  test("renders the banner component", () => {
    render(
      <Provider store={store}>
        <BannerComponent />
      </Provider>
    );

    expect(screen.getByTestId("banner-image")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Masukkan alamat email Anda")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("submits a valid email", async () => {
    const email = "test@example.com";
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BannerComponent />
      </Provider>
    );

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: email } });
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(store.dispatch).toHaveBeenCalledWith(postEmail(email));
  });

  test("shows error message for invalid email", async () => {
    const invalidEmail = "invalid-email";

    render(
      <Provider store={store}>
        <BannerComponent />
      </Provider>
    );

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: invalidEmail } });
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(await screen.findByTestId("error-message")).toHaveTextContent("Silakan masukkan alamat email yang valid.");
  });

  test("shows success message after successful submission", async () => {
    store = mockStore({
      banner: {
        succces: true,
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <BannerComponent />
      </Provider>
    );

    expect(await screen.findByTestId("success-message")).toHaveTextContent("Email berhasil ditambahkan!");
  });

  test("shows error message from store", async () => {
    const errorMessage = "An error occurred";
    store = mockStore({
      banner: {
        succces: false,
        loading: false,
        error: errorMessage,
      },
    });

    render(
      <Provider store={store}>
        <BannerComponent />
      </Provider>
    );

    expect(await screen.findByTestId("error-message")).toHaveTextContent(errorMessage);
  });
});