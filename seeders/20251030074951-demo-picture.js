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

    await queryInterface.bulkInsert('Pictures', [
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '1+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '2+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '3+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 0, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '4+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 1, productImage: 0, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '5+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 1, productImage: 0, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '6+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 1, productImage: 0, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '7+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 1, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '8+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 0, productImage: 1, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '9+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 1, productImage: 1, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },
        { id: 'f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', taskId: 10, filename: '0+f1a7c9d2-1234-4e56-89ab-1a2b3c4d5e6f', beforeAfter: 1, productImage: 1, createdAt: '2025-11-06 08:03:18', updatedAt: new Date() },

        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '1+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '2+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 0, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '3+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 1, productImage: 0, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '4+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 1, productImage: 0, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '5+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 1, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '6+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 1, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '7+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 0, productImage: 1, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '8+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 1, productImage: 1, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '9+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 1, productImage: 1, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },
        { id: 'b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', taskId: 1, filename: '0+b2c8d9e3-2345-4f67-90bc-2b3c4d5e6f7a', beforeAfter: 1, productImage: 1, createdAt: '2025-12-06 08:03:18', updatedAt: new Date() },

        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '1+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '2+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 1, productImage: 0, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '3+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 1, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '4+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 1, productImage: 1, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '5+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 1, productImage: 1, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },

        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '6+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 0, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '7+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 1, productImage: 0, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '8+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 1, productImage: 0, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '9+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 0, productImage: 1, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },
        { id: 'c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', taskId: 2, filename: '0+c3d9e0f4-3456-4a78-91cd-3c4d5e6f7a8b', beforeAfter: 1, productImage: 1, createdAt: '2025-01-06 08:03:18', updatedAt: new Date() },

        { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: '1+d4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: '2025-02-06 08:03:18', updatedAt: new Date() },
        { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: '2+d4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: '2025-02-06 08:03:18', updatedAt: new Date() },
        { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: '3+d4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 1, productImage: 1, createdAt: '2025-02-06 08:03:18', updatedAt: new Date() },
        { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: '4+d4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 0, productImage: 0, createdAt: '2025-02-06 08:03:18', updatedAt: new Date() },
        { id: 'd4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', taskId: 3, filename: '5+d4e0f1a5-4567-4b89-92de-4d5e6f7a8b9c', beforeAfter: 1, productImage: 1, createdAt: '2025-02-06 08:03:18', updatedAt: new Date() },

        { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: '1+e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: '2025-03-06 08:03:18', updatedAt: new Date() },
        { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: '2+e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 0, createdAt: '2025-03-06 08:03:18', updatedAt: new Date() },
        { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: '3+e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 1, productImage: 0, createdAt: '2025-03-06 08:03:18', updatedAt: new Date() },
        { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: '4+e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 0, productImage: 1, createdAt: '2025-03-06 08:03:18', updatedAt: new Date() },
        { id: 'e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', taskId: 4, filename: '5+e5f1a2b6-5678-4c90-93ef-5e6f7a8b9c0d', beforeAfter: 1, productImage: 1, createdAt: '2025-03-06 08:03:18', updatedAt: new Date() },

        { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: '1+f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: '2025-04-06 08:03:18', updatedAt: new Date() },
        { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: '2+f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 0, createdAt: '2025-04-06 08:03:18', updatedAt: new Date() },
        { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: '3+f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 1, productImage: 0, createdAt: '2025-04-06 08:03:18', updatedAt: new Date() },
        { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: '4+f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 0, productImage: 1, createdAt: '2025-04-06 08:03:18', updatedAt: new Date() },
        { id: 'f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', taskId: 5, filename: '5+f6a2b3c7-6789-4d01-94fg-6f7a8b9c0d1e', beforeAfter: 1, productImage: 1, createdAt: '2025-04-06 08:03:18', updatedAt: new Date() },

        // taskId: 6
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '1+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '2+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 0, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '3+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 1, productImage: 0, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '4+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 1, productImage: 0, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '5+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 1, productImage: 0, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '6+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 1, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '7+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 1, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '8+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 0, productImage: 1, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '9+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 1, productImage: 1, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },
        { id: 'g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', taskId: 6, filename: '0+g7b3c4d8-7890-4e12-95gh-7g8b9c0d1e2f', beforeAfter: 1, productImage: 1, createdAt: '2025-05-06 08:03:18', updatedAt: new Date() },

        // taskId: 7
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '1+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '2+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '3+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 0, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '4+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 1, productImage: 0, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '5+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 1, productImage: 0, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '6+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 1, productImage: 0, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '7+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 1, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '8+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 0, productImage: 1, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '9+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 1, productImage: 1, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },
        { id: 'h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', taskId: 7, filename: '0+h8c4d5e9-8901-4f23-96hi-8h9c0d1e2f3g', beforeAfter: 1, productImage: 1, createdAt: '2025-06-06 08:03:18', updatedAt: new Date() },

        // taskId: 8
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '1+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '2+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 0, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '3+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 1, productImage: 0, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '4+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 1, productImage: 0, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '5+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 1, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '6+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 1, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '7+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 0, productImage: 1, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '8+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 1, productImage: 1, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '9+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 1, productImage: 1, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },
        { id: 'i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', taskId: 8, filename: '0+i9d5e6f0-9012-4g34-97ij-9i0d1e2f3g4h', beforeAfter: 1, productImage: 1, createdAt: '2025-07-06 08:03:18', updatedAt: new Date() },

        // taskId: 9
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '1+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() },
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '2+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 0, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() },
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '3+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 1, productImage: 0, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() },
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '4+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 1, productImage: 0, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() },
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '5+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 0, productImage: 1, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() },
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '6+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 1, productImage: 1, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() },
        { id: 'j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', taskId: 9, filename: '7+j0e6f7g1-0123-4h45-98jk-0j1e2f3g4h5i', beforeAfter: 1, productImage: 1, createdAt: '2025-08-06 08:03:18', updatedAt: new Date() }
    ], {});
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
