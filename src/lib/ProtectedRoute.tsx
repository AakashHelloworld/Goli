import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/RequestServer/useAuth";
import { Loader2 } from "lucide-react";

const PrivateRoutes = () => {
  let location = useLocation()
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Show a loader while checking authentication
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }
  // Render protected routes if authenticated
  return <Outlet />;
};

export default PrivateRoutes;
