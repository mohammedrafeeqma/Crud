const mongoose = require('mongoose')

const CrudSchema = new mongoose.Schema(
    {
        title:{
            type:'String'
        },
        description:{
            type:'String'
        },
        isDone:{
            type: Boolean,
            default:true
        },
        isActiove:{
            type:Boolean,
            default:false
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Crud', CrudSchema)