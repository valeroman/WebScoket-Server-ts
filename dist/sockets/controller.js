"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
exports.socketController = (socket) => {
    console.log('Cliente conectado', socket.id);
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });
    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456000;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    });
};
//# sourceMappingURL=controller.js.map