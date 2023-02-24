// This function creates an object with the portfolio, which itself is capable of making another profolio page
let createPages = (firstName, lastName, fullName ) => {
return {html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullName}}/ Web Developer</title>
  <!-- This is REQUIRED for bootstrap to work correctly -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/css/style.css">
  <!-- Font awesome -->
  <script src="https://kit.fontawesome.com/0dd9fad87f.js" crossorigin="anonymous"></script>
</head>

<body>
  <!-- Navigation Bar Code Below -->
  <nav class="navbar navbar-expand-lg navbar-dark" id="main-nav">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">${fullName}</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 top-nav-right">
        <li class="nav-item">
          <a class="nav-link" href="#AboutMe">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Work">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ContactMe">Contact me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="assets/files/${firstName}}s_CV.pdf">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
  <main>
    <!-- Jumbotron -->
    <div class="jumbotron" id="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-3 mx-auto">
            <img src="assets/images/headshot.jpeg" alt="${firstName}}'s photo">
          </div>
          <div class="col-sm-12 col-lg-4 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h1 class="HeroTitle">${fullName}</h1>
          </div>
          <div class="col-sm-12 col-lg-5 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h1 class="HeroTitle">Web Developer</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Skills / About Me Section-->
    <section class="about-section skills-section" id="Me">
      <h2><i class="fa-solid fa-person"></i> My Details <i class="fa-solid fa-person"></i></h2>
      <div class="container-fluid">
        <div class="row">
          <!-- Skills -->
          <div class="col-lg-2 col-md-6 col-sm-12">
            <div class="card me-card">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-uppercase">Skills</h3>
                <ul>
                ${skills.map(element => {
                    `<li>${element}</li>`
                }).join("")}
                </ul>
              </div>
            </div>
          </div>
          <!-- About Me -->
          <div class="col-lg-7 col-md-6 col-sm-12">
            <div class="card me-card">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-uppercase" id="AboutMe">About Me</h3>
                <p>My name is ${fullName}, and this page is a portfolio of some of my projects. I have used HTML, CSS and Javascript in the making of the projects listed below.</p>
                <br />
                <p>${bio}}</p>
                <br />
                <p>This page uses my current favourite CSS property, Box SHadow that is removed on hover, which can be
                  seen in the banner below the
                  header of this page. This helps the pictures on the page blend with the colour scheme, but still be
                  able to focus on the image when looking at it.</p>
                <br />
                <p>Outside of web development, I enjoy ${hobbies}}.</p>
              </div>
            </div>
          </div>
          <!-- Contact Me -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card me-card">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-uppercase" id="ContactMe">Contact Me</h3>
                <ul>
                  <!-- Use of font aswesome on the links -->
                  <li><a href="tel:${mobile}"><i class="fa-solid fa-mobile"></i></a></li>
                  <li><a href="mailto:${email}}"><i class="fas fa-envelope text-primary mb-2"></i></a></li>
                  <li><a href="${linkedIn}"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="${gitHub}"><i class="fa-brands fa-github"></i></a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Work Section -->
    <section id="Work">
      <h2><i class="fa-solid fa-briefcase"></i> My Work <i class="fa-solid fa-briefcase"></i></h2>
      <div class="container-fluid">
        <!-- This is the row for the work section -->
        <div class="row">
          <!-- This sizes the card -->
          ${portfolio.map(item => {
            `<div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card work-card" id="${item.name}">
              <div class="work-card-body card-body d-flex flex-column justify-content-center align-items-center">
                <div class="work-label d-flex flex-column justify-content-center align-items-center">
                  <h3 class="text-uppercase">${item.name}</h3>
                  <p>${item.description}}</p>
                </div>
                <!-- Stretched link covers the whole card -->
                <a class="stretched-link" href="${item.url}}"></a>
              </div>
            </div>
          </div>`
          }).join("")}
        </div>
      </div>
    </section>
  </main>
  <!-- Footer -->
  <div id="footer-fade"></div>
  <footer>
    <!-- Navbar footer -->
    <nav class="navbar navbar-expand-lg navbar-dark" id="foot-nav">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler02"
        aria-controls="navbarToggler02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler02">
        <a class="navbar-brand" href="#">&copy; Copyright ${fullName} 2023</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#AboutMe">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Work">Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ContactMe">Contact me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="assets/files/${firstName}'s_CV.pdf">Resume</a>
          </li>
          <li class="nav-item">
            <button class="footer-btn btn btn-outline-success my-2 my-sm-0" form="linkedin" type="submit" id="li">
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </li>
          <li class="nav-item">
            <button class="footer-btn btn btn-outline-success my-2 my-sm-0" form="github" type="submit" id="gh">
              <i class="fa-brands fa-github"></i>
            </button>
          </li>
          <li class="nav-item">
            <button class="footer-btn btn btn-outline-success my-2 my-sm-0" form="jump" type="submit" id="r-r">
              <i class="fa-solid fa-question"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <!-- This powers the mystery buttons -->
  <form action="${github}" method="get" id="github"></form>
  <form action="${linkedIn}" method="get" id="linkedin"></form>
  <form action="https://www.youtube.com/watch?v=dQw4w9WgXcQ" method="post" id="jump"></form>
</body>

</html>`,
css: `/* Whole page settings */
body {
    --primary-color: ${colorScheme.color1}};
    --primary-color-light: ${colorScheme.color1};
    --secondary-color: ${colorScheme.color1};
    --secondary-color-light: ${colorScheme.color1};
    --tertiary-color: ${colorScheme.color1};
    --tertiary-color-light: ${colorScheme.color1};
    background-color: var(--primary-color-light);
    border-radius: 0;
    color: var(--primary-color);
    height: 100%;
    width: 100%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 18px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-style: normal;
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 24px;
}

main {
    height: 100%
}

/* Main header for the page */
nav {
    background-color: var(--secondary-color);
    color: var(--secondary-color-light);
}

/* This gives the brand a different color to the rest of the items */
.navbar-brand {
    color: var(--primary-color-light) !important;
}

.navbar-brand:hover {
    color: var(--secondary-color-light) !important;
}

/* Items on nav bar */
nav a {
    color: var(--secondary-color-light) !important;
    padding:5px;
}
/* Items on nav bar */
nav a:hover {
    color: var(--primary-color-light) !important;
}

/* Jumbotron */
#jumbotron {
    background-image: linear-gradient(var(--secondary-color) 0%, var(--primary-color-light) 100%);
    /* background-color: var(--primary-color); */
    border-radius: 0;
    color: var(--primary-color);
    text-align: center;
}

/* Make the image circular and set size */
#jumbotron img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid var(--primary-color);
}

/* Main section */
main h2 {
    text-align: center;
    margin: 20px
}

/* Me section */
.me-card {
    margin: 20px 5px;
    height: 650px;
    background-color: var(--tertiary-color-light);
    color: var(--tertiary-color);
    padding: 5px;
    border-radius: 10px;
    border: 2px solid var(--tertiary-color);
    transition: all 0.5s ease-in-out;
    text-align: center;
}

.me-card ul {
    list-style: none;
    margin: 0 0;
    padding: 0;
}

.me-card li {
    margin: 10px 0;
}

.me-card i {
    color: var(--tertiary-color) !important;
}

.me-card i:hover {
    color: var(--primary-color) !important;
}

/* Work section - most id specific part is to add designated images */
.work-card {
    height: 300px;
    background-position: center;
    background-size: cover;
    margin: 20px 5px;
    border: 3px var(--tertiary-color) solid;
    /* This makes the background image faded out */
    transition: all 0.5s ease-in-out;
    box-shadow: inset 0 0 0 1000px rgba(23,37,42,.7);
}
/* This removes the tint and changes colour on hover */
.work-card:hover, .work-card:hover .work-label {
    border: 3px var(--tertiary-color-light) solid;
    color: var(--tertiary-color-light);
    background-color: var(--tertiary-color);
    box-shadow: none;
}
/* This is the project labels */
.work-label {
    background-color: var(--tertiary-color-light);
    color: var(--tertiary-color);
    padding: 5px;
    border-radius: 10px;
    border: 2px solid var(--tertiary-color);
    transition: all 0.5s ease-in-out;
    text-align: center;
}

${portfolio.map(item => {
  `
  /* CSS for ${item.name} portforlio card */
  #${item.name} {
    background-image: url(${item.picurl});
  }
  `
}).join("")}

#footer-fade {
    height: 50px;
    background-image: linear-gradient(var(--primary-color-light) 0%, var(--secondary-color) 100%);
    margin-bottom: 0;
}

/* Footer */
footer {
    background-color: var(--secondary-color);
    color: var(--secondary-color-light);
    height:40px;
    margin-top: 0px;
    text-align: center;
}

.nav-label {
    color: var(--secondary-color-light) !important;
}

/* Section to add requied functionality to button */
.footer-btn {
    background-color: var(--primary-color) !important;
    color: var(--primary-color-light) !important;
    border: none !important;
    box-shadow: none !important;
    margin: 2px 5px;
    transition: all 0.5s ease-in-out;
    /* round buttons */
    border-radius: 50%;
}

.footer-btn:hover {
    box-shadow: 0 0 2px 2px var(--secondary-color-light) !important;
    color: var(--secondary-color-light) !important;
}

/* Media queries to neaten the about me section when resizing */

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .me-card {
        height: 720px;
    } 
}

@media only screen and (max-width: 767px) {
    .me-card {
        height: auto;
    } 
}`, javascript: '', secondHTML: 
  `<html lang="en-gb">
  <head>
    <meta charset="UTF-8">
    <!-- Page was not responsive without this -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${fullName} / Portfolio Creater</title>
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  
  <body>
    <!-- main logo / nav -->
    <header>
      <h1>Portfolio Creater</h1>
      <nav>
        <!-- id of section after the hash to move the page -->
        <a href="#about">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a href="assets/files/firstName's_CV.pdf">Resume</a>
      </nav>
    </header>
  
    <!-- hero banner -->
    <section class="hero-banner">
      ${`<img src= ${(headshot) ? "assets/images/headshot.jpg": "http://placekitten.com/200/300"} alt="Image of me" />`}
      <h2>Front End Web developer</h2>
    </section>
  
    <main class="page-wrapper">
      <!-- about me -->
      <section class="page-section sectionHeading about" id="about">
        <h2>About Me</h2>
      </section>
      <section class="page-section sectionContent about" id="aboutContent">
        <h2 class="hide">About Me</h2>
        <p>My name is ${fullName}, and this page is a portfolio of some of my projects. I have used HTML, CSS and
          Javascript in the making of the projects listed below.</p>
        <br />
        <p>${bio}</p>
        <br />
        <p>This page uses my current favourite CSS property, Linear Gradient which can be seen in the banner below the
          header of this page.</p>
        <br />
        <p>Outside of web development, I enjoy ${hobbies}.</p>
      </section>
  
  
      <!-- portfolio container -->
      <section class="page-section sectionHeading work" id="work">
        <h2>Work</h2>
      </section>
      <section class="page-section sectionContent work" id="workGrid">
        <a href="https://bowseruk.github.io/css-cheatsheet/" id="portfolio1" class="workGridArea">
          <div class="workTitle">
            <h3>CSS Cheatsheet</h3>
            <p>This page was created from scratch to match a mockup.</p>
          </div>
        </a>
        <a href="https://bowseruk.github.io/horiseon/" id="portfolio2" class="workGridArea">
          <div class="workTitle">
            <h3>Horiseon</h3>
            <p>This page was modified to improve accessibility.</p>
          </div>
        </a>
        <a href="https://bowseruk.github.io/generic-landing-page/" id="portfolio3" class="workGridArea">
          <div class="workTitle">
            <h3>Landing Page</h3>
            <p>This landing page was created from scratch.</p>
          </div>
        </a>
        <a href="https://bowseruk.github.io/zen-garden/" id="portfolio4" class="workGridArea">
          <div class="workTitle">
            <h3>Zen Gardens</h3>
            <p>CSS Zen Gardens Activity.</p>
          </div>
        </a>
        <a href="https://bowseruk.github.io/prework-study-guide/" id="portfolio5" class="workGridArea">
          <div class="workTitle">
            <h3>Prework Study Guide</h3>
            <p>This page was created during the prework.</p>
          </div>
        </a>
      </section>
      <!-- contact -->
      <section class="page-section sectionHeading contact" id="contact">
        <h2>Contact Me</h2>
      </section>
      <section class="page-section sectionContent contact" id="contactContent">
        <!-- Placeholder phone number -->
        <h2 class="hide">Contact Me</h2>
        <a href="tel:${mobile}}">mobile</a>
        <a href="mailto:${email}">email</a>
        <a href="${linkedIn}">LinkedIn</a>
        <a href="${gitHub}">GitHub</a>
      </section>
    </main>
  </body>
  
  </html>`}
}
