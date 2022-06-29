var EmployeeArr = []

const pushObj = (obj) => {
    EmployeeArr.push(obj);
    console.log(EmployeeArr);
}

const generateCard = () => {
    return `
            ${EmployeeArr.filter(result => result.type == "Manager").map(({ name, type, ID, email, OfficeNumber }) => {
                return `   
                            <section class="card col shadow p-3 mb-5 bg-body rounded mx-2">
                                <div class="card-header bg-primary"> 
                                    <h1 class="card-title text-white"> ${name} </h1>
                                    <h3 class="card-title text-white"> <i class="fa-solid fa-mug-hot"></i> ${type} </h3>
                                </div>
                                <div class="card-body bg-light">
                                    <div>
                                        <p class="card-text border"> ID: ${ID} </p>
                                        <p class="card-text border"> Email: <a href="mailto:${email}" target="_blank"> ${email} </a> </p>
                                        <p class="card-text border"> Office Number: ${OfficeNumber} </p>
                                    </div>
                                </div>
                            </section>`;}).join('')}
            ${EmployeeArr.filter(result => result.type == "Engineer").map(({ name, type, ID, email, github }) => {
                    return `
                            <section class="card col shadow p-3 mb-5 bg-body rounded mx-2">
                                <div class="card-header bg-primary"> 
                                    <h1 class="card-title text-white"> ${name} </h1>
                                    <h3 class="card-title text-white"> <i class="fa-solid fa-glasses"></i> ${type} </h3>
                                </div>
                                <div class="card-body bg-light">
                                    <div>
                                        <p class="card-text border"> ID: ${ID} </p>
                                        <p class="card-text border"> Email: <a href="mailto:${email}" target="_blank"> ${email} </a> </p>
                                        <p class="card-text border"> Github: <a href="github.com/${github}" target="_blank"> ${github} </a> </p>
                                    </div>
                                </div>
                            </section>`;}).join('')}
            ${EmployeeArr.filter(result => result.type == "Intern").map(({ name, type, ID, email, school }) => {
                return `
                            <section class="card col shadow p-3 mb-5 bg-body rounded mx-2">
                                <div class="card-header bg-primary"> 
                                    <h1 class="card-title text-white"> ${name} </h1>
                                    <h3 class="card-title text-white"> <i class="fa-solid fa-graduation-cap"></i> ${type} </h3>
                                </div>
                                <div class="card-body bg-light">
                                    <div>
                                        <p class="card-text border"> ID: ${ID} </p>
                                        <p class="card-text border"> Email: <a href="mailto:${email}" target="_blank"> ${email} </a> </p>
                                        <p class="card-text border"> School: ${school} </p>
                                    </div>
                                </div>
                            </section>`;}).join('')}`
}

const Markdown = () => {
    console.log("Markdown function was called")
    return `
    <!Doctype html>
        <html lang='en'>
            <head>
                <meta charset="UTF-8">
                    <meta name='viewport' content='width = device-width, initial-scale= 1.0'>
                        <title> Employee Management </title>
                        <!-- CSS only -->
                        <script src="https://kit.fontawesome.com/048ff74d80.js" crossorigin="anonymous"></script>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                        </head>
                        <body>
                            <header>
                                <div>
                                    <h1 class='text-center bg-danger text-white'> My Team </h1>
                                </div>
                            </header>
                            <main class="container">
                                <div class='row'>
                                    ${generateCard()}
                                </div>
                            </main>
                        </body>
                        `
};

export { Markdown, pushObj }