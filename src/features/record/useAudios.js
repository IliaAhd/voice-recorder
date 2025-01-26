import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function useAudios(blob) {
  const [audios, setAudios] = useLocalStorage("audios", []);

  useEffect(() => {
    if (!blob) return;

    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onloadend = () => {
      const base64Audio = reader.result;
      setAudios((audios) => [...audios, base64Audio]);
    };
  }, [blob, setAudios]);

  return audios;
}

export default useAudios;
