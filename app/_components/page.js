import Counter from "./Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  console.log(data);
  return (
    <>
      <h1>Cabins Pages</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter user={data} />
    </>
  );
}
