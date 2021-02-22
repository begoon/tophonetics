import classes from './Unit.module.css';

import Spacer from '../Spacer/Spacer';

const unit = (props) => {
    const isSpace = props.text === ' ' && props.index > 0;
    const unitClass = props.isHighlighted ? classes.Highlighed : null;
    return (
        <div className={classes.Unit} key={props.index}>
            {isSpace ?
                <Spacer />
                :
                <div key={props.index} className={unitClass}>
                    {props.text}
                    <br />
                    {props.transcription}
                </div>}
        </div>

    );
}

export default unit;
