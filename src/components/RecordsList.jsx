import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { formatDate } from "../utils/helpers";
import ContextMenu from "./ContextMenu";
import { HiDotsVertical } from "react-icons/hi";
import Empty from "./Empty";
import { useRecorderContext } from "../contexts/RecorderContext";
import Spinner from "./Spinner";
import { motion } from "motion/react";

function RecordsList() {
  const { audios, isLoading } = useRecorderContext();

  if (isLoading) return <Spinner />;

  return (
    <div className="scroll h-[400px] overflow-y-scroll pe-1">
      {audios.length === 0 ? (
        <Empty />
      ) : (
        audios.map((audio) => (
          <motion.div
          key={audio.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          layout
          >
            <AudioPlayer
              volume={1}
              className="relative"
              src={audio.src}
              key={audio.id}
              layout="horizontal-reverse"
              customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
              showJumpControls={false}
              customAdditionalControls={[
                <div key={audio.id} className="p-0">
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
          </motion.div>
        ))
      )}
    </div>
  );
}

export default RecordsList;
