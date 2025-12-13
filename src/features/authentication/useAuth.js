import { useQueryClient } from "@tanstack/react-query";
import authService from "../../services/apiAuth";

export function useAuthActions() {
  const queryClient = useQueryClient();

  function setUser(user) {
    queryClient.setQueryData(["user"], user);
  }

  function clearUser() {
    queryClient.removeQueries({ queryKey: ["user"] });
  }

  return {
    authService,
    setUser,
    clearUser,
  };
}
