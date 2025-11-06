'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     
      await queryInterface.bulkInsert('Products', [{
        name:'sæbe',
        unitId: 1,
         createdAt: new Date(),
        updatedAt: new Date()
      },
       {
    name: 'Forvask alkalisk',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Forvask syrebaseret',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Hovedshampoo koncentrat',
    unitId: 3,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Skumshampoo aktiv',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Fælgrens automatisk',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Børstepleje middel',
    unitId: 3,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Lakbeskyttelse voks',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Tørringsmiddel premium',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Glansforstærker',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Polymerbeskyttelse',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Skumvoks',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Skyllevoks',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Tromleaffedter',
    unitId: 3,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Eftervoks klarlak',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Tørringshjælp middel',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Børsterens koncentrat',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Silikonefri voks',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Højtryksshampoo',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Vandafviser glas',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Skumforvask aktiv',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Understelrens middel',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Fælgrens syrefri',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Tromlevoks',
    unitId: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Skyllemiddel neutral',
    unitId: 2,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    name: 'Børstebeskyttelse',
    unitId: 3,
     createdAt: new Date(),
        updatedAt: new Date()
  }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Products', null, {});
    
  }
};
