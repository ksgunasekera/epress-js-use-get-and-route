const express=require('express');
const app=express();
const index=require('./routes/index');
const users=require('./routes/users');

app.use('/',index);
app.use('/user',users.r);

app.listen(3000);