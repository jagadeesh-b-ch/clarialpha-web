import React from 'react';

class Demo extends React.Component {
    render() {
        return(
        <div>
         <h1>
            Hello World!!!
         </h1>
         <h2>
            Hello World!!!
         </h2>
         <h3>
            Hello World!!!
         </h3>
         <h4>
            Hello World!!!
         </h4>
         <h5>
            Hello World!!!
         </h5>
         <h6>
            Hello World!!!
         </h6>
         <p>
             A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </p>
        <label>This is a label</label>
        <button class="button primary">Test</button>
        <button class="button default">Test</button>
        <input type="text" class="text-field"/>
        <br/>
        <textarea class="text-area" cols="50" rows="5"></textarea>
        <label class="check-box-container">
            Test
            <input type="checkbox"/>
            <span class="check-box"></span>
        </label>
        <label class="radio-box-container">
            Test
            <input type="radio" name="test"/>
            <span class="radio-box"></span>
        </label>
        <label class="radio-box-container">
            Test
            <input type="radio" name="test"/>
            <span class="radio-box"></span>
        </label>
        <label class="radio-box-container">
            Test
            <input type="radio" name="test"/>
            <span class="radio-box"></span>
        </label>
        </div>
        );
    }
}

export default Demo;