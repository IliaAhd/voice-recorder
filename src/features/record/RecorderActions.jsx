import { HiPause, HiPlay } from "react-icons/hi";

function RecorderActions({
  togglePauseResume,
  stopRecording,
  isPaused,
  isRecording,
}) {
  const toggleBtnClasses =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-purple-500";

  function handlePause() {
    if (!isRecording) return;
    togglePauseResume();
  }

  return (
    <div className="relative flex w-full justify-between rounded-full bg-purple-100 px-1 font-bold">
      <button className="px-2 py-1">Discard</button>

      <button onClick={handlePause}>
        {!isPaused ? (
          <HiPause className={toggleBtnClasses} />
        ) : (
          <HiPlay className={toggleBtnClasses} />
        )}
      </button>

      <button className="px-2 py-1" onClick={() => stopRecording()}>
        Save
      </button>
    </div>
  );
}

export default RecorderActions;
