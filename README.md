<p align="center">
  <img src="https://user-images.githubusercontent.com/88069082/171333471-cd8c613b-380e-49d4-964e-ea6b1eef34e2.png" />
</p>


---

`WordInput` is a react functional component for input hinted word.

 It take value as the hinted word and callback functions onComplete/onEnter which return the word entered by user.

# Working Demo
<a href="https://Satyam-2001.github.io/React-Word-Input">
<div align="center">
  <p align="center">LIVE DEMO</p>
  <img src="https://user-images.githubusercontent.com/88069082/171338041-af8672d3-eca5-4961-bbc6-1da38a0f1eeb.gif" />
</div>
</a>


# Installation

This module is installed via npm:

```
npm install react-word-input
```

# Usage

```javascript
import './App.css';
import { WordInput } from 'react-word-input';

function App() {

  const print = (word) => {
    console.log(word);
  }

  return (
    <div className="App">
      <WordInput className='word' value={'W_R_ __P_T'} onChange={print} autoFocus />
    </div>
  );
}

export default App;

```

# API

| Name           | Type           | Required | Default | Description                                 |
| -------------- | -------------- | -------- | ------- | ------------------------------------------- |
| onChange       | Function       | false    | -       | Returns word everytime when word is changed
| onComplete     | Function       | false    | -       | Returns word when word is filled
| onEnter        | Function       | false    | -       | Returns word when user press enter
| value          | String         | true     | -       | The value of the hinted word  
| className      | String         | false    | -       | Class for input element
| disabled       | Boolean        | false    | false   | Disables the input
| autoFocus      | Boolean        | false    | false   | Auto focuses input on initial page load  
| spellCheck     | Boolean        | false    | false   | Check is word spells correct or not


# Author

<a href="https://github.com/Satyam-2001"> Satyam Lohiya </a>