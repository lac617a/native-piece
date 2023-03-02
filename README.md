
# native-piece

```sh
npm i native-piece
```

or usage yarn

```sh
yarn add native-piece
```

## Getting Started

For general use we don't have to use or pass a `provider` or something similar, what we have here is a pure `CSS` component, something similar to `styled-components` but more dynamic and easier to use.

```jsx
import React from 'react'
import { Box, Stack } from 'native-piece'

export default props =>
  <Box>
    <Stack color="red">
      {props.children}
    </Stack>
  </Box>
```

## Features

* Start your design system without boiling the ocean
* Build consistent UI with design constraints and user-defined scales
* Best-in-class developer ergonomics with pure css props
* Flexbox layout with the Box and Flex components
* Flexibility built in for high design & development velocity
* Minimal footprint at about 4KB

## Principles

native-piece is intended to be:

* Minimal
* Useful
* Unopinionated
* Flexible
* Consistent
* Extensible

## Related

* [Emotion][]

[emotion]: https://emotion.sh
[MIT License](LICENSE.md)
