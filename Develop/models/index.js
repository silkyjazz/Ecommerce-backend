// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories hasmany Products
Category.hasMany(Product, {
  onDelete: 'CASCADE'
})
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: 'ProductTag'})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: 'ProductTag'})



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
