import { HiOutlineMicrophone } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/ui/Header";
import RecordsList from './RecordsList'

function Records() {
  const navigate = useNavigate();

  return (
    <>
      <Header>Recordings</Header>
      <div className="flex h-full w-full flex-col justify-between">
        <RecordsList />
        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-[20px] text-white shadow"
          onClick={() => navigate("/record")}
        >
          <HiOutlineMicrophone /> Record
        </button>
      </div>
    </>
  );
}

export default Records;
