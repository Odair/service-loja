module.exports = {
    dialect: 'mysql',
    host: `${process.env.MYSQL_HOST}`,
    username: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DB}`,
    define: {
        timesstamps: true,
        underscored: false,
        freezeTableName: true
    }
}