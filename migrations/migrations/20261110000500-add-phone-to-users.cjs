'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
   await addCl
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'phone')
  },
}