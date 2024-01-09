const os = require('node:os')

function getInfoNetwork() {
    const networkInterfaces = os.networkInterfaces();
    const redes = {}

    Object.keys(networkInterfaces).forEach((dato) => {
        redes[dato] = networkInterfaces[dato].map((interface) => ({
            familia: interface.family,
            Direccion: interface.address,
            Interno: interface.internal
        }))
    })
    return redes
}

module.exports = {
    getInfoNetwork
}