import { HiDotsVertical, HiOutlineMicrophone } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Header from "../ui/Header";
import useRecorder from "../features/record/useRecorder";
import { formatDate } from "../utils/helpers";

function Records() {
  const navigate = useNavigate();
  const audios = useRecorder();

  return (
    <>
      <Header>Recordings</Header>

      <div className="flex h-full w-full flex-col justify-between">
        <div className="h-[400px] overflow-y-scroll scroll">
          {audios.map((audio, i) => (
            <AudioPlayer
              className="relative"
              src={audio.src}
              key={i}
              layout="horizontal-reverse"
              customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
              showJumpControls={false}
              customAdditionalControls={[
                <div key={audio.createdAt} className="p-0">
                  <button onClick={() => console.log(audio.createdAt)}>
                    <HiDotsVertical className="text-2xl" />
                  </button>
                  <span className="absolute top-[65px] left-[55px] text-[12px] font-bold text-gray-700">
                    {formatDate(audio.createdAt)}
                  </span>
                </div>,
                RHAP_UI.DURATION,
              ]}
              customVolumeControls={[]}
              controls
            />
          ))}
        </div>

        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-[20px] text-white shadow"
          onClick={() => navigate("/record")}
        >
          <HiOutlineMicrophone /> Record
        </button>
      </div>
    </>
  );
}

export default Records;
