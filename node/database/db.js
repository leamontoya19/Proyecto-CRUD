import { Sequelize } from 'sequelize'
//importante poner contraseña si se le tiene alguna al servidor
const db = new Sequelize ('database_app', 'root','@VaiAvanti6219',{
    host: 'localhost',
    dialect:'mysql'
})

export default db;