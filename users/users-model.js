const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById
}


// ask why this needs to be an async function
async function add (user) {
    const [id] = await('users').insert(user, 'id');

    return findById(id); // if this breaks on the front end, just return the user?
}

function find(){
    return db('users').select('id', 'username');
}

function findBy(param){
    return db('users').where(param);
}

function findById(id) {
    return db('users').where({ id }).first();
}