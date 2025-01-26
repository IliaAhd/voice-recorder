import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Recorder from "./pages/Recorder";
import Records from "./pages/Records";

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Records />} />
          <Route path="/record" element={<Recorder />} />
          <Route path="/*" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
