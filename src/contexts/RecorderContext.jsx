import { createContext, useContext } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";

const RecorderContext = createContext();

export function RecorderProvider({ children }) {
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

  return (
    <RecorderContext.Provider
      value={{
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
        recordingTime,
        isPaused,
        mediaRecorder,
      }}
    >
      {children}
    </RecorderContext.Provider>
  );
}

export function useRecorderContext() {
  const context = useContext(RecorderContext);
  if (!context)
    throw new Error("useRecorderContext must be used within a MyProvider");
  return context;
}
