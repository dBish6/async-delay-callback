# async-delay-callback 

A small utility for asynchronous delays within your code! It also includes an optional callback that you can utilize.

## Installation
This npm package seamlessly integrates with front-end environments and frameworks, including Vanilla, Vue, React, and more.

```
$ npm i async-delay-callback
```

## Examples
These are a few common use cases. The package is flexible and not restricted to these examples. <br />

### React
```
import { useState, useEffect } from "react";
import { delay } from "async-delay-callback";

const delayExample = (children) => {
  const [loading, setLoading] = useState({ percentage: 0, complete: false });

  useEffect(() => {
    (async () => {
      await delay(2000); // Delay without a callback.
      console.log("loading", loading)
      
      await delay(500, () => {
        setLoading({ percentage: 50, complete: false });

        // ...Something being loaded in.
      });
      console.log("loading", loading)

      await delay(1000, () => {
        setLoading({ percentage: 100, complete: true });

        // ...Something being loaded in.
      });
      console.log("loading", loading)
    })();
  }, []);

  // Renders main content after resources/features or whatever you're loading is loaded.
  return loading.complete && <main>{children}</main>;
};

export default delayExample;
```

### Other
```
const { delay } = require("async-delay-callback");

delay(500, () => code being delayed.);
```

## Contributing
Contributions are welcome! Although I'd like to keep this package as small as possible sense it is meant to be a small utility.

### To Get Started
- Fork this repository.
- Create a new branch.
- install the dependencies with `npm install`.
- Do a `npm run test` to see if you're all set.
- For the dev environment, `npm run dev` and there you go!

```
$ npm install
$ npm run test
$ npm run dev
```

## License
This project is licensed under the [MIT](https://github.com/dBish6/detect-if-mobile/blob/master/LICENSE) License.
