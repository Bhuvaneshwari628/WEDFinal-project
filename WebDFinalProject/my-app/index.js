const express = require("express");
const dotEnv = require('dotenv');
const app = express()
const PORT = process.env.PORT|| 4000;
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes')
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path')


dotEnv.config();
app.use(cors())
require('dotenv').config({ path: 'ENV_FILENAME' });

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected successfully"))
.catch((error)=>console.log(error))


app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, ()=>{
       console.log('sever started and running at ${PORT}');
}
)

app.use('/', (req,res)=>{
    res.send("<h1> Welcome to our website");
})