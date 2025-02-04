import { useAudioRecorder } from "react-audio-voice-recorder";
import useRecorder from "../../hooks/useRecorder";
import toast from "react-hot-toast";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import { LiveAudioVisualizer } from "react-audio-visualize";
import RecordingTimer from "./RecordingTimer";
import RecorderActions from "./RecorderActions";
import RecordButton from "../../components/ui/RecordButton";
import Waveform from "../../components/ui/Waveform";

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
  useRecorder(recordingBlob);

  function handleRecord() {
    startRecording();
  }

  function handleStopRecord() {
    stopRecording();
    toast.success("Audio saved");
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
