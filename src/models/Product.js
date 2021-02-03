import {Schema, model} from 'mongoose'

const productSchema = new Schema ({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},
{
    //Indica la fecha de creracion y la última fecha de modificación
    timestamps: true,
    //Quita el valor de __V cuando agrega datos nuevos en la DB
    versionKey: false
})

export default model('Product', productSchema)