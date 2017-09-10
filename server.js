const express=require('express');
const app=express();
const index=require('./routes/index');
const users=require('./routes/users');
const login=require('./routes/login');

app.use('/',index);
app.use('/user',users.r);
app.use('/login',login);

app.listen(3000);