import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Messages from './pages/message/Messages';
import Message from "./pages/message/Message";
function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/message/:id" element={<Message />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
