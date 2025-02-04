function RecordButton({
  children,
  onClick,
  isRecording = false,
  isPaused = false,
}) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="relative z-10 rounded-full border-8 border-purple-600 bg-purple-500 p-14 text-6xl text-white"
      >
        {children}
      </button>
      {isRecording && !isPaused && (
        <div className="absolute top-0 left-0 z-0 h-full w-full animate-ping rounded-full bg-purple-500"></div>
      )}
    </div>
  );
}

export default RecordButton;
