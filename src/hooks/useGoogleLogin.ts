import { useGlobalContext } from "@/provider/state-management";
import axios from "axios";
import { CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
interface Context {
    state?:{
      userdata:{
        username: string,
        email: string,
        profilePic: string,
        role: string
      },
    }, 
    dispatch?: (value: { type: string , payload: any }) => any }


export const useGoogleLogin = () => {
  const { dispatch }: Context = useGlobalContext();
  const navigate = useNavigate()

  const handleGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const token = credentialResponse.credential;
      // Send the Google JWT to the backend
      const response = await axios.post(
        `auth/google`,
        {
          idToken: token,
        },
        {
          withCredentials: true, // Enable cookie transfer
        }
      );

      if (dispatch) {
        dispatch({ type: 'USER_LOGIN', payload: response.data.user });
        navigate('/editor')
      }
    } catch (error) {
    }
  };

  return { handleGoogleLoginSuccess };
};
