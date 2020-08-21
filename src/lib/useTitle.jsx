import { useState, useEffect } from "react";

/**
 * example
 *
 * import { useTitle } from 'hooks/useTitle';
 * const updateTitle = useTitle('Loading ...');
 * setTimeout(() => updateTitle('login'), 5000);
 */

const useTitle = (initalValue = null) => {
  const [title, setTitle] = useState(initalValue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;
