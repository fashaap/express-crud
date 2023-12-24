//service layer bertujuan untuk handle bussinis logic
//kenapa dipisah ? supaya tanggung jawab ter-isolate, dan function nya
//reuseble == clean code


const { findProducts, findProductById, insertProduct, deleteProduct, editProduct} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();

  if (!products) {
    throw Error("Product not found");
  } //logic

  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id); // repository / meminta mengambil data

  if (!product) {
    throw Error("Product not found");
  } //logic

  return product;
};

const createProduct = async (newProductData) => {

  
  const product = await insertProduct(newProductData);

  return product;
};

const deleteProductById = async (id) => {
  await getProductById(id);

  await deleteProduct(id)
};

const editProductById = async (id, productData) => {
  await getProductById(id);

  const product = editProduct(id, productData)

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};
