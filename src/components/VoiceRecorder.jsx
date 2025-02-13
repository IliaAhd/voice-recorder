import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import { LiveAudioVisualizer } from "react-audio-visualize";
import RecordingTimer from "./RecordingTimer";
import RecorderActions from "./RecorderActions";
import RecordButton from "./RecordButton";
import { useRecorderContext } from "../contexts/RecorderContext";

function VoiceRecorder() {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    isRecording,
    recordingTime,
    isPaused,
    mediaRecorder,
  } = useRecorderContext();

  function handleRecord() {
    startRecording();
  }

  function handleStopRecord() {
    stopRecording();
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Record Button with Scale Animation */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{ y: isRecording ? 0 : 110 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <RecordButton
          onClick={!isRecording ? handleRecord : handleStopRecord}
          isRecording={isRecording}
          isPaused={isPaused}
        >
          {!isRecording ? <HiOutlineMicrophone /> : <BiMicrophoneOff />}
        </RecordButton>
      </motion.div>

      {/* Recording Timer with Smooth Fade */}
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <RecordingTimer time={recordingTime} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visualizer or Waveform - Animated Switch */}
      <motion.div
        key={isRecording ? "visualizer" : "waveform"}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {isRecording ? (
          <LiveAudioVisualizer
            mediaRecorder={mediaRecorder}
            barColor="#AD46FF"
            width={300}
            barWidth={8}
            height={100}
          />
        ) : (
          // Hide Waveform when recording
          <div style={{ height: 100, width: 300 }} />
        )}
      </motion.div>

      {isRecording && (
        <RecorderActions
          isPaused={isPaused}
          togglePauseResume={togglePauseResume}
          stopRecording={handleStopRecord}
          isRecording={isRecording}
        />
      )}
    </div>
  );
}

export default VoiceRecorder;
