<p align="center">
  <a href="https://fiberui.com">
    <img src="./logo.svg" alt="Fiber UI logo" width="72" height="72">
  </a>
</p>

<h3 align="center">Fiber UI - React Component Library</h3>
<p align="center">React Component Library built with [Styled Components][https://styled-components.com] for faster and easier user interface development.</p>
<br>
<p align="center">
  <a href="https://fiberui.com"><strong>Explore Fiber UI docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/fiberui/css/issues/new?template=bug.md">Report bug</a>
  ·
  <a href="https://github.com/fiberui/css/issues/new?template=feature.md&labels=feature">Request feature</a>
</p>

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license-badge]](LICENSE.md)

[badge]: https://flat.badgen.net/travis/rebassjs/rebass/master
[travis]: https://travis-ci.org/rebassjs/rebass
[coverage-badge]: https://flat.badgen.net/codecov/c/github/rebassjs/rebass
[coverage]: https://codecov.io/github/rebassjs/rebass
[downloads-badge]: https://flat.badgen.net/npm/dw/rebass
[version-badge]: https://flat.badgen.net/npm/v/rebass
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/fiberui-react

```sh
npm i restyle
```

## Getting Started

```jsx
import React from 'react';
import { Box, Heading, Button } from 'restyle';

export default (props) => (
	<Box>
		<Heading>Hello</Heading>
		<Button>Rebass</Button>
	</Box>
);
```

## Features

-   Start your design system without boiling the ocean
-   Build consistent UI with design constraints and user-defined scales
-   Best-in-class developer ergonomics with [Styled System][] props
-   First-class support for theming &
    fully compatible with [Theme UI][]
-   Quick, mobile-first responsive styles with array-based syntax
-   Flexbox layout with the Box and Flex components
-   Flexibility built in for high design & development velocity
-   Minimal footprint at about 4KB

## Principles

Restyle is intended to be:

-   **Minimal**
-   **Useful**
-   **Unopinionated**
-   **Flexible**
-   **Consistent**
-   **Extensible**
-   **Themeable**

> Do one thing, and do it well
>
> – [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well)

See [Patterns for Style Composition in React](http://jxnblk.com/writing/patterns-for-style-composition-in-react/)
for more on some of the thought behind Restyle.

## Documentation

-   [Docs](https://rebassjs.org)
-   [Getting Started](https://rebassjs.org/getting-started)
-   [Props](https://rebassjs.org/props)
-   [Extending](https://rebassjs.org/extending)
-   [Theming](https://rebassjs.org/theming)
-   [Reflexbox](https://rebassjs.org/reflexbox)
-   [Text](https://rebassjs.org/Text)
-   [Heading](https://rebassjs.org/Heading)
-   [Button](https://rebassjs.org/Button)
-   [Link](https://rebassjs.org/Link)
-   [Image](https://rebassjs.org/Image)
-   [Card](https://rebassjs.org/Card)

## CodeSandbox

Try it out:
https://codesandbox.io/s/github/rebassjs/rebass/tree/master/examples/sandbox

### Related

-   [Styled System][]
-   [Theme UI][]
-   [Emotion][]
-   [Styled Components][]

[styled system]: https://styled-system.com
[styled components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[theme ui]: https://theme-ui.com

### Upgrading from v3

See the [Migration Guide](https://rebassjs.org/migrating/).

#### Previous Versions

-   [v3.2.2](https://github.com/rebassjs/rebass/tree/v3.2.2) – [v3 Docs](https://rebass-v3.now.sh)
-   [v2.3.2](https://github.com/rebassjs/rebass/tree/v2) – [Docs for Rebass v2](https://rebass-v2.now.sh)
-   [v1.0.7](https://github.com/rebassjs/rebass/tree/v1.0.7)

---

[Contributing](CONTRIBUTING.md) | [MIT License](LICENSE.md)
