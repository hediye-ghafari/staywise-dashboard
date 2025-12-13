import { useAuthActions } from "./useAuthActions";

export function useUpdateUser() {
  const { updateUser } = useAuthActions();

  return {
    updateUser: updateUser.mutate,
    isUpdating: updateUser.isLoading,
  };
}
