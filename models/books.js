module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    id: DataTypes.INTEGER,
    author: DataTypes.STRING,
    name: DataTypes.STRING,
    ranking: DataTypes.FLOAT,
    likes: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return books;
};
