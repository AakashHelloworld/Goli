import { Routes, Route, BrowserRouter } from "react-router-dom"
import Editor from "./pages/Editor"
import { ThemeProvider } from "@/components/theme"
import Login from "./pages/Login"
import Container from "./pages/Dashboard"
import PrivateRoutes from "./lib/ProtectedRoute"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/editor/:id" element={<Editor />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/editor" element={<Container />} />
          </Route>
       </Routes>
     </BrowserRouter>
     <Toaster richColors />
     </ThemeProvider>
    </>
  )
}

export default App
