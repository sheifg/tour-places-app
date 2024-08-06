import React from 'react';
import "./Main.scss";
import Card from "./Card";
// It is necessary to destructuring it when it is exported with no default (export default cont data = [{}])
// If it is being added default, it can be imported normally
// Named import, it should always be imported with the same name from the module, but can be renamed with "data as newName" 
import {data} from "../../helpers/data"

// Spread Operator (...): Used to spread the properties of an object across another object or as props in a component
// {...item} is spreading the properties of the item object as props to the Card component


export default function Main() {
    return (
      <div className="card-container">
        {/* Looping over the array of objects so item is an object
          and we spread the object to id, title, image and hand it to the card  */}
        {data.map((item, index) => (
          // key prop is used when component are render inside a loop. The key should be unique to each card in order to help React in rendering the cards correctly and not repeat any data. It can use the index of the element in the array or a unique id provided by the API. The value doesnt matter

          // Using here the spread operator, item is just an object, for that reason it is not necessary to use the {} inside the parameters as props. Because it is just an object and includes the {}
          // <Card {...item} key={index} />  
          <Card item={item} key={index} /> // ---> this means that it is necessary to destructure the props in the card component
          // The index is the position of the object in the array: 0, 1, 2....
        ))}
      </div>
    );
  }

  // <Card prop1={value1} prop2....propN />





