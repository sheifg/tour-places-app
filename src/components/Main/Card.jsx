import React from "react";

// To avoid writting item.x, it is possible to destructure item from props
export default function Card({item}) {
  console.log(item);
  const {title, desc, image} = item;
  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
      </div>
      {/* It is necessary to wrap the image in a div in order to make overflow hidden */}
      <div className="wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
}


// Using destructuring the keys of the item object (<Card {...item} key={index} />(), for that reason it is used again the {}
// export default function Card({ title, image, desc }) {
//   return (
//     <div className="card">
//       <div className="title">
//         <h1>{title}</h1>
//       </div>
//       <div className="wrapper">
//         <img src={image} alt={title} />
//       </div>
//       <div className="card-over">
//         <p>{desc}</p>
//       </div>
//     </div>
//   );
// }
