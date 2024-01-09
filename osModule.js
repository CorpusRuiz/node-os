const os = require('node:os')

function getInfoSystem() {
    return {
        Nombre: os.platform(),
        Tipo: os.type(),
        Version: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
        MemoriaLibre: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB',
    }
}
module.exports = {
    getInfoSystem
}