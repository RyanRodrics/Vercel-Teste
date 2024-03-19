import express from 'express';
import {engine} from 'express-handlebars';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '../../' + 'public'));

// Handlebars
app.engine('handlebars', engine({ 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, "views", "layouts")
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

app.get("/", (req, res) =>{
    res.render("index");
});

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});