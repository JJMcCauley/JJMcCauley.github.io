const skillsDescription = document.getElementById("skill-description");
const skillNames = document.querySelectorAll(".text-border-accent")

const htmlDescription = `HTML, or Hypertext Markup Language, is the language used to build the basic structure of a website.`
const cssDescription = `CSS, or Cascading Style Sheets, is what's responsible for the look and feel of a website as well as providing basic interactivity.`
const jsDescription = `JS, or JavaScript, is a programming language that provides most of the functionality and user interactivity of a website such as programming teh behavior of buttons.`
const sassDescription = `Sass, or Syntantically Awesome Stylesheets, is an extension of CSS that allows the look of a website to be written using more powerful programming tools which is then compiled into normal CSS.`
const apiDescription = `API, or application programming interface, is a tool that enables websites to communicate and share information with eachother, such as populating a website with information from an external database`
const bootstrapDescription = `The Bootstrap Framework is a free open-source template library that helps a front end web developer get websites up and running faster.`

let description = htmlDescription;

skillsDescription.innerText = description;

skillNames.forEach((element)=>{
    element.addEventListener("mouseenter", (e) => {
    let target = e.target.innerText;
    switch (target) {
        case 'HTML':
            description = htmlDescription;
            skillsDescription.innerText = description;
            break;
        case 'CSS':
            description = cssDescription;
            skillsDescription.innerText = description;
            break;
        case 'JavaScript':
            description = jsDescription;
            skillsDescription.innerText = description;
            break;
        case 'Sass':
            description = sassDescription;
            skillsDescription.innerText = description;
            break;
        case 'API Interaction':
            description = apiDescription;
            skillsDescription.innerText = description;
            break;
        case 'Bootstrap Framework':
            description = bootstrapDescription;
            skillsDescription.innerText = description;
            break;
    }
    })
})


