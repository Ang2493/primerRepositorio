import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/companydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB is connected and runing'))
    .catch(error => console.log(error))