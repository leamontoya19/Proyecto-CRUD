//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//MÉTODOS PARA EL CRUD

//Mostrar todos los registros
//lo primero que se hace es crear un func. async con los métodos 'request y response'

export const getAllBlogs = async ( req, res) => {
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    }catch (error) {
        res.json({message: error.message})
    }

}

//Mostrar un registro
export const getBlog = async( req, res)=>{
    try {
        const blog = await BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(blog [0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createBlog = async(req, res)=>{
    try {
       await BlogModel.create(req.body)
       res.json({
        "message":"Registration succesful!"
       })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar registro
export const updateblog = async(req, res) =>{
    try {
       await BlogModel.update(req.body, {
        where:{id: req.params.id}
    })
    res.json({
        "message":"Udpdated correctly"
    })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un registro
export const deleteBlog = async(req, res) =>{
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Entry deleted succesfully"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

