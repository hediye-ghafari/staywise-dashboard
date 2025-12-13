import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthActions } from "./useAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { authService, setUser } = useAuthActions();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setUser(data.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
