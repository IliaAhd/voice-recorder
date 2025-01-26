import { formatTime } from "../../utils/helpers";

function RecordingTimer({ time }) {
  return <div className="py-4 text-5xl font-bold">{formatTime(time)}</div>;
}

export default RecordingTimer;
