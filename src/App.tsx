import { Routes, Route, BrowserRouter } from "react-router-dom"
import Editor from "./Pages/Editor"
import { ThemeProvider } from "@/components/theme"
import Login from "./Pages/Login"
import Container from "./Pages/Dashboard"
import PrivateRoutes from "./lib/ProtectedRoute"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <BrowserRouter>
       <Routes>
       <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/editor/:id" element={<Editor />} />
          </Route>
          <Route element={<PrivateRoutes />}>
          <Route path="/login" element={<Login />} />
          </Route>
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
