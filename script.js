var courses = [
    {
        name: "Complete Ract JS Course",
        price: "2.1"
    },
    {
        name: "Complete MERN Course",
        price: "2.9"
    },
    {
        name: "Complete JavaScript Course",
        price: "2.5"
    },
    {
        name: "Complete C++ Course",
        price: "2.7"
    }
]



function generateList (){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = " ";
    courses.forEach( course =>{
        const li = document.createElement("li");
        li.classList.add("list-group-items");
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        
        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode(" $ " + course.price)
        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li);

    })
    }
// generateList();

window.addEventListener("load", generateList);

const button1 = document.querySelector(".sort-btn");
button1.addEventListener("click", () =>{
    courses.sort((a,b) => a.price - b.price);
    generateList();
})
const button2 = document.querySelector(".desc-btn");
button2.addEventListener("click", () =>{
    courses.sort((a,b) => b.price - a.price);
    generateList();
})