# @kyounghwan/custom-hook

custom hook

## Install

```bash
npm install @kyounghwan/custom-hook
```

```bash
yarn add @kyounghwan/custom-hook
```

## Usage

### useInput

```jsx
import React from "react";
import { useInput } from "@kyounghwan/custom-hook";

export default function App() {
  const [data, setData] = useInput({
    title: "",
    content: ""
  });
  return (
    <>
      <span>{data.title}</span>
      <input name="title" value={data.title} onChange={setData} />
    </>
  );
}
```

## License

MIT © [kyounghwan](https://github.com/Kyounghwan01)
