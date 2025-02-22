
import moviesRouter from "./movies.js";
import categoriesRouter from "./categories.js";


export default function routes(app){
    app.get('/', (req, res) => {
        res.send('Welcome to my Express API!');
    });
    app.use('/movies', moviesRouter);
    app.use('/categories', categoriesRouter)
}