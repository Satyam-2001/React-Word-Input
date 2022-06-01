import React, { useState, useEffect, useRef } from 'react'

const WordInput = (props) => {
    const [word, setWord] = useState(props.value);
    const inputRef = useRef();

    const dummyProp = {...props}
    delete dummyProp.onEnter
    delete dummyProp.onComplete

    const setCursor = () => {
        const wordLength = word.indexOf('_');
        const inp = inputRef.current;
        
        if (inp.createTextRange) {
            const part = inp.createTextRange();
            part.move("character", wordLength);
            part.select();
        } else if (inp.setSelectionRange) {
            inp.setSelectionRange(wordLength, wordLength);
        }
    }

    const onKeyDownHandler = (event) => {

        event.preventDefault()
        
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
            props?.onEnter?.(word);
            return;
        }

        if (event.key === ' ' || event.key === '_' || event.key.length > 1) return;

        const index = word.indexOf('_');
        if (index === -1) return;
        const newWord = word.substr(0, index) + event.key + word.substr(index + 1);
        setWord(newWord);

        if (newWord.indexOf('_') === -1) {
            props?.onComplete?.(newWord);
        }
    }

    const onChangeHandler = (event) => {
        event.preventDefault()
    }

    useEffect(setCursor, [word])

    useEffect(() => {
        setWord(props.value);
    }, [props.value])

    return (
        <input {...dummyProp} ref={inputRef} type="text" onChange={onChangeHandler} onKeyDown={onKeyDownHandler} onClick={setCursor} autoComplete="off" value={word} />
    )
}

export default WordInput