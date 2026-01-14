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

exports.issueShow = async (req, res) => {
  const issue = await Issue.findOne({
    where: {
      id: req.params.issueId,
    },
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
  });

  res.render("admin/adminIssue", {
    title: "Problemdetaljer",
    message: "Problemdetaljer",
    issue,
  });
};

exports.issueCreate = async (req, res) => {
  const { description } = req.body;
  const { taskId } = req.params;

  await Issue.create({
    description: description,
    status: 0,
    taskId: taskId,
  });
  res.redirect("/tasks/" + taskId);
};

exports.issueUpdate = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;
  await Issue.update({ status }, { where: { id } });
  res.redirect(`/admin/issues/${issue.id}`);
};
