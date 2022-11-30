let router=require('express').Router();

let varclientes=require('./archclientes');
router.use('/clientes',varclientes)
/*
let productos=require('productos');
router.use('/products',productos);
*/


module.exports=router;