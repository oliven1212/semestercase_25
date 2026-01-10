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
    order: [["status", "ASC"]],
  });
  console.log(issues);
  const issuesMap = issues.map((issue) => {
    const issueSolved = issue.status === 1;
    const statusDisplay = issueSolved
      ? { text: "løst", class: "issue-solved" }
      : { text: "ikke løst", class: "issue-unsolved" };
    return {
      ...issue,
      title: "problemer",
      name: issue.description.substring(0, 50),
      contact: `Tankstation: ${issue["Task.Gasstation.address"]} <br> Kontakt: ${issue["Task.Gasstation.contactEmail"]}`,
      link: `/admin/issues/${issue.id}`,
      statusText: statusDisplay.text,
      statusClass: statusDisplay.class,
      issueSolved: issueSolved,
    };
  });
  console.log(issuesMap);
  res.render("home/adminList", {
    title: "Liste af problemer",
    message: "Liste af problemer",
    content: issuesMap,
  });
};
