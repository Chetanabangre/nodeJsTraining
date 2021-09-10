const categories = require('./json');
console.log('list',categories);
const getAll = (req, res) => {
    res.json(categories);
}

const getCategory = (req, res) => {
    const id = req.params.id;
    const category = categories.find(c => c.id == id);
    res.json(category);
}

const create = (req, res) => {
    categories.push(req.body);
    res.json(categories);
}

const update = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const index = categories.findIndex(i => i.id == id);
    categories[index] = data;
    res.json(categories);
}

const deleteCategory = (req, res) => {
    const {id} = req.params;
    const categoryList = categories.filter(c => c.id != id);
    res.json(categoryList);
}

module.exports = {
    getAll,
    getCategory,
    create,
    update,
    delete: deleteCategory
}