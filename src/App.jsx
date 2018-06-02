import React from 'react';
import './styles/global-style.scss';

import Demo from './components/Demo.jsx';

class App extends React.Component {
   render() {
      return (
        <div>
            <label>The following is the Demo component</label>
            <Demo/>
        </div>
      );
   }
}
export default App;