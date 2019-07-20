
CREATE TABLE usuario(
    id_usuario SERIAL PRIMARY KEY
    nombre VARCHAR(50),
    clave VARCHAR(500)
);


CREATE TABLE producto(
    id_producto SERIAL PRIMARY KEY,
    id_usuario  INT NOT NULL
    nombre VARCHAR(100),
    descripcion VARCHAR(500),
    imagen VARCHAR(5000),
    precio  FLOAT,
    cantidad INT,
    
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);



CREATE TABLE compra(
    id_compra SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    fecha DATE,
    cantidad INT,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);


CREATE TABLE categoria(
    id_categoria SERIAL PRIMARY KEY,
    nombre  VARCHAR(100)
);






CREATE TABLE categorizado(
    id_categorizado SERIAL PRIMARY KEY,
    id_producto INT NOT NULL,
    id_categoria INT NOT NULL

    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);