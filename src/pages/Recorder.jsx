import VoiceRecorder from "../features/record/VoiceRecorder";
import BackButton from "../ui/BackButton";
import Header from "../ui/Header";

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
