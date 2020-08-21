/**
 * example
 *
 * import { useInput } from "@kyounghwan/custom-hook";
 */

// const [data, setData] = useInput({
//   title: "",
//   content: ""
// });
// setData({ target: { name: "title", value: "qweqwe" } });
//
// const initName = {
//   initValue: [
//     { value: "titles", name: "title" },
//     { value: "contents", name: "content" }
//   ]
// };
// setData(initName);

import { useState, useCallback } from "react";

const useInput = (initalValue = null) => {
  const [data, setData] = useState(initalValue);
  const handler = useCallback(
    e => {
      if (e.initValue) {
        const newObj = {};
        for (let i = 0; i < e.initValue.length; i++) {
          newObj[e.initValue[i].name] = e.initValue[i].value;
        }
        setData({
          ...data,
          ...newObj
        });
      } else {
        const { value, name } = e.target;

        setData({
          ...data,
          [name]: value
        });
      }
    },
    [data]
  );
  return [data, handler];
};

export default useInput;
