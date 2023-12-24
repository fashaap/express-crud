// layer untuk handle request dan response
// handle body
const expres = require("express");

const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
} = require("./product.service");

const router = expres.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();

    res.send(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await getProductById(parseInt(productId));

    res.send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;

    const product = await createProduct(newProductData);

    res.send({
      data: product,
      message: "Create product success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    await deleteProductById(parseInt(productId));
    
    res.status(400).send("Products delete succes");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    if (
      !(
        productData.name &&
        productData.description &&
        productData.price &&
        productData.image
      )
    ) {
      return res.status(400).send("Some fields are missing");
    }

    const product = await editProductById(parseInt(productId), productData);

    res.send({
      data: product,
      messages: "Edit products success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await editProductById(parseInt(productId), productData);

    res.send({
      data: product,
      messages: "Edit products success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
