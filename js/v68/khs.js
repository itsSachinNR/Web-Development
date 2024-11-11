// document.body.childNodes[1].childNodes[5].style.backgroundColor="blue"
// 'blue'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the classes

// let sunil=document.getElementsByClassName("box")
// console.log(sunil)
// sunil[2].style.backgroundColor="blue"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the id

// document.getElementById("bee").style.backgroundColor="blue"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the query selectors

// document.querySelector(".box").style.backgroundColor="blue"
// console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "blue"
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the name tags

// document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div.box, div#bee.box, div.box, div.box, bee: div#bee.box]0: div.container1: div.box2: div.box3: div.box4: div.box5: div#bee.box6: div.box7: div.boxbee: div#bee.boxlength: 8[[Prototype]]: HTMLCollection



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the matches

// let e=document.getElementsByTagName("div")
// e[5].matches("#bee")
// true
// e[4].matches("#bee")
// false


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the closest

// let e=document.getElementsByTagName("div")
// undefined
// e[4].closest("#bee")
// null
// e[4].closest(".container")
// <div class=​"container">​…​</div>
// e[4].closest("html")
// <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//targeting the contains

// let e=document.getElementsByTagName("div")
// document.querySelector(".container").contains(e[2])
// true
// document.querySelector(".container").contains(e[9])
// false
// document.querySelector(".container").contains(e[0])
// true
// document.querySelector(".container").contains(document.querySelector("body"))
// false
// document.querySelector("body").contains(document.querySelector(".container"))
// true