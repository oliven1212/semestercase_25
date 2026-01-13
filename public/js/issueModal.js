document.addEventListener("DOMContentLoaded", () => {
  const issueDialog = document.getElementById("issueDialog");
  const closeBtn = document.querySelector(".closeDialog");
  const openBtn = document.getElementById("openIssueDialog");

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

      try {
        const response = await fetch("/issues", {
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
