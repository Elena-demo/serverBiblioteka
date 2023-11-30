export async function selectBookId(id) {
  return await fetch(`http://localhost:3000/api/book/${id}`).then((res) =>
    res.json().then((rez) => console.log(rez))
  );
}
