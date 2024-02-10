// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, uniqueKey: 'product_id' });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, uniqueKey: 'tag_id' });

// I am using underscored: true in the model of Product and Tag
// So the default tagId and productId from the through table will coverted to snake_case to match the attribute in the model

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
