const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.send('Home Page');

});

module.exports=router;