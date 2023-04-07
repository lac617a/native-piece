<div align="center">
  <a href="https://www.native-piece.com">
    <img src='https://i.ibb.co/yg9ptQy/logo-native-piece.png' width='150px' height='150px' alt="native-piece" />
  </a>
</div>

[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license-badge]](LICENSE.md)

# native-piece

React primitive UI components. Use the best bits of ES6 and CSS to style your apps without stress

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
* [Styled-system][]

[MIT License](LICENSE.md)

[emotion]: https://emotion.sh
[styled-system]: https://styled-system.com
[downloads-badge]: https://flat.badgen.net/npm/dw/native-piece
[version-badge]: https://flat.badgen.net/npm/v/native-piece
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/native-piece