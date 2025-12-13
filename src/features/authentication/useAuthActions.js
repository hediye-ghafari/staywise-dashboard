import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import authService from "../../services/apiAuth";

export function useAuthActions() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  const logout = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  const signup = useMutation({
    mutationFn: authService.signup,
    onSuccess: () => {
      toast.success("Account created! Please verify it from your email.");
    },
  });

  const updateUser = useMutation({
    mutationFn: authService.updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
  });

  return {
    login,
    logout,
    signup,
    updateUser,
  };
}
