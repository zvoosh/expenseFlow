function addExpenseRow({ expense, date, category, amount, cost, description }) {
  const tableBody = document.getElementById("expenseTableBody");
  if (!tableBody) return; // Prevent errors if tableBody doesn't exist

  const row = document.createElement("tr");
  row.classList.add("table-row");
  [expense, date, category, amount, cost, description].forEach((value) => {
    const cell = document.createElement("td");
    cell.classList.add("table-cell");
    cell.textContent = value;
    row.appendChild(cell);
  });

  const actionsCell = document.createElement("td");
  actionsCell.classList.add("table-cell");

  // Edit button
  const previewBtn = document.createElement("button");
  previewBtn.textContent = "Preview";
  previewBtn.className = "bttn preview-btn";
  previewBtn.onclick = () => {
    // Get row data
    const cells = row.querySelectorAll("td");
    const rowData = {
      expense: cells[0].textContent,
      date: cells[1].textContent,
      category: cells[2].textContent,
      amount: cells[3].textContent,
      cost: cells[4].textContent,
      description: cells[5].textContent,
    };
    console.log("Edit clicked:", rowData);
    // Add your edit logic here
  };

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "bttn edit-btn";
  editBtn.onclick = () => {
    // Get row data
    const cells = row.querySelectorAll("td");
    const rowData = {
      expense: cells[0].textContent,
      date: cells[1].textContent,
      category: cells[2].textContent,
      amount: cells[3].textContent,
      cost: cells[4].textContent,
      description: cells[5].textContent,
    };
    console.log("Edit clicked:", rowData);
    // Add your edit logic here
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "bttn delete-btn";
  deleteBtn.onclick = () => {
    // Get row data
    const cells = row.querySelectorAll("td");
    const rowData = {
      expense: cells[0].textContent,
      date: cells[1].textContent,
      category: cells[2].textContent,
      amount: cells[3].textContent,
      cost: cells[4].textContent,
      description: cells[5].textContent,
    };
    console.log("Delete clicked:", rowData);
    // Add your delete logic here
    row.remove();
  };

  actionsCell.appendChild(editBtn);
  actionsCell.appendChild(previewBtn);
  actionsCell.appendChild(deleteBtn);
  row.appendChild(actionsCell);

  tableBody.appendChild(row);
}
const observer = new MutationObserver(() => {
  const tableBody = document.getElementById("expenseTableBody");
  if (tableBody) {
    addExpenseRow({
      expense: "Lunch",
      date: "2025-08-15",
      category: "Food",
      amount: "1",
      cost: "12.50",
      description: "Team lunch at café",
    });
    observer.disconnect(); // Stop observing after found
  }
});

observer.observe(document.body, { childList: true, subtree: true });
