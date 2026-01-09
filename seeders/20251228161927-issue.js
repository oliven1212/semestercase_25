"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Issues",
      [
        {
          taskId: 1,
          description:
            "Generelle rengøringsfejl Støv og snavs er ikke fjernet fra vandrette overflader. Synligt snavs langs paneler og i hjørner. Overflader fremstår ujævnt rengjorte med striber. Rengøringen er ikke udført i henhold til aftalt standard. Gamle pletter er ikke forsøgt fjernet. Gulve Gulvet er ikke vasket grundigt og fremstår plettet. Synligt snavs i kanter og under inventar. Der er rester af rengøringsmiddel på gulvoverfladen. Gulvet er ikke støvsuget før gulvvask. Pletter og skjolder er ikke fjernet. Badeværelse og toilet Kalkaflejringer på armaturer og i bruseniche. Sæbe- og fedtrester på fliser. Toilet er ikke rengjort tilfredsstillende, især under kanten. Afløb fremstår urenset. Spejle er ikke pudset korrekt og har synlige striber. Køkken Fedt og snavs på køkkenlåger og greb. Bordplader er ikke aftørret grundigt.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 2,
          description: "Description for issue 2",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Issues", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
