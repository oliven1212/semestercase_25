'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Signe',
        lastName: 'Madsen',
        roleId: 1,
        email: 'signe.madsen@live.dk',
        password: 'tankstation1',
        phone: '24846948',
        adress: 'Thomas t thrigesgade 87, 5000 Odense C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Mikkel',
        lastName: 'Andersen',
        roleId: 1,
        email: 'mikkel.andersen@gmail.com',
        password: 'tankstation2',
        phone: '21478569',
        adress: 'Vestergade 12, 8000 Aarhus C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Nadia',
        lastName: 'Poulsen',
        roleId: 2,
        email: 'nadia.poulsen@yahoo.dk',
        password: 'tankstation3',
        phone: '26789541',
        adress: 'Søndergade 45, 7100 Vejle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jonas',
        lastName: 'Christensen',
        roleId: 2,
        email: 'jonas.christensen@outlook.dk',
        password: 'tankstation4',
        phone: '29748653',
        adress: 'Nørregade 3, 5000 Odense C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Camilla',
        lastName: 'Hansen',
        roleId: 2,
        email: 'camilla.hansen@hotmail.com',
        password: 'tankstation5',
        phone: '23214589',
        adress: 'Havnevej 18, 6000 Kolding',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Rasmus',
        lastName: 'Mortensen',
        roleId: 2,
        email: 'rasmus.mortensen@gmail.com',
        password: 'tankstation6',
        phone: '26897451',
        adress: 'Brogade 9, 4200 Slagelse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Maria',
        lastName: 'Larsen',
        roleId: 2,
        email: 'maria.larsen@live.dk',
        password: 'tankstation7',
        phone: '22369874',
        adress: 'Kongevej 77, 6100 Haderslev',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Emil',
        lastName: 'Olsen',
        roleId: 3,
        email: 'emil.olsen@icloud.com',
        password: 'tankstation8',
        phone: '26894137',
        adress: 'Parkvej 11, 4000 Roskilde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sofie',
        lastName: 'Jensen',
        roleId: 3,
        email: 'sofie.jensen@gmail.com',
        password: 'tankstation9',
        phone: '24578936',
        adress: 'Nørre Allé 56, 8000 Aarhus C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Thomas',
        lastName: 'Knudsen',
        roleId: 3,
        email: 'thomas.knudsen@hotmail.com',
        password: 'tankstation10',
        phone: '21546987',
        adress: 'Østergade 22, 9000 Aalborg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Julie',
        lastName: 'Christiansen',
        roleId: 3,
        email: 'julie.christiansen@gmail.com',
        password: 'tankstation11',
        phone: '28745196',
        adress: 'Engvej 35, 6700 Esbjerg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Anders',
        lastName: 'Petersen',
        roleId: 3,
        email: 'anders.petersen@yahoo.dk',
        password: 'tankstation12',
        phone: '25967841',
        adress: 'Skovvej 19, 4800 Nykøbing F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Laura',
        lastName: 'Thomsen',
        roleId: 3,
        email: 'laura.thomsen@live.dk',
        password: 'tankstation13',
        phone: '21984576',
        adress: 'Slotsgade 2, 6100 Haderslev',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Christian',
        lastName: 'Hedegaard',
        roleId: 3,
        email: 'christian.hedegaard@gmail.com',
        password: 'tankstation14',
        phone: '29845671',
        adress: 'Byvej 8, 7500 Holstebro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Nanna',
        lastName: 'Lund',
        roleId: 3,
        email: 'nanna.lund@outlook.dk',
        password: 'tankstation15',
        phone: '23789465',
        adress: 'Møllegade 15, 8700 Horsens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Alexander',
        lastName: 'Kristensen',
        roleId: 3,
        email: 'alexander.kristensen@gmail.com',
        password: 'tankstation16',
        phone: '28941567',
        adress: 'Kirkevej 3, 4400 Kalundborg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Emma',
        lastName: 'Holm',
        roleId: 3,
        email: 'emma.holm@hotmail.com',
        password: 'tankstation17',
        phone: '26397481',
        adress: 'Stationsvej 10, 9800 Hjørring',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sebastian',
        lastName: 'Jørgensen',
        roleId: 3,
        email: 'sebastian.jorgensen@gmail.com',
        password: 'tankstation18',
        phone: '24369785',
        adress: 'Hovedgaden 5, 8700 Horsens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Clara',
        lastName: 'Svendsen',
        roleId: 3,
        email: 'clara.svendsen@icloud.com',
        password: 'tankstation19',
        phone: '21458963',
        adress: 'Søndre Boulevard 13, 8700 Horsens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Oliver',
        lastName: 'Nielsen',
        roleId: 3,
        email: 'oliver.nielsen@gmail.com',
        password: 'tankstation20',
        phone: '26845973',
        adress: 'Torvegade 29, 5000 Odense C',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
