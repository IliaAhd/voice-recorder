import { useAudioRecorder } from "react-audio-voice-recorder";
import useAudios from "./useAudios";
import RecordButton from "../../ui/RecordButton";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import RecordingTimer from "./RecordingTimer";
import RecorderActions from "./RecorderActions";

function VoiceRecorder() {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    recordingTime,
    isPaused,
    mediaRecorder,
  } = useAudioRecorder();
  useAudios(recordingBlob);

  function handleRecord() {
    startRecording();
  }

  function handleStopRecord() {
    stopRecording();
  }

  return (
    <>
      {!isRecording ? (
        <RecordButton onClick={handleRecord}>
          <HiOutlineMicrophone />
        </RecordButton>
      ) : (
        <RecordButton onClick={handleStopRecord}>
          <BiMicrophoneOff />
        </RecordButton>
      )}
      <RecordingTimer time={recordingTime} />
      <RecorderActions
        isPaused={isPaused}
        togglePauseResume={togglePauseResume}
        stopRecording={stopRecording}
        isRecording={isRecording}
      />
    </>
  );
}

export default VoiceRecorder;
