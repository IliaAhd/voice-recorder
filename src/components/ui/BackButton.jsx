import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="absolute top-0 left-0" onClick={() => navigate("/")}>
      <HiArrowLeft />
    </button>
  );
}

export default BackButton;
