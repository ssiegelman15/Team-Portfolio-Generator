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
    </div>
  </main>
  <script src="https://kit.fontawesome.com/0e1a0a5b63.js" crossorigin="anonymous"></script>
</body>

</html>
`;
}

module.exports = generateTemplate;