function RecordButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-8 border-purple-600 bg-purple-500 p-12 text-6xl text-white"
    >
      {children}
    </button>
  );
}

export default RecordButton;
