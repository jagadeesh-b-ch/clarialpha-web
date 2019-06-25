import React from 'react';
import './styles/global-style.scss';
import CreateArticle from './create-article/CreateArticle.jsx';

class App extends React.Component {
   render() {
      return (
        <div>
            <CreateArticle/>
        </div>
      );
   }
}
export default App;