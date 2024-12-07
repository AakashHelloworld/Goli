import { Routes, Route, BrowserRouter } from "react-router-dom"
import Editor from "./Pages/EditorPage"
import { ThemeProvider } from "@/components/theme"
import { Login } from "./Pages/LoginPage"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/login" element={<Login />} />
       </Routes>
     </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
