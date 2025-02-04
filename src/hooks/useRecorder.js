import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

function useRecorder(blob) {
  const [audios, setAudios] = useLocalStorage("audios", []);

  useEffect(() => {
    if (!blob) return;

    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onloadend = () => {
      const base64Audio = reader.result;
      setAudios((audios) => [
        ...audios,
        { src: base64Audio, createdAt: new Date() },
      ]);
    };
  }, [blob, setAudios]);

  return [audios, setAudios];
}

export default useRecorder;
