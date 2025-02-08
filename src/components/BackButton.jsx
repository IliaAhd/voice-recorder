import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useRecorderContext } from "../contexts/RecorderContext";

function BackButton() {
  const { isRecording } = useRecorderContext();
  const navigate = useNavigate();

  return (
    <button
      disabled={isRecording}
      className="absolute top-0 left-0"
      onClick={() => navigate("/")}
    >
      <HiArrowLeft />
    </button>
  );
}

export default BackButton;
