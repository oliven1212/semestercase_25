document.addEventListener("DOMContentLoaded", () => {
  const issueDialog = document.getElementById("issueDialog");
  const closeBtn = document.querySelector(".closeDialog");
  const openBtn = document.getElementById("openIssueDialog");
  const form = document.getElementById("issueForm");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      issueDialog.showModal();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      issueDialog.close();
    });
  }
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const description = document.getElementById("description").value;
      const taskId = document.getElementById("taskId").value;
      try {
        const response = await fetch("/tasks/" + taskId + "/issue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description }),
        });
        if (response.ok) {
          issueDialog.close();
          form.reset();
          window.location.reload();
        }
      } catch (error) {
        console.error("fejl:", error);
      }
    });
  }
});
