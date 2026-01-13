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
            "Afløb i vaskehallen er delvist stoppet og kan ikke renses med almindeligt udstyr.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 2,
          description:
            "Der er konstante sæberester på gulvet, selv efter gentagen afskylning.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 3,
          description:
            "Vaskebørster er meget slidte og bør udskiftes for at undgå skader på biler.",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 4,
          description:
            "Forvaskemiddel løber hurtigt tør, mulig fejl på doseringsanlæg.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 5,
          description:
            "Der står tomme kemidunke i serviceområdet uden mulighed for bortskaffelse.",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 6,
          description:
            "Gulvet er meget glat i vaskehallen, selv efter rengøring.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 7,
          description:
            "Der mangler tydelig mærkning på kemibeholderne i teknikrummet.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 8,
          description:
            "Sensor ved indkørsel er dækket af snavs, men kan ikke nås sikkert.",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 9,
          description:
            "Der er gentagne lækager fra slanger under vask, årsag ukendt.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 10,
          description:
            "Vandtryk virker ujævnt under vask og påvirker rengøringsresultatet.",
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
