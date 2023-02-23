/* menu header interaction */

const aboutusButton = document.getElementById("aboutus-button");
const homeButton = document.getElementById("home-button");
const blogButton = document.getElementById('blog-button');
const contactButton = document.getElementById('contact-button');
const content = document.querySelector(".login-right-content");
const contentChange = document.querySelector(".login-right-img");

/* function to change right content */

const changeContentHome = () => {
    content.style.opacity = 0;
  
    setTimeout(function () {
      contentChange.innerHTML = `<div class="login-right-img">
      <img src="./assets/login-right-img.svg" alt="Login Image" />
    </div>`;
  
      content.style.opacity = 1;
    }, 500)
  };
  
  homeButton.addEventListener("click", changeContentHome);

const changeContentAboutus = () => {
  content.style.opacity = 0;

  setTimeout(function () {
    contentChange.innerHTML = `<div id="aboutus-content">
    <img src="./assets/aboutus.svg" alt="aboutus-img"></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro temporibus eveniet id praesentium placeat doloremque repudiandae mollitia omnis, itaque reprehenderit nisi tempora, doloribus voluptates. Commodi eligendi laboriosam impedit fugit? Beatae porro temporibus eveniet id praesentium placeat doloremque repudiandae mollitia omnis, itaque reprehenderit nisi tempora, doloribus voluptates. Commodi eligendi laboriosam impedit fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro temporibus eveniet id praesentium placeat doloremque repudiandae mollitia omnis, itaque reprehenderit nisi tempora, doloribus voluptates. Commodi eligendi laboriosam impedit fugit?</p>
    </div>`;

    content.style.opacity = 1;
  }, 500)
};

aboutusButton.addEventListener("click", changeContentAboutus);

const changeContentBlog = () => {

    content.style.opacity = 0;

    setTimeout(function () {

        contentChange.innerHTML = `<div id="blog-content">
        <img src="./assets/blog.svg" alt="blog-img"></img>
        <a href="#">Blog Link</a></div>`

        content.style.opacity = 1;
    }, 500)
};

blogButton.addEventListener('click', changeContentBlog);

const changeContentContact = () => {

    content.style.opacity = 0;

    setTimeout(function() {

        contentChange.innerHTML = `<div id="contact-content">
        <img src="./assets/contact.svg" alt="contact-img"></img>
        <p>Contact us: <a href="#">email@email.com.br</a></p></div>`

        content.style.opacity = 1;
    }, 500)
};

contactButton.addEventListener('click', changeContentContact);


