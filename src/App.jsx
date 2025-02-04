import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Records from "./pages/Records/Records";
import Recorder from "./pages/Recorder/Recorder";

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
