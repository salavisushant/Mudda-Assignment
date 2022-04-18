const mongoose = require('mongoose');

// export mongoose for mongoDb connections.

module.exports = () => {
    return mongoose.connect("mongodb+srv://Sush8088:Sush8088@cluster0.kbklm.mongodb.net/Gocomet")
}