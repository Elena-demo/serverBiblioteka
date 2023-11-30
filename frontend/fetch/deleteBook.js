export function deleteBook(id) {
  fetch(`http://localhost:3000/api/book/${id}`, {
    method: "DELETE",
  });
}
