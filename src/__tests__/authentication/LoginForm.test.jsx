import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import LoginForm from "../../features/authentication/LoginForm";
import { renderWithProviders } from "../../test-utils";
import { vi } from "vitest";

// Mock react-router-dom
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    MemoryRouter: actual.MemoryRouter,
  };
});

const mockLogin = vi.fn();

vi.mock("../../features/authentication/useLogin", () => ({
  useLogin: () => ({
    login: mockLogin,
    isLoading: false,
  }),
}));

describe("LoginForm", () => {
  beforeEach(() => {
    mockLogin.mockReset();
  });

  test("renders login form inputs and button", () => {
    renderWithProviders(<LoginForm />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  test("allows user to type email and password", () => {
    renderWithProviders(<LoginForm />);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("test@test.com");
    expect(passwordInput.value).toBe("123456");
  });

  test("does not submit when inputs are empty", () => {
    renderWithProviders(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(mockLogin).not.toHaveBeenCalled();
  });

  test("calls login with email and password on submit", () => {
    renderWithProviders(<LoginForm />);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(mockLogin).toHaveBeenCalledWith(
      {
        email: "test@test.com",
        password: "123456",
      },
      expect.any(Object)
    );
  });
});
