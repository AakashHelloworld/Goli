import { Routes, Route, BrowserRouter } from "react-router-dom"
import Editor from "./Pages/Editor"
import { ThemeProvider } from "@/components/theme"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/editor" element={<Editor />} />
       </Routes>
     </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
