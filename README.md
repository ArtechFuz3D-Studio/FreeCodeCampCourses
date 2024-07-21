# FreeCodeCampCourses

[Javascript](/FreeCodeCampCourses/JS)

## Featured

[Music Player](https://artechfuz3d-studio.github.io/FreeCodeCampCourses/JS/Alg&DataStruct/MusicPlayer/index.html)

[Sprite Animations](https://artechfuz3d-studio.github.io/FreeCodeCampCourses/JS/YTCourses/FrankLabsCourse/Part01/index.html)

### [*Buy me a coffee*](https://beacons.ai/artechfuz3d)

keep the naming convention of my classnames for the burger icons, the responsive burger is called burger(styled in styles.css) whereas the sidebar content is called hamburger and in globals. both files have footer styling, globals is for the sidebar footer.
use this to style the burger correctly

/* Reset some default styles */
body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Header styles */
header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    position: relative;

}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin-right: 20px;
}

nav a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #fff;
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

/* Responsive styles */
@media only screen and (max-width: 600px) {
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

/* Main content styles */
main {
    padding: 20px;
    flex: 1;
    overflow-y: scroll;
    height: 100vh;
}

/* Footer styles */
footer {
    background-color: #333;
    color: #ffffff;
    padding: 20px 0;
}

h1 {
    color: #333;
    font-size: 2em;
    padding: 20px 0;
}

p {
    color: #555;
}

hr {
    height: 2px;
    background-color: brown;
    border-color: brown;
    margin: 35px;
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

.heroimg {
    margin: 0 auto;
}

