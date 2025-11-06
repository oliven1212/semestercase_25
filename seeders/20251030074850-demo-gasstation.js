'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Gasstations', [
            [
                {
                    branchId: 1,
                    address: 'Middelfartvej 53',
                    contactEmail: 'john.cena@live.dk',
                    contactPhone: '21733838',
                    frontSPace: 1,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Hovedvejen 112',
                    contactEmail: 'kontakt@glostrupfuel.dk',
                    contactPhone: '21458796',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Nørre Allé 45',
                    contactEmail: 'aarhus@nordfuel.dk',
                    contactPhone: '60637482',
                    frontSPace: 0,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Lyngbyvej 102',
                    contactEmail: 'info@citytank.dk',
                    contactPhone: '28745612',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Englandsvej 142',
                    contactEmail: 'kbh@greentank.dk',
                    contactPhone: '51947362',
                    frontSPace: 0,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Fynsvej 78',
                    contactEmail: 'mfa@fuelhub.dk',
                    contactPhone: '28736152',
                    frontSPace: 1,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Viborgvej 350',
                    contactEmail: 'viborgvej@petroline.dk',
                    contactPhone: '42569837',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Roskildevej 33',
                    contactEmail: 'rs@petroline.dk',
                    contactPhone: '60517428',
                    frontSPace: 0,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Østre Gade 18',
                    contactEmail: 'hj@fuelstation.dk',
                    contactPhone: '20479564',
                    frontSPace: 1,
                    cityCode: 9000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Vestergade 120',
                    contactEmail: 'odense@energyplus.dk',
                    contactPhone: '31974528',
                    frontSPace: 1,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Havnevej 14',
                    contactEmail: 'fsund@energyplus.dk',
                    contactPhone: '28456731',
                    frontSPace: 0,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Randersvej 208',
                    contactEmail: 'rn@tankone.dk',
                    contactPhone: '61473925',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Søndergade 92',
                    contactEmail: 'hs@tankone.dk',
                    contactPhone: '71459263',
                    frontSPace: 0,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Bredgade 76',
                    contactEmail: 'hn@greentank.dk',
                    contactPhone: '50127496',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Industrivej 4',
                    contactEmail: 'hb@fuelhub.dk',
                    contactPhone: '51263984',
                    frontSPace: 1,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Ålborgvej 19',
                    contactEmail: 'saeby@petroline.dk',
                    contactPhone: '53847219',
                    frontSPace: 0,
                    cityCode: 9000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Borgmester Christiansens Gade 60',
                    contactEmail: 'sv@citytank.dk',
                    contactPhone: '40516327',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Amagerbrogade 250',
                    contactEmail: 'amager@fuelhub.dk',
                    contactPhone: '61527483',
                    frontSPace: 0,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Vesterbro 55',
                    contactEmail: 'aalborg@nordfuel.dk',
                    contactPhone: '28364971',
                    frontSPace: 1,
                    cityCode: 9000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Østergade 8',
                    contactEmail: 'vejle@energyplus.dk',
                    contactPhone: '53791482',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Hovedgaden 77',
                    contactEmail: 'roskilde@tankone.dk',
                    contactPhone: '28963174',
                    frontSPace: 0,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Slotsgade 10',
                    contactEmail: 'hillerod@citytank.dk',
                    contactPhone: '60729531',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Frederiksborgvej 199',
                    contactEmail: 'nv@fuelhub.dk',
                    contactPhone: '28194635',
                    frontSPace: 0,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Torvegade 88',
                    contactEmail: 'esbjerg@petroline.dk',
                    contactPhone: '21486359',
                    frontSPace: 1,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Jernbanegade 12',
                    contactEmail: 'slagelse@greentank.dk',
                    contactPhone: '53721846',
                    frontSPace: 0,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Vejlevej 45',
                    contactEmail: 'horsens@tankone.dk',
                    contactPhone: '61849327',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Frederikshavnsvej 250',
                    contactEmail: 'hj2@fuelhub.dk',
                    contactPhone: '60583947',
                    frontSPace: 1,
                    cityCode: 9000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Strandvejen 160',
                    contactEmail: 'hellerup@energyplus.dk',
                    contactPhone: '71825396',
                    frontSPace: 0,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Nørregade 90',
                    contactEmail: 'horsens2@citytank.dk',
                    contactPhone: '53791842',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Stationsvej 5',
                    contactEmail: 'soroe@nordfuel.dk',
                    contactPhone: '28593174',
                    frontSPace: 0,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Blegdamsvej 22',
                    contactEmail: 'blegdamsvej@petroline.dk',
                    contactPhone: '51287493',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Møllevej 31',
                    contactEmail: 'rudkobing@greentank.dk',
                    contactPhone: '71459683',
                    frontSPace: 0,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Søndre Ringvej 75',
                    contactEmail: 'brondby@fuelhub.dk',
                    contactPhone: '40516372',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Ahlgade 19',
                    contactEmail: 'ahlgade@citytank.dk',
                    contactPhone: '51278963',
                    frontSPace: 1,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Klostergade 11',
                    contactEmail: 'klostergade@tankone.dk',
                    contactPhone: '60517394',
                    frontSPace: 0,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Vestre Strandvej 44',
                    contactEmail: 'skagen@fuelhub.dk',
                    contactPhone: '28364912',
                    frontSPace: 1,
                    cityCode: 9000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Nørreport 4',
                    contactEmail: 'norreport@energyplus.dk',
                    contactPhone: '71452896',
                    frontSPace: 0,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Kongensgade 88',
                    contactEmail: 'kongensgade@petroline.dk',
                    contactPhone: '53749182',
                    frontSPace: 1,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Toldbodgade 12',
                    contactEmail: 'toldbod@greentank.dk',
                    contactPhone: '28391657',
                    frontSPace: 1,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Boulevarden 60',
                    contactEmail: 'boulevarden@nordfuel.dk',
                    contactPhone: '60184953',
                    frontSPace: 0,
                    cityCode: 9000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Sønder Allé 33',
                    contactEmail: 'sonderalle@citytank.dk',
                    contactPhone: '51298374',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Langeskovvej 70',
                    contactEmail: 'langeskov@fuelhub.dk',
                    contactPhone: '71456932',
                    frontSPace: 0,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Vestergade 45',
                    contactEmail: 'koege@tankone.dk',
                    contactPhone: '28394716',
                    frontSPace: 1,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Lundtoftegårdsvej 12',
                    contactEmail: 'lyngby@energyplus.dk',
                    contactPhone: '50718364',
                    frontSPace: 0,
                    cityCode: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Storegade 28',
                    contactEmail: 'lemvig@fuelhub.dk',
                    contactPhone: '61957382',
                    frontSPace: 1,
                    cityCode: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 1,
                    address: 'Torvet 5',
                    contactEmail: 'torvet@petroline.dk',
                    contactPhone: '28617394',
                    frontSPace: 0,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 2,
                    address: 'Banegårdsvej 17',
                    contactEmail: 'odder@greentank.dk',
                    contactPhone: '52836497',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 3,
                    address: 'Sundvej 2',
                    contactEmail: 'sundvej@tankone.dk',
                    contactPhone: '60834127',
                    frontSPace: 1,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 4,
                    address: 'Østre Boulevard 10',
                    contactEmail: 'randers@energyplus.dk',
                    contactPhone: '52718364',
                    frontSPace: 0,
                    cityCode: 8000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branchId: 5,
                    address: 'Korsørvej 75',
                    contactEmail: 'korsoer@fuelhub.dk',
                    contactPhone: '40835297',
                    frontSPace: 1,
                    cityCode: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]

        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Gasstations', null, {});

    }
};
