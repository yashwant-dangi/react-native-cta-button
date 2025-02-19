# react-native-cta-button

A CTA (call-to-action) button with rotating border.

## Installation

```sh
npm install react-native-cta-button
```

This library depends on react-native-linear-gradient. Please install it as dependency if not installed as peer dependency

https://www.npmjs.com/package/react-native-linear-gradient

## Usage

<p align="center">
<img src="./readme_assets/Screen Recording 2025-02-19 at 7.56.03 PM.gif" width="300">
</p>

```jsx
import { Button as CTAButton } from 'react-native-cta-button';

// ...

<CTAButton title='log in' />

<CTAButton
    title='sign up'
    onPress={() => { Alert.alert("button pressed") }}
    viewStyles={{ borderRadius: 40 }}
/>

<CTAButton
    title='checkout'
    textStyles={{ fontSize: 12, fontWeight: 700, backgroundColor: 'black', color: 'white' }}
    viewStyles={{ padding: 2 }}
    borderGradientColor={[100, 200, 200, 1]}
/>

```

use `textStyles` to change backgroundColor, fontSize and fontWeight etc.

use `viewStyles` for padding and borderRadius etc.

| Prop                | Description                                                      | Required | Default Value     |
| ------------------- | ---------------------------------------------------------------- | -------- | ----------------- |
| title               | button title                                                     | yes      | "button           |
| borderGradientColor | array of length 4 to customize the rgba value of rotating border | no       | [0, 0, 255, 1]    |
| textStyles          | styles for the text                                              | no       | check source code |
| viewStyles          | styles for the outer pressable                                   | no       | check source code |
| rest other props    | rest other props will be passed to pressable                     | no       |                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
