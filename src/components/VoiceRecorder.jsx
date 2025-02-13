import { HiOutlineMicrophone } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import { LiveAudioVisualizer } from "react-audio-visualize";
import RecordingTimer from "./RecordingTimer";
import RecorderActions from "./RecorderActions";
import RecordButton from "./RecordButton";
import Waveform from "./Waveform";
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
    <>
      {
        <RecordButton
          onClick={!isRecording ? handleRecord : handleStopRecord}
          isRecording={isRecording}
          isPaused={isPaused}
        >
          {!isRecording ? <HiOutlineMicrophone /> : <BiMicrophoneOff />}
        </RecordButton>
      }

      <RecordingTimer time={recordingTime} />

      {isRecording ? (
        <LiveAudioVisualizer
          mediaRecorder={mediaRecorder}
          barColor="#AD46FF"
          width={300}
          barWidth={8}
          height={100}
        />
      ) : (
        <Waveform />
      )}

      <RecorderActions
        isPaused={isPaused}
        togglePauseResume={togglePauseResume}
        stopRecording={handleStopRecord}
        isRecording={isRecording}
      />
    </>
  );
}

export default VoiceRecorder;
