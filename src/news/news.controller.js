const expres = require("express");
const router = expres.Router();

const {
  getAllNews,
  createNews,
  deleteNewsById,
  editNewsById,
  getNewsById,
} = require("./news.service");

router.get("/", async (req, res) => {
  try {
    const news = await getAllNews();

    res.status(200).send(news);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await getNewsById(parseInt(newsId));

    res.status(200).send(news);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newsData = req.body;

    const news = await createNews(newsData);

    res.status(200).send(news);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await deleteNewsById(parseInt(newsId));

    res.status(200).send({
      data: news,
      message: "Delete news succes",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newsId = req.params.id;
    const newsData = req.body;

    if (
      !(
        newsData.title &&
        newsData.description &&
        newsData.image &&
        newsData.path &&
        newsData.date
      )
    ) {
      return res.status(400).send("Some fields are missing");
    }

    const news = await editNewsById(parseInt(newsId), newsData);

    res.status(200).send({
      data: news,
      message: "Edit news success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const newsId = req.params.id;
    const newsData = req.body;

    const news = await editNewsById(parseInt(newsId), newsData);

    res.status(200).send({
      data: news,
      message: "Edit news succes",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
