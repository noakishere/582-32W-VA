const form = document.getElementById("equipment-form");

// render target
const equipmentList = document.getElementById("equipment-list");

const statusOutput = document.getElementById("status");

// async function!!
async function getEquipment() {
  // instead of typing 127.0.0.1:5000/api/equipment
  // we write relative URLs to avoid hard-coding
  const response = await fetch("/api/equipment");

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

function renderEquipment(items) {
  equipmentList.innerHTML = "";

  if (items.length === 0) {
    equipmentList.innerHTML = `<li>No equipment has been added.</li>`;

    return;
  }

  // render each item and add to HTML
  items.forEach((item) => {
    const listItem = document.createElement("li");

    listItem.textContent = `${item.name} -- ${item.category}`;

    equipmentList.appendChild(listItem);
  });
}

async function loadEquipment() {
  statusOutput.textContent = "Loading equipment..";

  try {
    const items = await getEquipment();

    renderEquipment(items);

    statusOutput.textContent = "Loaded successfully";
  } catch (error) {
    console.error(error);

    statusOutput.textContent = "unable to load equipment";
  }
}

loadEquipment();

// loadEquipment() --> getEquipment() --> fetch("/api/equipment") --> Flask endpoint --> Database query --> turns into JSON --> renderEquipment()
