import posts from '../data/posts.js';

function index (req, res) {
}

function show(req, res) {
  // Casi da testare:
  // GET http://localhost:3000/posts/ciao → 400 (id non numerico)
  // GET http://localhost:3000/posts/-1   → 400 (id negativo)
  // GET http://localhost:3000/posts/0    → 400 (id zero)
  // GET http://localhost:3000/posts/9999 → 404 (id valido ma post inesistente)
  // GET http://localhost:3000/posts/1    → 200 (post trovato)

  const { id } = req.params;
  const realId = Number(id.trim());

  if (isNaN(realId)) {
    res.status(400).json({
      error: 'Parametro "id" non numerico',
      results: null,
    });
    return;
  }

  if (realId <= 0) {
    res.status(400).json({
      error: 'Parametro "id" negativo o zero',
      results: null,
    });
    return;
  }

  const postFound = posts.find((post) => post.id === realId);

  if (!postFound) {
    res.status(404).json({
      error: `Post con id ${realId} non trovato`,
      results: null,
    });
    return;
  }

  res.status(200).json({
    error: null,
    results: postFound,
  });
}


function create (req, res) {

}


function update (req, res) {

}
function partialUpdate (req, res) {

}

function destroy(req, res) {
  const id = req.params.id;
  res.json({ message: `Cancellazione del post ${id}` });
}

export {
    index,
    show,
    create,
    update,
    partialUpdate,
    destroy
}