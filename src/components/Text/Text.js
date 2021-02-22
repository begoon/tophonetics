import classes from './Text.module.css';

import Spacer from '../Spacer/Spacer';
import Unit from '../Unit/Unit';

const text = (props) => {
  return props.lines.map((line, lineIndex) => {
    return (
      <div className={classes.Line} key={lineIndex}>
        {line.map(([text, transcription, wordIndex], index) => {
          const isDelimiter = text === '.' || text === ',';
          const delimiter = isDelimiter ? <Spacer /> : null;
          const isHighlighted = +props.highlightedIndex === wordIndex;
          return (
            <>
              <Unit
                index={index}
                text={text}
                transcription={transcription}
                isHighlighted={isHighlighted}
                key={index}
              />
              {delimiter}
            </>
          )
        })}
      </div>
    )
  })
}

export default text;
