import { Routes, Route, BrowserRouter } from "react-router-dom"
import Editor from "./Pages/Editor"
import { ThemeProvider } from "@/components/theme"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Container from "./Pages/Dashboard"
import PrivateRoutes from "./lib/ProtectedRoute"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/editor" element={<Container />} />
          </Route>
       </Routes>
     </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
