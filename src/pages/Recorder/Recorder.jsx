import BackButton from "../../components/ui/BackButton";
import Header from "../../components/ui/Header";
import VoiceRecorder from "./VoiceRecorder";

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
