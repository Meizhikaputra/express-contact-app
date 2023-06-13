const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/meizhika', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});


// // menambah 1 data
// const contact1 = new contact({
//     nama: 'rani',
//     nohp: '08232321313',
//     email: 'rani@gmail.com'
// });


// // simpan ke collections
// contact1.save().then(contact => console.log(contact));