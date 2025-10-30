'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Gasstations', [{
        branchId: 1,
        location: 'Middelfartvej 53, 5200 Odense V',
        contactEmail:'john.cena@live.dk',
        contactPhone: '21733838',
        frontSPace: 1,
         createdAt: new Date(),
        updatedAt: new Date()

        

      },
     {
    branchId: 1,
    location: 'Middelfartvej 53, 5200 Odense V',
    contactEmail: 'john.cena@live.dk',
    contactPhone: '21733838',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Hovedvejen 112, 2600 Glostrup',
    contactEmail: 'kontakt@glostrupfuel.dk',
    contactPhone: '21458796',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Nørre Allé 45, 8000 Aarhus C',
    contactEmail: 'aarhus@nordfuel.dk',
    contactPhone: '60637482',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Lyngbyvej 102, 2100 København Ø',
    contactEmail: 'info@citytank.dk',
    contactPhone: '28745612',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Englandsvej 142, 2300 København S',
    contactEmail: 'kbh@greentank.dk',
    contactPhone: '51947362',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Fynsvej 78, 5500 Middelfart',
    contactEmail: 'mfa@fuelhub.dk',
    contactPhone: '28736152',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Viborgvej 350, 8210 Aarhus V',
    contactEmail: 'viborgvej@petroline.dk',
    contactPhone: '42569837',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Roskildevej 33, 2620 Albertslund',
    contactEmail: 'rs@petroline.dk',
    contactPhone: '60517428',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Østre Gade 18, 9800 Hjørring',
    contactEmail: 'hj@fuelstation.dk',
    contactPhone: '20479564',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Vestergade 120, 5000 Odense C',
    contactEmail: 'odense@energyplus.dk',
    contactPhone: '31974528',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Havnevej 14, 3600 Frederikssund',
    contactEmail: 'fsund@energyplus.dk',
    contactPhone: '28456731',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Randersvej 208, 8200 Aarhus N',
    contactEmail: 'rn@tankone.dk',
    contactPhone: '61473925',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Søndergade 92, 8700 Horsens',
    contactEmail: 'hs@tankone.dk',
    contactPhone: '71459263',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Bredgade 76, 7400 Herning',
    contactEmail: 'hn@greentank.dk',
    contactPhone: '50127496',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Industrivej 4, 4300 Holbæk',
    contactEmail: 'hb@fuelhub.dk',
    contactPhone: '51263984',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Ålborgvej 19, 9300 Sæby',
    contactEmail: 'saeby@petroline.dk',
    contactPhone: '53847219',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Borgmester Christiansens Gade 60, 2450 København SV',
    contactEmail: 'sv@citytank.dk',
    contactPhone: '40516327',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Amagerbrogade 250, 2300 København S',
    contactEmail: 'amager@fuelhub.dk',
    contactPhone: '61527483',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Vesterbro 55, 9000 Aalborg',
    contactEmail: 'aalborg@nordfuel.dk',
    contactPhone: '28364971',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Østergade 8, 7100 Vejle',
    contactEmail: 'vejle@energyplus.dk',
    contactPhone: '53791482',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Hovedgaden 77, 4000 Roskilde',
    contactEmail: 'roskilde@tankone.dk',
    contactPhone: '28963174',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Slotsgade 10, 3400 Hillerød',
    contactEmail: 'hillerod@citytank.dk',
    contactPhone: '60729531',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Frederiksborgvej 199, 2400 København NV',
    contactEmail: 'nv@fuelhub.dk',
    contactPhone: '28194635',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Torvegade 88, 6700 Esbjerg',
    contactEmail: 'esbjerg@petroline.dk',
    contactPhone: '21486359',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Jernbanegade 12, 4200 Slagelse',
    contactEmail: 'slagelse@greentank.dk',
    contactPhone: '53721846',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Vejlevej 45, 8700 Horsens',
    contactEmail: 'horsens@tankone.dk',
    contactPhone: '61849327',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Frederikshavnsvej 250, 9800 Hjørring',
    contactEmail: 'hj2@fuelhub.dk',
    contactPhone: '60583947',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Strandvejen 160, 2900 Hellerup',
    contactEmail: 'hellerup@energyplus.dk',
    contactPhone: '71825396',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Nørregade 90, 8700 Horsens',
    contactEmail: 'horsens2@citytank.dk',
    contactPhone: '53791842',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Stationsvej 5, 4180 Sorø',
    contactEmail: 'soroe@nordfuel.dk',
    contactPhone: '28593174',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Blegdamsvej 22, 2100 København Ø',
    contactEmail: 'blegdamsvej@petroline.dk',
    contactPhone: '51287493',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Møllevej 31, 5900 Rudkøbing',
    contactEmail: 'rudkobing@greentank.dk',
    contactPhone: '71459683',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Søndre Ringvej 75, 2605 Brøndby',
    contactEmail: 'brondby@fuelhub.dk',
    contactPhone: '40516372',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Ahlgade 19, 4300 Holbæk',
    contactEmail: 'ahlgade@citytank.dk',
    contactPhone: '51278963',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Klostergade 11, 8000 Aarhus C',
    contactEmail: 'klostergade@tankone.dk',
    contactPhone: '60517394',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Vestre Strandvej 44, 9990 Skagen',
    contactEmail: 'skagen@fuelhub.dk',
    contactPhone: '28364912',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Nørreport 4, 5000 Odense C',
    contactEmail: 'norreport@energyplus.dk',
    contactPhone: '71452896',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Kongensgade 88, 6700 Esbjerg',
    contactEmail: 'kongensgade@petroline.dk',
    contactPhone: '53749182',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Toldbodgade 12, 1253 København K',
    contactEmail: 'toldbod@greentank.dk',
    contactPhone: '28391657',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Boulevarden 60, 9000 Aalborg',
    contactEmail: 'boulevarden@nordfuel.dk',
    contactPhone: '60184953',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Sønder Allé 33, 8000 Aarhus C',
    contactEmail: 'sonderalle@citytank.dk',
    contactPhone: '51298374',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Langeskovvej 70, 5550 Langeskov',
    contactEmail: 'langeskov@fuelhub.dk',
    contactPhone: '71456932',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Vestergade 45, 4600 Køge',
    contactEmail: 'koege@tankone.dk',
    contactPhone: '28394716',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Lundtoftegårdsvej 12, 2800 Kgs. Lyngby',
    contactEmail: 'lyngby@energyplus.dk',
    contactPhone: '50718364',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Storegade 28, 7620 Lemvig',
    contactEmail: 'lemvig@fuelhub.dk',
    contactPhone: '61957382',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 1,
    location: 'Torvet 5, 8700 Horsens',
    contactEmail: 'torvet@petroline.dk',
    contactPhone: '28617394',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 2,
    location: 'Banegårdsvej 17, 8300 Odder',
    contactEmail: 'odder@greentank.dk',
    contactPhone: '52836497',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 3,
    location: 'Sundvej 2, 8700 Horsens',
    contactEmail: 'sundvej@tankone.dk',
    contactPhone: '60834127',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 4,
    location: 'Østre Boulevard 10, 8930 Randers NØ',
    contactEmail: 'randers@energyplus.dk',
    contactPhone: '52718364',
    frontSPace: 0,
     createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    branchId: 5,
    location: 'Korsørvej 75, 4220 Korsør',
    contactEmail: 'korsoer@fuelhub.dk',
    contactPhone: '40835297',
    frontSPace: 1,
     createdAt: new Date(),
        updatedAt: new Date()
  }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Gasstations', null, {});
     
  }
};
