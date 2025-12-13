import { useAuthActions } from "./useAuthActions";

export function useLogout() {
  const { logout } = useAuthActions();

  return {
    logout: logout.mutate,
    isLoading: logout.isLoading,
  };
}
