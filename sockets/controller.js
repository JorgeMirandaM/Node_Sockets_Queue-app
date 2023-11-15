const TicketControl = require("../models/ticket-control");

const ticketControl= new TicketControl();


const socketController = (socket) => {

    socket.emit('ultimo-ticket',ticketControl.ultimo);

    socket.on('siguiente-ticket', ( payload, callback ) => {
        
        const siguiente= ticketControl.siguiente();

        callback(siguiente);

    })

}



module.exports = {
    socketController
}

