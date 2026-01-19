const { exec } = require('child_process');

const port = process.env.PORT || process.env.SERVER_PORT || 3000;

console.log("Iniciando en el puerto:", port);

// -s dist = sirve SPA estática
// -l = listen (puerto)
// --single = fallback a /index.html (sirve para React Router)
exec(`node ./node_modules/serve/build/main.js -s dist -l ${port} --single`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    // OJO: serve a veces escribe logs en stderr aunque no sea error.
    // Si ves que igual funciona, puedes comentar este "return".
    // return;
  }
  console.log(`Servidor iniciado:\n${stdout}`);
});
