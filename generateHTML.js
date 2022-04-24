function createCards(team) {
  const cardArray = [];
  // Add Manager card html to rendering html text
  cardArray.push(...team.filter((employee) => {
    return employee.getRole() === "Manager";
  }).map((manager) => {
    return managerCard(manager);
  }));
  // Add Engineer card(s) html to rendering html text
  cardArray.push(...team.filter((employee) => {
    return employee.getRole() === "Engineer";
  }).map((engineer) => {
    return engineerCard(engineer);
  }));
  // Add Intern card(s) html to rendering html text
  cardArray.push(...team.filter((employee) => {
    return employee.getRole() === "Intern";
  }).map((intern) => {
    return internCard(intern);
  }));

  // Add spacing elements to array of cards
  const finalArray = addSpace(cardArray);
  return generateFinalHTML(finalArray) 
}

function addSpace(array) {
  if (array.length > 3 ) {
    for (let i = 3; i < array.length; i += 4 ) {
      array.splice(i,0,`<div class="w-100"></div>`)
    }
  }
  return array
}

// Create Manager card to be appended to the HTML
function managerCard(manager) {
  return `
<div class = "card col-3 text-center my-3">
  <div class="card-title">
      <h2>${manager.getName()}</h2>
      <h3><i class="fas fa-crown"></i> ${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
  </div>
</div>`;
}

// Create Engineer card to be appended to the HTML
function engineerCard(engineer) {
  return `
<div class = "card col-3 text-center my-3">
  <div class="card-title">
      <h2>${engineer.getName()}</h2>
      <h3><i class="fas fa-crown"></i> ${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github Profile: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>`;
}

// Create Intern card to be appended to the HTML
function internCard(intern) {
  return `
<div class = "card col-3 text-center my-3">
  <div class="card-title">
      <h2>${intern.getName()}</h2>
      <h3><i class="fas fa-crown"></i> ${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">Current School: ${intern.school}</li>
      </ul>
  </div>
</div>`;
}

// Function to build HTML file using user input
function generateFinalHTML(cards) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Team Portfolio</title>
</head>

<body>
  <header class="bg-info text-white text-center">
    <h1 class="p-5">My Team</h1>
  </header>

  <main>
    <div class='justify-content-center card-deck'>
      <!-- Where employee cards will populate -->
      ${cards}
    </div>
  </main>
  <script src="https://kit.fontawesome.com/0e1a0a5b63.js" crossorigin="anonymous"></script>
</body>

</html>
`;
}

module.exports = createCards;