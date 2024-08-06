import React from 'react';
import "./Header.scss";

// Instead of writting manually the title we use props and give the value in app.jsx

export default function Header({title}) {
  return (
    <div className='header'><h1>{title}</h1></div>
  )
}
