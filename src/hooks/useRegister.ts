import { useState } from "react";
import { Profile } from "./../model/Profile";
import { createProfile } from "../services/auth-service";
export const useRegister = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");
  const signup = (profile: Profile) => {
    setLoading(true);
    createProfile(profile)
      .then((response) => {
        if (response && response.status === 201) {
          setToast("Profile is successfully created");
        }
      })
      .catch((errors) => setError(errors))
      .finally(() => setLoading(false));
  };
  return { error, loading, toast, signup };
};
