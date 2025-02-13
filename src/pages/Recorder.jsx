import BackButton from "../components/BackButton";
import Header from "../components/Header";
import VoiceRecorder from "../components/VoiceRecorder";

function Recorder() {
  return (
    <>
      <Header relative={true}>
        Voice Recording
        <BackButton />
      </Header>
      <VoiceRecorder />
    </>
  );
}

export default Recorder;
