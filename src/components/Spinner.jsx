function Spinner() {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
}

export default Spinner;
