import classes from './Reader.module.css';

import { useState, useEffect } from 'react';

import Text from '../Text/Text';


const Reader = (props) => {
  const wordsCount = props.wordsCount;

  const [hightlightedWord, setHightlightedWord] = useState(0);
  const [reading, setReading] = useState(true);

  const highlightNextWord = (hightlightedWord) => {
    return hightlightedWord === wordsCount ? 0 : hightlightedWord + 1;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reading) return;
      setHightlightedWord(hightlightedWord => highlightNextWord(hightlightedWord));
    }, 500);
    return () => clearInterval(interval);
  }, [reading, hightlightedWord]);

  const startReading = () => {
    setReading(true);
  }

  const stopReading = () => {
    setReading(false);
  }

  const resetReading = () => {
    setHightlightedWord(0);
  }

  return (
    <>
      <button
        className={classes.ReadButton}
        onClick={startReading}
        disabled={reading}
      >Read</button>
      <button
        className={classes.ReadButton}
        onClick={stopReading}
        disabled={!reading}
      >Stop</button>
      <button
        className={classes.ReadButton}
        onClick={resetReading}
      >Reset</button>
      <Text lines={props.text} highlightedIndex={hightlightedWord} />
    </>
  );
}

export default Reader;
