const prisma = require("../db");

const findNews = async () => {
  const news = await prisma.news.findMany();

  return news;
};

const findNewsById = async (id) => {
  const news = await prisma.news.findUnique({
    where: {
      id,
    },
  });

  return news;
};

const insertNews = async (newNewsData) => {
  const news = await prisma.news.create({
    data: {
      title: newNewsData.title,
      description: newNewsData.description,
      image: newNewsData.image,
      path: newNewsData.path,
      date: newNewsData.date,
    },
  });

  return news;
};

const deleteNews = async (id) => {
  const news = await prisma.news.delete({
    where: {
      id,
    },
  });

  return news;
};

const editNews = async (id, newsData) => {
  const news = await prisma.news.update({
    where: {
      id,
    },
    data: {
      title: newsData.title,
      description: newsData.description,
      image: newsData.image,
      path: newsData.path,
      date: newsData.date,
    },
  });

  return news;
};

module.exports = {
  findNews,
  findNewsById,
  insertNews,
  deleteNews,
  editNews,
};
