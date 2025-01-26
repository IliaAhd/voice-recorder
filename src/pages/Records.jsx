import { HiOutlineMicrophone } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useAudios from "../features/record/useAudios";
import Header from "../ui/Header";

function Records() {
  const navigate = useNavigate();
  const audios = useAudios();

  return (
    <>
      <Header>Recordings</Header>

      <div className="overflow-y-scroll">
        {audios.map((audio, i) => (
          <audio src={audio} key={i} controls></audio>
        ))}
      </div>

      <button
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-[20px] text-white shadow"
        onClick={() => navigate("/record")}
      >
        <HiOutlineMicrophone /> Record
      </button>
    </>
  );
}

export default Records;
