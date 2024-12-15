import React from "react";
import axiosContainer from "../axiosContainer";
import { useGlobalContext } from "@/provider/state-management";

interface Context {
  dispatch?: (value: { type: string; payload: any }) => any;
}

export const useAuth = (): { isAuthenticated: boolean; loading: boolean } => {
  const { dispatch }: Context = useGlobalContext();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const FetchIsMe = async () => {
    try {
      const { data } = await axiosContainer.get(`http://localhost:3000/api/v1/auth/isme`);
      console.log(data?.user, "useAuth");
      if (data?.user && dispatch) {
        dispatch({ type: "USER_LOGIN", payload: data.user });
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
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
