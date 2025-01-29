import { useAudioRecorder } from "react-audio-voice-recorder";
import RecordButton from "../../ui/RecordButton";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import RecordingTimer from "./RecordingTimer";
import RecorderActions from "./RecorderActions";
import useRecorder from "./useRecorder";
import { AudioVisualizer, LiveAudioVisualizer } from "react-audio-visualize";
import audio from "../../assets/audio.mp3";

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
  }

  console.log(audio);

  return (
    <>
      {
        <RecordButton onClick={!isRecording ? handleRecord : handleStopRecord}>
          {!isRecording ? <HiOutlineMicrophone /> : <BiMicrophoneOff />}
        </RecordButton>
      }

      <RecordingTimer time={recordingTime} />

      {isRecording && (
        <LiveAudioVisualizer
          mediaRecorder={mediaRecorder}
          barColor="#AD46FF"
          width={300}
          barWidth={8}
          height={75}
        />
      )}

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
