import { useEffect } from "react";
import { useRef, useState } from "react";
import { HiDownload, HiTrash } from "react-icons/hi";
import useRecorder from "../../hooks/useRecorder";

function ContextMenu({ className, icon, src, audio }) {
  const [showMenu, setShowMenu] = useState(false);
  const [audios, setAudios] = useRecorder();
  const menuRef = useRef();

  const liStyles =
    "flex items-center justify-start gap-2 py-3 ps-3 pe-8 hover:bg-gray-100";
  const iconStyles = "!text-black";

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef, showMenu]);

  function handleClick() {
    setShowMenu((menu) => !menu);
  }

  function handleDownload() {
    const audioUrl = src;
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = "audio.webm";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleDelete() {
    const filteredAudios = audios.filter((item) => item.src !== audio.src);
    setAudios(filteredAudios);
  }

  return (
    <button
      ref={menuRef}
      onClick={handleClick}
      className={`relative ${className}`}
    >
      {icon}
      {showMenu && (
        <ul className="absolute z-10 space-y-2 rounded-md bg-white py-2 text-sm font-semibold text-black shadow">
          <li className={liStyles} onClick={handleDownload}>
            <HiDownload className={iconStyles} />
            Download
          </li>
          <li className={liStyles} onClick={handleDelete}>
            <HiTrash className={iconStyles} />
            Delete
          </li>
        </ul>
      )}
    </button>
  );
}

export default ContextMenu;
