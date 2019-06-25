import React from 'react';
import ArticleToolsPalette from './ArticleToolsPalette.jsx';

class CreateArticle extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Put your thoughts into writing here
                </h1>
                <div className="flex-row">
                    <div className="flex-col-xl-7">
                        <label>This is where your article appears</label>
                    </div>
                    <div className="flex-col-xl-3">
                        <ArticleToolsPalette/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateArticle;