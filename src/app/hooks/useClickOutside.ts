import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // ✅ If ref is not set or the click is inside ref, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // ✅ Fix: Allow clicks inside the dropdown rendered via createPortal
      if (event.target.closest(".portal-dropdown")) {
        return;
      }

      handler(event); // Call the handler to close the dropdown
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
