// export async function getBooks() {
//   const res = await fetch("http://localhost:3000/api/book");
//   const rez = await res.json();
//   // console.log(rez);
//   return rez;
// }

// export function getBooks() {
//   return fetch("http://localhost:3000/api/book").then((response) =>
//     response.json()
//   );
// }

export const getBooks = fetch("http://localhost:3000/api/book").then(
  (response) => response.json()
);
