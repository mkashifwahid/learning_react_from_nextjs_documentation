import { useState } from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function HomePage() {
  const cities = ['Karachi', 'Islamabad', 'Lahore', 'Hyderabad'];
  const [likes, setLikes] = useState();
  function btnClickHandler() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="Shows list of cities" />
      <ul>
        {cities.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <button onclick={btnClickHandler}>Likes ({likes})</button>
    </div>
  );
}
