import { GoogleLogin } from "@react-oauth/google";
import SideUI from "./component/SideUI";
import { useGoogleLogin } from "@/hooks/RequestServer/useGoogleLogin";
export default function AuthPage() {

  const { handleGoogleLoginSuccess } = useGoogleLogin();


  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Section */}
      <SideUI/>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-900">
        <div className="w-full max-w-sm">
          <h2 className="text-xl text-center font-semibold mb-4">Create an account</h2>
          <div className="my-6 w-full flex justify-center text-center text-sm text-gray-400">CONTINUE WITH</div>
          <div className=" w-full flex justify-center text-center">
            <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={() =>{
            }}
              />
          </div>

          <div className="mt-6 text-sm text-gray-400 text-center">
            By clicking continue, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
