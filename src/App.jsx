import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Records from "./pages/Records";
import Recorder from "./pages/Recorder";
import { RecorderProvider } from "./contexts/RecorderContext";

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <RecorderProvider>
          <Routes>
            <Route path="/" element={<Records />} />
            <Route path="/record" element={<Recorder />} />
            <Route path="/*" element={<Records />} />
          </Routes>
        </RecorderProvider>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
