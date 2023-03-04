import { RefObject, useState } from "react";

import useEventListener from "./useEventListener";

/**
 * React UI sensor hook that determine if the mouse element is in
 * the hover element using Javascript Typescript instead CSS.
 * This way you can separate the logic from the UI.
 * 
 * ```tsx
 * const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <div ref={hoverRef}>
      {`The current div is ${isHover ? `hovered` : `unhovered`}`}
    </div>
  )
 * ```
 * @param elementRef 
 * @returns {Boolean} boolean
 */
function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
): boolean {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);

  return value;
}

export default useHover;
