import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import useRecorder from "../../hooks/useRecorder";
import { formatDate } from "../../utils/helpers";
import ContextMenu from "../../components/ui/ContextMenu";
import { HiDotsVertical } from "react-icons/hi";

function RecordsList() {
  const [audios] = useRecorder();

  return (
    <div className="scroll h-[400px] overflow-y-scroll pe-1">
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
              <ContextMenu
                audio={audio}
                src={audio.src}
                className="rounded-full p-1 transition-colors active:bg-purple-200"
                icon={<HiDotsVertical className="text-2xl" />}
              />

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
  );
}

export default RecordsList;
