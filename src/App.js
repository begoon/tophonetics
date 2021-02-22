import classes from './App.module.css';

import sourceText from './dataSource.js';

import Reader from './components/Reader/Reader';

const convertDataToLines = (data) => {
  const chunk = 20;
  let lines = [];
  let wordIndex = 0;
  for (let i = 0; i < data.length; i += chunk) {
    const line = data.slice(i, i + chunk);
    for (let j = 0; j < line.length; j++) {
      const [text,] = line[j];
      const index = text.trim().length ? wordIndex++ : -1;
      line[j].push(index);
    }
    lines.push(line);
  }
  return [lines, wordIndex];
}

function App() {
  const [lines, wordsCount] = convertDataToLines(sourceText);
  return (
    <div className={classes.App}>
      <Reader text={lines} wordsCount={wordsCount} />
    </div>
  );
}

export default App;
