export async function updateBook() {
  await fetch("http://localhost:3000/api/book", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      name: "Book1",
      id: 5,
    }),
  })
    .then((res) => res.json())
    .then((rez) => console.log(rez));
}
