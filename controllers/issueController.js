const { Gasstation, User, Issue, Task } = require("../models");

exports.adminListIssues = async (req, res) => {
  const issues = await Issue.findAll({
    attributes: ["id", "description", "status"],
    include: [
      {
        model: Task,
        attributes: ["id"],
        include: [
          {
            model: User,
            attributes: ["id", "firstName", "lastName"],
          },
          {
            model: Gasstation,
            attributes: ["contactPhone", "contactEmail", "address"],
          },
        ],
      },
    ],
    raw: true,
    order: [["status", "DESC"]],
  });
  console.log(issues);
  const issuesMap = issues.map((issue) => ({
    ...issue,
    name: issue.description.substring(0, 50),
    contact: `Tankstation: ${issue["Task.Gasstation.address"]} <br> Kontakt: ${issue["Task.Gasstation.contactEmail"]}`,
    //.replace(/\/$/, "") is regex to remove any trailing "/"
    link: `/admin/issues/${issue.id}`,
  }));

  res.render("home/adminList", {
    title: "Liste af problemer",
    message: "Liste af problemer",
    content: issuesMap,
  });
};
