export async function addBook(newBook) {
  const response = await fetch("http://localhost:3000/insert_book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newBook),
  });

  let result = await response.json();
  console.log(result);
}
