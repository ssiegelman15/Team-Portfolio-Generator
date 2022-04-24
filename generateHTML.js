// Create Manager card to be appended to the HTML
function renderManager(manager) {
  return `
<div class="card col-3">
  <div class="card-title">
      <h2>${manager.getName()}</h2>
      <h3><i class="fas fa-crown"></i> ${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></li>
      </ul>
  </div>
</div>`;
}

// Function to build HTML file using user input
function generateTemplate(data) {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`;
}

module.exports = generateTemplate;