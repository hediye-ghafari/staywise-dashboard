import { useAuthActions } from "./useAuthActions";

export function useSignup() {
  const { signup } = useAuthActions();

  return {
    signup: signup.mutate,
    isLoading: signup.isLoading,
  };
}
