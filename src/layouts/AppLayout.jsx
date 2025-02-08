import { Toaster } from "react-hot-toast";

function AppLayout({ children }) {
  return (
    <div className="flex h-screen items-center justify-center bg-purple-200">
      <div className="container flex h-[600px] w-sm flex-col items-center justify-start gap-4 rounded-3xl bg-white p-6 shadow">
        {children}
        <Toaster />
      </div>
    </div>
  );
}

export default AppLayout;
