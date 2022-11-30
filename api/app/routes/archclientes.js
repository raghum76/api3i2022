var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '3307',
  password : '123456',
  database : 'prueba'
});
 
connection.connect();
let router=require('express').Router();
let datos=require('../../bd/arbol');
router.get('/',(req,res)=>{
    //res.json(datos.listar());
    connection.query('select * from borrar',(err,results)=>{
        if (err)
           res.json(err);
        else
            res.json(results);
    })
})
router.get('/:id',(req,res)=>{
    //res.json(datos.buscar(req.params.id));
    res.json({msg:"solo 1",id:req.params.id})
})

router.post('/',(req,res)=>{
    //let nuevo=new Clientes(.....)
    //datos.agregar(nuevo)
    console.log(req.body);
    connection.query(`insert into borrar (id,nombre) values (${req.body.id}, '${req.body.nombre}')`,
   (err,results)=>{
        if (err){
            res.json(err);
        }else{
            res.json(results);
        }

    })
})

router.delete('/:id',(req,res)=>{
    res.json({msg:"borrando"})
})

module.exports=router;