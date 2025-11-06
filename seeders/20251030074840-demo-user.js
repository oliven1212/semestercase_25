'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [
            
                {
                    firstName: 'Signe',
                    lastName: 'Madsen',
                    roleId: 1, // tidligere 0
                    email: 'signe.madsen@live.dk',
                    password: 'tankstation1',
                    phone: '24846948',
                    address: 'Thomas t thrigesgade 87',
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Mikkel',
                    lastName: 'Andersen',
                    roleId: 2, // tidligere 1
                    email: 'mikkel.andersen@gmail.com',
                    password: 'tankstation2',
                    phone: '21478569',
                    address: 'Vestergade 12',
                    cityCode: 8000,
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
                    address: 'Søndergade 45',
                    cityCode: 2000,
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
                    address: 'Nørregade 3',
                    cityCode: 5000,
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
                    address: 'Havnevej 18',
                    cityCode: 2000,
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
                    address: 'Brogade 9',
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    firstName: 'Maria',
                    lastName: 'Larsen',
                    roleId: 3, // tidligere 2
                    email: 'maria.larsen@live.dk',
                    password: 'tankstation7',
                    phone: '22369874',
                    address: 'Kongevej 77',
                    cityCode: 5000,
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
                    address: 'Parkvej 11',
                    cityCode: 4000,
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
                    address: 'Nørre Allé 56',
                    cityCode: 8000,
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
                    address: 'Østergade 22',
                    cityCode: 9000,
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
                    address: 'Engvej 35',
                    cityCode: 5000,
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
                    address: 'Skovvej 19',
                    cityCode: 4000,
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
                    address: 'Slotsgade 2',
                    cityCode: 5000,
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
                    address: 'Byvej 8',
                    cityCode: 8000,
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
                    address: 'Møllegade 15',
                    cityCode: 8000,
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
                    address: 'Kirkevej 3',
                    cityCode: 4000,
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
                    address: 'Stationsvej 10',
                    cityCode: 9000,
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
                    address: 'Hovedgaden 5',
                    cityCode: 2000,
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
                    address: 'Søndre Boulevard 13',
                    cityCode: 8000,
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
                    address: 'Torvegade 29',
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], {});
    },


    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
