import express from 'express';
import postsRouter from './routers/posts.js';

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use('/posts' , postsRouter)
app.use(express.json());



app.get('/', (request, response) => {
    response
        .type('html')
        .send('<h1>Express blog Routing</h1>')
})


app.listen(port, (error) => {
    if (error) {
        console.error('Il server ha riscontrato un problema');
    } else {
        console.log(`Server in ascolto porta ${port}`);
    }
});