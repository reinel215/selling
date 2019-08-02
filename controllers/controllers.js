const { Pool } = require('pg')
const pool = new Pool(require('../configuracionBD/db'))

const consulta=(text_query,valores,devolucion)=>{

    let promesa= new Promise((resolve,reject)=>{
        pool.query(text_query,valores,(err,res) =>{
            if(err) reject("error en el query: "+text_query);
            if(devolucion==1)
            resolve(res.rows);
            else
            resolve(res.rows[0]);
        });
    });
    return promesa;
}


const producto_insertText="INSERT INTO producto(nombre,descripcion,precio,cantidad,imagen,id_usuario) VALUES($1,$2,$3,$4,$5,$6) RETURNING ID_PRODUCTO";
const categorizado_insertText="INSERT INTO categorizado(id_producto,id_categoria) VALUES ($1,$2)";
const categoria_insertText="INSERT INTO categoria(nombre) SELECT $1 WHERE NOT EXISTS (SELECT A.id_categoria from categoria AS A WHERE A.nombre=$2)"; 
const categoria_selectText="SELECT nombre,id_categoria from categoria AS A WHERE A.nombre=$1";
const producto_muestraText=`
SELECT id_producto,nombre,imagen,precio,cantidad FROM 
(
SELECT id_producto,nombre,imagen,precio,cantidad,ROW_NUMBER () OVER (ORDER BY ID_PRODUCTO DESC) AS orden FROM PRODUCTO
) A 
WHERE orden > $1 LIMIT 40;`;
const producto_cuantosText="SELECT COUNT(*) FROM PRODUCTO;";

















module.exports={
    suggestions:function(req,res,next){
        consulta('SELECT id_categoria AS id,nombre AS name FROM categoria',[],1)
        .then((data)=>{

            res.json({
                suggestions:data
            });
        })
        .catch(error => console.error(error))
    },


    ingresarProdcuto:function(req,res,next){
        var id_producto;





        consulta(producto_insertText,[req.body.producto_nombre,req.body.producto_descripcion,req.body.producto_precio,req.body.producto_cantidad,req.body.producto_imagen,1],2)
        .then((producto)=>{
            let promesas=[];
            id_producto=producto.id_producto;



            //recorremos cada tag para ingresarlo en la entidad
            req.body.tags.forEach(tag => {
                consulta(categoria_insertText,[tag.name,tag.name],2)
                promesas.push(
                    consulta(categoria_selectText,[tag.name],2)
                );
            });



            return Promise.all(promesas);

        })
        .then((tags)=>{
            let promesas=[];



            
            tags.forEach(tag =>{
                promesas.push(
                    consulta(categorizado_insertText,[id_producto,tag.id_categoria],1)
                );
            });

            return Promise.all(promesas);
        })
        .then((data)=>{
            res.json({mensaje:1})
            return
        })
        .catch(error => console.error(error))

       
    },







    mostrarProductos:function(req,res,next){

        consulta(producto_muestraText,[((req.body.pagina)-1)*40],1)
        .then((productos)=>{
            res.json(productos);
        })
        .catch(err =>{
            console.error("hubo un error en la muestra de los productos",err);
            res.json({mensaje:"error"});
        })
    },






    contarProductos:function(req,res,next){
        consulta(producto_cuantosText)
        .then(cantidad=>{
            res.json(cantidad.count)
        })
    }

}