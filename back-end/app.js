const express = require("express");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const { logger } = require("./middleware/loggerMiddleware");

const app = express();
const PORT = 5273;

app.use(express.json());
app.use(logger);

//#region Define Routes
app.use('/post', postsRouter)
app.use('/user', usersRouter)
app.get('/', (req, res) => {
    res.status(200).send(`
        <p>
            Server is Up!
        </p>
    `);
});
//#endregion

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
