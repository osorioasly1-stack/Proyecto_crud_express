require('dotenv'). config();
const express = require ('express');
const app = express();
 
 const PORT = process.env.  MIPUERTO || process.env.PORT || 3000; 
app.use(express.json())
 
 app.get("/", (_, res) => { res.send('API Rest Full con express'); 
 }); 

 app.get("/api/aprendices", (_, res) => { res.status(200).json('Lista Aprendices'); 
 }); 

app.post('/api/aprendices', (req, res) => {
  const datosAprendiz = req.body;
  const edad = req.body.edad;

  if (edad >= 18) {
    return res.status(201).json({
      mensaje: "Crear Aprendiz",
      estado: "Mayor de edad",
      Datos: datosAprendiz
    });
  } else {
    return res.status(400).json({
      mensaje: "No se puede registrar",
      error: "El aprendiz es menor de edad"
    });
    }
    });

  app.put("/api/aprendices/:id", (_, res) => { res.status(200).json('Actualizar Aprendiz'); 
 }); 

  app.delete("/api/aprendices/:id", (_, res) => { res.status(200).json('Eliminada'); 
 }); 

 app.listen(PORT, () => { console.log( `Servidor: http://localhost:${PORT} `); });
