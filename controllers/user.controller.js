const { response } = require('express')

const getUsers = (req, res = response) => {
    res.json({
        message: 'get API - controller'
    })
}


const postUser = (req, res) => {
    res.json({
        message: 'post API - controller'
    })
}

const putUser = (req, res) => {
    res.json({
        message: 'put API - controller'
    })
}

const deleteUser = (req, res) => {
    res.json({
        message: 'delete API - controller'
    })
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
}