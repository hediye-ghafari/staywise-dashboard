import { useAuthActions } from "./useAuthActions";

export function useLogin() {
  const { login } = useAuthActions();

  return {
    login: login.mutate,
    isLoading: login.isLoading,
  };
}
