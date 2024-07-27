It is okay if you want to seperate sidebar relevant elements into a seperate file, the header nav into a seperate file.

# global css

```css
/* globals.css */
@import "@fontsource-variable/material-symbols-rounded"; /* Ensure this is at the top */
@font-face {
  font-family: "Orbitron";
  src: url("/fonts/Orbitron-VariableFont_wght.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Alata";
  src: url("/fonts/Orbitron-VariableFont_wght.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Blanka";
  src: url("/fonts/Blanka.otf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
/* material-symbols-rounded-latin-wght-normal */
@font-face {
  font-family: 'Material Symbols Rounded Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 100 700;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/material-symbols-rounded:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

body {
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.15em;
}
/* Global styles for all h1 elements */
h1 {
  color: #ffffff;
  font-size: 2em;
  /* padding: 20px 0; */
}

h2 {
  font-size: 1.6em;

}

p {
  color: #ffffff;
  font-size: 1em;

}

nav a:hover {
  background-color: #333;
  color: #fff;
}
.sidebar {
  /* font-family: 'Orbitron'; */
  position: fixed;
  left: -30vw;
  width: 30vw;
  max-width: 30vw;
  height: 100%;
  background-color: #252525;
  color: white;
  transition: left 0.3s ease;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  border-style: groove;
  overflow: hidden;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This ensures that the space is distributed between the elements */
}
.sidebar.open {
  left: 0;
}
.sidebar-content h1 {
  margin-top: 0;
}
.sidebar-content p, .sidebar-content q, .sidebar-content img {
  margin: 20px 0;
}
.sidebar img {
  width: 30vw;
  height: auto;
}


.material-symbols-rounded {
  font-family: "Material Symbols Rounded Variable";
  font-weight: normal;
  font-style: normal;
  font-size: 48px; /* Preferred icon size */
  display: inline-block;
  line-height: 2;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: blanchedalmond;
}
.material-symbols-rounded:hover {  color: rgb(167, 100, 0);}

.sidebar-content {
  flex-grow: 1;
}

.sidebar-icons {
  display: inline-flex;
  gap: 30px; /* Adjust gap as needed */
  text-align: center;
  padding-bottom: 80px;
  justify-content: center;

}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit; /* Use this to keep the icon color consistent with the text color */
}

.icon-link:hover {
  color: #000; /* Adjust hover color as needed */
}

.sidebar-icons .icon {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  color: blanchedalmond;
}

.edible-content {
  position: fixed;
  bottom: 30px;
  left: 20px;
  width: 40px; /* Adjusted to accommodate the icon size */
  height: 40px; /* Adjusted to accommodate the icon size */
  padding: 0; /* Removed padding for proper centering */
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #009ca1;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  transition: margin-left 0.3s ease;
  margin: 0;
  /* z-index: 9999; */
}

.hamburger-icon {
  font-size: 30px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
#main-content.open {
margin-left: 30vw;

}


/* Media query for small devices */
@media (max-width: 768px) {
  .sidebar {
      max-width: 80%;
  }
  
  .sidebar.open {
      width: 80vw;
  }
  
  #main-content.open {
      margin-left: 80vw;
  }
  }
  
a:link {
  color: #ffffff; /* or any color you prefer */
  text-decoration: none; /* if you want to remove the underline */
}

/* Visited link */
a:visited {
  color: #ffffff; /* or any color you prefer */
  text-decoration: none; /* if you want to remove the underline */
}

/* Mouse over link */
a:hover {
  color: #e5a0f3; /* or any color you prefer */
  text-decoration: none; /* if you want to remove the underline */
}

/* Selected link */
a:active {
  color: #e5a0f3; /* or any color you prefer */
  text-decoration: none; /* if you want to remove the underline */
}
.button {
  display: inline-block;
  padding: 4px 6px;
  font-size: 16px;
  color: white; /* Text color */
  background-color: #00eeff; /* Background color */
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none; /* Remove underline */
  cursor: pointer;
}

/* Hover effect */
.button:hover {
  background-color: #0056b3; /* Darker background color on hover */
}

/* Active effect */
.button:active {
  background-color: #004494; /* Even darker background color on active */
}

/* Focus effect */
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Blue outline */
}

footer, .sidefoot {
  background-color: #080f22; 
  color: white; /* Footer text color */
  padding: 3px;
  text-align: center;
  bottom: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  font-size: 25px;
  z-index: 100;

}

```

# general styles

```css
/* styles.css */
@font-face {
    font-family: "Orbitron";
    src: url("/fonts/Orbitron-VariableFont_wght.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Alata";
    src: url("/fonts/Orbitron-VariableFont_wght.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Blanka";
    src: url("/fonts/Blanka.otf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
/* Reset some default styles ?this is the correct css */
body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
    
}
body {
    font-family: 'Blanka', sans-serif;
    /* line-height: 1.5; */
    text-align: center; /* Center the text in the body */
        display: flex;
    flex-direction: column;
    overflow-x: hidden; /* Prevent horizontal overflow */
    box-sizing: border-box; 
}


/* Header styles */
header {
    background-color: #333;
    color: #fff;
    padding: 10px 0; /* Increase padding for better visual separation */
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;

    width: 100%;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
}
nav ul {
    list-style: none;
    
    
}
nav ul li {
    display: inline-block;
    /* margin-right: 0px; */
    padding-left: 20px;
    padding-right: 20px;
  
    
   

}

nav a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 15px;
    margin: 10px;
    background-color: #ffffff;

    transition: background-color 0.3s, color 0.3s;

}

nav a:hover {
    background-color: #333;
    color: #fff;
}
.burger-icon {
    display: none;
    font-size: 30px;
    cursor: pointer;
}


/* Main content styles */
main {
    width: 100%; /* Ensure the main content takes up full width */
    /* padding: 20px;  */ /*this creates a white bar on the right*/
    flex: 1;

    height: calc(100vh - 60px); /* Set the height of the main content to 100% of the viewport height */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    padding: 0;
    margin: 0;
    overflow: hidden;
}
section {
    margin-bottom: 10px;
    margin-top: 10px;
    /* overflow-x: hidden;
    flex-direction: column; */
    
}
/* Page Footer styles - not sidebar footer */
.pagefooter {
    background-color: #000000; /* Footer background color */
    color: white; /* Footer text color */
    font-size: large;
    padding: 20px 0;
    text-align: center;
    bottom: 2px;
    /* position: absolute; */
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
}


/* General styles */
h1 {
    color: #ffffff;
    font-size: 2em; /* Larger font size for the title */
    padding: 20px 0; /* Padding for the title */
}
p {
    color: #ffffff;
}

/* Responsive styles */
@media only screen and (max-width: 900px) {
    nav {
        flex-direction: column;
    }

    nav ul {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: #333;
        position: absolute;
        top: 60px;
        left: 0;
        z-index: 1000;

    }

    nav ul.active {
        display: flex;
    }

    nav ul li {
        margin: 10px 0;

    }

    nav ul li a {
        color: #fff;
        border: none;
        background: none;
    }

    

    .burger-icon {
        display: block;
    }
}

hr {
    height: 4px;
    background-color: brown;
    border-color: brown;
    margin: 35px
  }
a {
    color: black;
  }
  
  a:visited {
    color: black;
  }
  
  a:hover {
    color: brown;
  }
  
  a:active {
    color: brown;
  }
/* General styles for hero image */
.heroimg img {
    width: 60vw;
    height: auto; /* Maintain aspect ratio */
    display: block; /* Remove any default inline spacing */
    margin: 0 auto;
    padding-top: 50px;
   

}

/* Responsive styles for hero image on smaller devices */
@media only screen and (max-width: 900px) {
    .heroimg {
        flex-direction: column;
        width: 100vw;
        max-width: 100%;
        overflow: hidden; /* Prevent overflow */
    }
}
@media only screen and (max-width: 900px) {
    main {
       width: fit-content;
    }}
```

# sponsor card css

```css
<!-- sponsor-card.css -->
/* Sponsor Card Styles */
.sponsor-card {
    text-align: center;
    max-width: 400px;
    margin: 0 auto; /* Center the card horizontally */
    padding: 25px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.sponsor-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    /* x-index: -5.5px; */
}

.sponsor-card img {
    max-width: 100%;
    border-radius: 50%; /* Make the image circular */
}

.sponsor-card h2 {
    color: #333;
    font-size: 1.5em;
    margin-top: 10px;
}

.sponsor-card p {
    color: #555;
}

.sponsor-button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.sponsor-button:hover {
    background-color: #0056b3;
}

```

# page specific html

```html
   <link rel="stylesheet" href="../../../../../styles/styles.css" />
    <link rel="stylesheet" href="../../../../../styles/global.css" />
  </head>
  <body>
    <!-- App Overlay -->
    <header>
      <nav>
        <div class="burger-icon" id="burger-icon">&#9776;</div>
        <ul id="nav-menu">
          <li><a href="../../../../../index.html">Home</a></li>
          <li><a href="../">Back</a></li>
          <li><a href="./index.html">Restart</a></li>
        </ul>
      </nav>
    </header>

    <!-- SIDEBAR -->
    <div class="sidebar" id="sidebar">
      <div class="sidebar-content">
        <h1>Part 09 - Game</h1>
        <p>In this lesson we build a 2d game and animate everything</p>
        <p>Responsive Keyboards Controls</p>
        <p>Animation Spritesheets</p>
        <p>Parallax Background</p>
        <p>Game Skins</p>
        <p>Particle Effects</p>
        <p>Enemy Variants</p>
        <q
          >Art courtesy of
          <a href="https://bevouliin.com/category/free_game_asset/"
            >Bevouliin</a
          ></q
        >
      </div>
      <hr/>
      <p>
        See the README for more
        <a
          href="https://github.com/ArtechFuz3D-Studio/FreeCodeCampCourses/tree/gh-pages/src/JS/YTCourses/FrankLabsCourse/Part09"
          class="button"
          >here</a
        >
      </p>
      <div class="sidebar-icons">
        <a
          href="https://github.com/ArtechFuz3D-Studio/FreeCodeCampCourses/tree/gh-pages/src/JS/YTCourses/FrankLabsCourse/Part09/"
          target="_blank"
          title="GitHub"
          class="icon-link"
        >
          <span class="material-symbols-rounded">code</span>
        </a>
      </div>
      <footer>
        <p>&copy; 2024 ArtechFuz3D. All rights reserved.</p>
      </footer>
      <!-- SIDEBAR SCRIPT -->
    </div>
    <div class="edible-content" id="main-content">
      <div class="hamburger-icon" id="hamburger">&#9776;</div>
    </div>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("burger-icon");
        const navMenu = document.getElementById("nav-menu");

        hamburger.addEventListener("click", function () {
          navMenu.classList.toggle("active");
        });
      });
    </script>
    <!-- RESPONSIVE NAV SCRIPT -->
    <script>
      document
        .getElementById("hamburger")
        .addEventListener("click", function () {
          var sidebar = document.getElementById("sidebar");
          var mainContent = document.getElementById("main-content");
          sidebar.classList.toggle("open");
          mainContent.classList.toggle("open");
        });
    </script>
```

# root html

```html

<head>
    <!-- other meta -->

    <!-- Stylesheets -->
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="styles/sponsor-card.css">

    <!-- Open Graph Image -->
    <meta property="og:image" content="https://artechfuz3d-studio.github.io/FreeCodeCampCourses/public/hero.png">
    <meta property="og:image:secure_url" content="https://artechfuz3d-studio.github.io/FreeCodeCampCourses/public/hero.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:type" content="image/jpg">

</head>

<body>
    <!-- Navigation bar -->
    <header>
        <nav>
            <div class="burger-icon" id="burger-icon">&#9776;</div>
            <ul id="nav-menu">
                <li ><a  href="/index.html">Home</a></li>
                <li><a href="/FreeCodeCampCourses/src/JS/index.html">Javascript</a></li>
                <li><a href="https://portfolio.artechfuz3d.xyz">Portfolio</a></li>
                <li><a href="/FreeCodeCampCourses/src/Contact/index.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main content area -->
    <main>

        <!-- Hero Section -->
        <section class="heroimg">
            <img src="/hero.png" alt="Sponsor Logo">
        </section>
        <hr />

        <!-- Sponsor Me Card Section -->
        <section class="sponsor-card">
            <img src="/coffeme.jpg" alt="Sponsor Logo">
            <h2>Buy me a <strong>coffee</strong></h2>
            <p>Support my journey and become a sponsor. Your contribution makes a difference!</p>
            <a href="https://beacons.ai/artechfuz3d"><button class="sponsor-button">Coffeme</button></a>
        </section>

    </main>

    <!-- Footer -->
    <footer className="pagefooter">
        <p>&copy; 2024 ArtechFuz3D. All rights reserved.</p>
    </footer>

    <!-- Scripts -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('burger-icon');
            const navMenu = document.getElementById('nav-menu');

            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
        });
    </script>
    ```
