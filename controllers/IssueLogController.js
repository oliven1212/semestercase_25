const { Issue, Task, User } = require('../models');

// Hent issues for en task
exports.getIssuesForTask = async (taskId) => {
  return await Issue.findAll({
    where: { taskId },
    include: [{ model: User, attributes: ['id', 'firstName', 'lastName'] }],
    order: [['createdAt', 'ASC']]
  });
};


// Tilføj en ny kommentar til en task
exports.addCommentToTask = async (req, res) => {
    const { taskId } = req.params;
    const { comment } = req.body;
    const userId = req.session.user.id; 

    if (!comment || comment.trim() === '') {
        return res.status(400).send('Kommentarfeltet kan ikke være tomt');
    }

    try {
        await Issue.create({
            taskId,
            comment,
            status: false, 
            userId
        });

        res.redirect(`/createtaskdata/${taskId}`); // Tilbage til samme page
    } catch (error) {
        console.error(error);
        res.status(500).send('Der opstod en fejl ved tilføjelse af kommentar');
    }
};