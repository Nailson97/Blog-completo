const Sequelize = require('sequelize')

const connection = new Sequelize('blogpress','root','34286066',{
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = connection