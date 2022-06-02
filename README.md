<p align="center">
  <img src="https://user-images.githubusercontent.com/88069082/171333471-cd8c613b-380e-49d4-964e-ea6b1eef34e2.png" />
</p>


---

`WordInput` is a react functional component for input hinted word.

 It take value as the hinted word and callback functions onComplete/onEnter which return the word entered by user.

# Working Demo

<p align="center">
  <img src="https://user-images.githubusercontent.com/88069082/171338041-af8672d3-eca5-4961-bbc6-1da38a0f1eeb.gif" />
</p>


# Installation

This module is installed via npm:

```
npm i --prefix ./src react-word-input
```

Note: This command will install this npm package in src folder of react-app.

# Usage

```javascript
import './App.css';
import WordInput from 'react-word-input';

function App() {

  const print = (word) => {
    console.log(word);
  }

  return (
    <div className="App">
      <WordInput className='word' value={'W_R_ __P_T'} onComplete={print} onEnter={print} autoFocus spellCheck={false}  />
    </div>
  );
}

export default App;

```

# API

| Name           | Type           | Required | Default | Description                             |
| -------------- | -------------- | -------- | ------- | --------------------------------------- |
| onComplete     | Function       | false    | -       | Returns word when word is filled
| onEnter        | Function       | false    | -       | Returns word when user press enter
| value          | String         | true     | -       | The value of the hinted word  
| disabled       | Boolean        | false    | false   | Disables all the inputs 
| autoFocus      | Boolean        | false    | false   | Auto focuses input on initial page load  
| className      | String         | false    | -       | Class for input element




# Author

<a href="https://github.com/Satyam-2001"> Satyam Lohiya </a>

