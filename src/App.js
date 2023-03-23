import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
function App() {
  const files = {
    '/App.js' : `import './index.css';
export default function App () {
  return (
    <div>
    </div>
  )
}`,
    '/index.css': `h1: {
  color: red
}`
  }
  return (
    <Sandpack theme={nightOwl} template="react" files={files}/>
  );
}

export default App;
