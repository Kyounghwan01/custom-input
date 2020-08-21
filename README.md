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
      <span>{data.content}</span>
      <input name="content" value={data.content} onChange={setData} />
    </>
  );
}
```

### useTitle

```jsx
import React from "react";
import { useTitle } from "@kyounghwan/custom-hook";

export default function App() {
  const updateTitle = useTitle("Loading ...");
  setTimeout(() => updateTitle("login"), 5000);

  return <>...</>;
}
```

### useAxios

```jsx
import React from "react";
import { useAxios } from "@kyounghwan/custom-hook";

export default function App() {
  const { loading, data, err, refatch } = useAxios({ url: "https:~~~" });

  return <button onClick={refatch}>refatch</button>;
}
```

## License

MIT © [kyounghwan](https://github.com/Kyounghwan01)
