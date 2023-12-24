const {
  findNews,
  findNewsById,
  insertNews,
  deleteNews,
} = require("./news.repository");

const getAllNews = async () => {
  const news = await findNews();

  if (!news) {
    throw Error("News api not found");
  }
  return news;
};

const getNewsById = async (id) => {
  const news = await findNewsById(id);

  if (!news) {
    throw Error("News not found");
  }

  return news;
};

const createNews = async (newNewsData) => {
  const news = await insertNews(newNewsData);

  return news;
};

const deleteNewsById = async (id) => {
  await getNewsById(id);
  const news = deleteNews();

  return news;
};

const editNewsById = async (id, newsData) => {
  await getNewsById(id);

  const news = await editNewsById(newsData);

  return news;
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  deleteNewsById,
  editNewsById,
};
