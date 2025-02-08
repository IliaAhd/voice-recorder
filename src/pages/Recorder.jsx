import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { RecorderProvider } from "../contexts/RecorderContext";
import VoiceRecorder from "../components/VoiceRecorder";

function Recorder() {
  return (
    <RecorderProvider>
      <Header relative={true}>
        Voice Recording
        <BackButton />
      </Header>
      <VoiceRecorder />
    </RecorderProvider>
  );
}

export default Recorder;
