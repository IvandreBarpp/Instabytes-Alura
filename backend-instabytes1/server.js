import express from "express";
import routes from "./src/routes/postsRoutes.js";

// const posts = [
//   {
//     id: 1,
//     description: "Foto teste",
//     image: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 2,
//     description: "Gato fofo dormindo",
//     image: "https://placecats.com/sleepy/400/200"
//   },
//   {
//     id: 3,
//     description: "Gatinho brincando com um novelo de lã",
//     image: "https://placecats.com/yarn/500/250"
//   },
//   {
//     id: 4,
//     description: "Gata curiosa olhando pela janela",
//     image: "https://placecats.com/window/600/300"
//   },
//   {
//     id: 5,
//     description: "Grupo de gatinhos brincando",
//     image: "https://placecats.com/group/700/350"
//   },
//   {
//     id: 6,
//     description: "Gatinho com um chapéu engraçado",
//     image: "https://placecats.com/hat/800/400"
//   }
// ];

const app = express();
// Cria uma instância do Express, que será o núcleo do nosso servidor web.
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// Inicia o servidor na porta 3000. A função de callback é executada quando o servidor está pronto para receber requisições.

// function searchPostById(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   })
// }

// app.get("/posts/:id", (req, res) => {
//   const index = searchPostById(req.params.id);
//   res.status(200).send(posts[index] || "Post not found");
// });
