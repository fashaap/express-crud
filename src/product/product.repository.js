//berkominikasi dtabase

//boleh orm / raw query

const prisma = require("../db");

const findProducts = async () => {
  const product = await prisma.product.findMany();

  return product;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};



const insertProduct = async (newProductData) => {
  const product = await prisma.product.create({
    data: {
      name: newProductData.name,
      description: newProductData.description,
      price: parseInt(newProductData.price),
      image: newProductData.image,
    },
  });

  return product
}

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
}

const editProduct = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      description: productData.description,
      price: parseInt(productData.price),
      image: productData.image,
    },
  });

  return product
}

module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct,
};
