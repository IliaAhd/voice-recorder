import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import toast from "react-hot-toast";
import setupIndexedDB, { useIndexedDBStore } from "use-indexeddb";
import idbConfig from "../data/idbConfig";

const RecorderContext = createContext();
setupIndexedDB(idbConfig);

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

  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getAll, add, deleteByID } = useIndexedDBStore("audios");

  const fetchAudios = useCallback(
    async (isLoading = true) => {
      setIsLoading(isLoading);
      try {
        const data = await getAll();
        setAudios(data);
      } catch {
        toast.error("Error saving audio");
      } finally {
        setIsLoading(false);
      }
    },
    [getAll],
  );

  useEffect(() => {
    fetchAudios();
  }, [fetchAudios]);

  useEffect(() => {
    if (!recordingBlob) return;

    const reader = new FileReader();
    reader.readAsDataURL(recordingBlob);
    reader.onloadend = async () => {
      const base64Audio = reader.result;
      try {
        await add({ src: base64Audio, createdAt: new Date() });
        toast.success("Audio saved");
        fetchAudios();
      } catch {
        toast.error("Error saving audio");
      }
    };
  }, [add, recordingBlob, fetchAudios]);

  const handleDeleteAudio = useCallback(
    async (id) => {
      if (!id) return;
      try {
        await deleteByID(id);
        toast.success("Audio deleted");
        fetchAudios(false);
      } catch (error) {
        console.error("Delete error:", error);
        toast.error("Error deleting audio");
      }
    },
    [deleteByID, fetchAudios],
  );

  return (
    <RecorderContext.Provider
      value={{
        audios,
        isLoading,
        handleDeleteAudio,
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
    throw new Error(
      "useRecorderContext must be used within a RecorderProvider",
    );
  return context;
}
