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

async function createEquipment(equipment) {
  const response = await fetch("/api/equipment", {
    method: "POST", // request to create data

    headers: {
      // we're telling Flask the body of our request contains JSON
      "Content-Type": "application/json",
    },

    body: JSON.stringify(equipment), // converting JS object into JSON text.
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error("Equipment could not be created.");

    error.details = data;

    throw error;
  }

  return data;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // get the user's input from our form
  const formData = new FormData(form);

  // create JS object
  const equipment = {
    name: formData.get("name"),
    category: formData.get("category"),
  };

  statusOutput.textContent = "Adding equipment...";

  try {
    await createEquipment(equipment);

    form.reset();

    statusOutput.textContent = "Equipment added.";

    await loadEquipment();
  } catch (error) {
    console.log(error);

    const errors = error.details?.errors;

    if (errors) {
      statusOutput.textContent = Object.values(errors).join(" ");
    } else {
      statusOutput.textContent = "Unable to add equipment!";
    }
  }
});
