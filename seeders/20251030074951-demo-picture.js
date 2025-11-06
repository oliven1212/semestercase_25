'use strict';
/*database pictures skal være ens hos alle, så billednavn er det samme i vores mapper også. SÅ ingen random værdier*/

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


      // Create an array of entries to insert
      const picturesArray = [
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 0, filename: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                    // taskId: 6
                    { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                        // taskId: 7
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                        // taskId: 8
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },

                        // taskId: 9
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() },
                        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: new Date(), updatedAt: new Date() }


                    ];

      // Example: insert the same UUID twice using a loop
      for (let i = 1; i < 100; i++) {
          const pictureId = uuidv4();
          picturesArray.push({
              id: pictureId,              // same UUID for both
              taskId: Math.floor(Math.random() * 99)+1,
              filename: pictureId,        // also the same filename
              beforeAfter: Math.round(Math.random()),       // 0 or 1
              productImage: Math.round(Math.random()),       // 0 or 1
              createdAt: new Date(),
              updatedAt: new Date(),
          });
      }
    await queryInterface.bulkInsert('Pictures', picturesArray, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pictures', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
