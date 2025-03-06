export default function Pokemons() {
  const numbers = ["1~100", "101~200", "201~300", "301~400", "401~500"];

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
