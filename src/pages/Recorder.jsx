import BackButton from "../ui/BackButton";
import Header from "../ui/Header";
import VoiceRecorder from "../features/record/VoiceRecorder";

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
