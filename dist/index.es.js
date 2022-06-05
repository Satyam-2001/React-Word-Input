import React, { useState, useRef, useCallback, useEffect } from 'react';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

const WordInput = props => {
  const [word, setWord] = useState(props.value);
  const inputRef = useRef();
  const dummyProp = { ...props
  };
  delete dummyProp.onEnter;
  delete dummyProp.onComplete;
  const setCursor = useCallback(() => {
    const wordLength = word.indexOf('_');
    const inp = inputRef.current;

    if (inp.createTextRange) {
      const part = inp.createTextRange();
      part.move("character", wordLength);
      part.select();
    } else if (inp.setSelectionRange) {
      inp.setSelectionRange(wordLength, wordLength);
    }
  }, [word]);

  const onKeyDownHandler = event => {
    event.preventDefault();

    if (event.key === 'Backspace') {
      const length = props.value.length;

      for (let i = length - 1; i >= 0; i--) {
        if (props.value[i] === '_' && word[i] !== '_') {
          const newWord = word.substr(0, i) + props.value.substr(i);
          setWord(newWord);
          return;
        }
      }
    }

    if (event.key === 'Enter') {
      props.onEnter?.(word);
      return;
    }

    if (event.key === ' ' || event.key === '_' || event.key.length > 1) return;
    const index = word.indexOf('_');
    if (index === -1) return;
    const newWord = word.substr(0, index) + event.key + word.substr(index + 1);
    setWord(newWord);

    if (newWord.indexOf('_') === -1) {
      props.onComplete?.(newWord);
    }
  };

  const onChangeHandler = event => {
    event.preventDefault();
  };

  useEffect(() => {
    setCursor();
    props.onChange?.(word);
  }, [word, setCursor, props]);
  useEffect(() => {
    setWord(props.value);
  }, [props.value]);
  return /*#__PURE__*/React.createElement("input", _extends({
    spellCheck: false
  }, dummyProp, {
    ref: inputRef,
    type: "text",
    onChange: onChangeHandler,
    onKeyDown: onKeyDownHandler,
    onClick: setCursor,
    autoComplete: "off",
    value: word
  }));
};

export { WordInput };
