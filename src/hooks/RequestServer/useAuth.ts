import React from "react";
import axiosContainer from "@/lib/axiosContainer";
import { useAuthGlobal } from "@/provider/state-management";

interface Context {
  dispatch?: (value: { type: string; payload: any }) => any;
}

export const useAuth = (): { isAuthenticated: boolean; loading: boolean } => {
  const { dispatch }: Context = useAuthGlobal();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const FetchIsMe = async () => {
    try {
      const { data } = await axiosContainer.get(`auth/isme`);
      if (data?.user && dispatch) {
        dispatch({ type: "USER_LOGIN", payload: data.user });
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    FetchIsMe();
  }, []);

  return { isAuthenticated, loading };
};
