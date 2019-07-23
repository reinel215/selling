const pify= require('pify'); 
const pg=require('pg');
const config=require('../configuracionBD/db');
const db=new pg.Client(require('../configuracionBD/db'));


const consulta=(text_query,valores)=>{
    db.connect();//conectamos la base de datos

    let promesa= new Promise((resolve,reject)=>{
        db.query(text_query,valores,(err,res) =>{
            if(err) reject("error en el query: "+text_query);
            resolve(res.rows[0]);
        });
    });
    return promesa;
}


const producto_insertText="INSERT INTO producto(nombre,descripcion,precio,cantidad,imagen,id_usuario) VALUES($1,$2,$3,$4,$5,$6) RETURNING ID_PRODUCTO";
const categorizado_insertText="INSERT INTO categorizado(id_producto,id_categoria) VALUES ($1,$2)";




















module.exports={
    suggestions:function(req,res,next){
        consulta('SELECT id_categoria AS id,nombre AS name FROM categoria')
        .then((data)=>{

            res.json({
                suggestions:data
            });
        })
        .catch(error => console.error(error))
    },


    ingresarProdcuto:function(req,res,next){
        consulta(producto_insertText,[req.body.producto_nombre,req.body.producto_descripcion,req.body.producto_precio,req.body.producto_cantidad,req.body.producto_imagen,1])
        .then((data)=>{
            console.log(data);
            let promesas=[];


            //recorremos cada tag para ingresarlo en la entidad
            req.body.tags.forEach(tag => {
               promesas.push(
                   consulta(categorizado_insertText,[data,tag.id])
                   .then((data)=>{console.log("todo como corresponde")})
                   .catch()
                );
            });


            res.json({mensaje:1});
        })
        .catch(error => console.error(error))

       
    }

}