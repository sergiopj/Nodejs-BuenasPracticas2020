'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'John',
        lastname: 'harder',
        phone: '00000000',
        email: 'jd@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
       },
       {
        firstname: 'Margaret',
        lastname: 'dew',
        phone: '00000044',
        email: 'md@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
       },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
