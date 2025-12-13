import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "./useAuth";

export function useLogout() {
  const navigate = useNavigate();
  const { authService, clearUser } = useAuthActions();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      clearUser();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
