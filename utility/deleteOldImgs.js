const cron = require('cron');
const fs = require('fs');
const path = require('path');
const { Picture } = require('../models');
const { Op } = require('sequelize');

//import { CronJob } from 'cron';

// Funktion til at slette gamle billeder
async function deleteOldImages() {

    console.log('Kører sletning af gamle billeder...');


    // Beregn datoen for 3 måneder siden
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    console.log('Sletter billeder ældre end:', threeMonthsAgo);

    // Find alle billeder ældre end 3 måneder
    const oldpictures = await Picture.findAll({
        where: {
            createdAt: {
                [Op.lt]: threeMonthsAgo
            }
        },

        raw: true
    });

    console.log(`Fundet ${oldpictures.length} gamle billeder til sletning.`);

    if (oldpictures.length === 0) {
        console.log('Ingen gamle billeder at slette.');
        return;
    }


    for (const pic of oldpictures) {

        const filePath = path.join(__dirname, '..', 'public', 'imgUploads', pic.filename);
        
        // Slet filen fra filsystemet
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Fejl ved sletning af fil ${pic.filename}:`, err);
            } else {
                console.log(`Fil slettet: ${pic.filename}`);
            }
        });

        console.log(pic);

        // Slet filen fra databasen
        await Picture.destroy({
            where: { filename: pic.filename }
        });
        console.log(`Databasepost slettet for fil: ${pic.filename}`);
   
    }

}

//cron.schedule('0 3 * * *', () => {
    //KIG HVOR GAMLE DE ER, SLET FOR GAMLE BILLEDER
    // }); Burde køres i en anden mappe

function startCronJob() {
    
    // Kør deleteOldPictures() hver dag kl 03:00
    const job = new cron.CronJob ('0 3 * * *', async () => { 
      
        
        console.log('🕐 Cron job starter cleanup');
        
        try {
            await deleteOldImages();              // Kør cleanup funktionen
        } catch (error) {
            console.error('Cron job fejl:', error);
        }
    }, null, true, 'Europe/Copenhagen'

);
    
    console.log('✓ Cron job er sat op');
    console.log('  Kører hver dag kl 03:00');
}

module.exports = {deleteOldImages, startCronJob};



// Kør hver dag kl. 03:00 for at slette gamle billeder

