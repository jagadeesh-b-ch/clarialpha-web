import React from 'react';

class ArticleToolsPalette extends React.Component {
    render() {
        return (
            <div>
                <div className="flex-row">
                    <label className="flex-col-xl-12 flex-col-m-12 radio-box-container">
                        Paragraph
                        <input type="radio" name="article-component-type"/>
                        <span className="radio-box"></span>
                    </label>
                </div>
                <div className="flex-row">
                    <label className="flex-col-xl-12 flex-col-m-12 radio-box-container">
                        Image
                        <input type="radio" name="article-component-type"/>
                        <span className="radio-box"></span>
                    </label>
                </div>
                <div className="flex-row">
                    <label className="flex-col-xl-12 flex-col-m-12 radio-box-container">
                        Source code
                        <input type="radio" name="article-component-type"/>
                        <span className="radio-box"></span>
                    </label>
                </div>
                <div className="flex-row">
                    <button className="flex-col-xl-4 flex-col-m-12 button primary">Add</button>
                    <button className="flex-col-xl-4 flex-col-m-12 button default">Preview</button>
                    <button className="flex-col-xl-4 flex-col-m-12 button primary">Save article</button>
                </div>
            </div>
        );
    }
}

export default ArticleToolsPalette;