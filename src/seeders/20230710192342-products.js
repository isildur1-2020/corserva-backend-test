"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        name: "Xbox One S",
        price: 1569900,
        stock: 99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PlayStation 5",
        price: 3999999,
        stock: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xbox Series X",
        price: 1569900,
        stock: 128,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo Switch",
        price: 1499999,
        stock: 1024,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PlayStation 4",
        price: 1499999,
        stock: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo Wii U",
        price: 886000,
        stock: 326,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  },
};
