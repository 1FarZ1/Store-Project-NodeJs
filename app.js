require('dotenv').config();
const express = require('express');
const {  connectDb } = require('./db/mongoDb');


const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app.use("/api/v1/");





app.use((req,res)=>{
    res.status(404).send("Page not found");
}
);  






let main = async ()=>{  
try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
    }
);
} catch (error) {
    console.log(error);    
}
}

main();


