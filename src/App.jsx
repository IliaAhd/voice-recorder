import { BrowserRouter, Route, Routes } from "react-router-dom";
import Records from "./pages/records";
import Recorder from "./pages/Recorder";
import AppLayout from "./AppLayout";

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
