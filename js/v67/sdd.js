document.title="sachin nr"
document.body

// document.body
// <body>​…​</body>​<script src=​"./​sdd.js">​</script>​<div class=​"container">​…​</div>​<div class=​"box">​box1​</div>​<div class=​"box">​box2​</div>​<div class=​"box">​box3​</div>​<div class=​"box">​box4​</div>​<div class=​"box">​box5​</div>​</div>​</body>​

//////////////////////////////////////////////////////////

// document.body.childNodes
// NodeList(5) [text, script, text, div.container, text]0: text1: script2: text3: div.container4: textlength: 5[[Prototype]]: NodeList


// document.body.childNodes[1]
// <script src=​"./​sdd.js">​</script>​


// document.body.childNodes[2]
// #text


// document.body.childNodes[3]
// <div class=​"container">​…​</div>​

////////////////////////////////////////////////////////////

// let cont=document.body.childNodes[1]
// undefined

// cont
// <div class=​"container">​…​</div>​

// cont.firstChild
// #text

// cont.lastChild
// #text

// cont.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

////////////////////////////////////////////////////////////

// let cont=document.body.childNodes[1]
// undefined

// cont.firstElementChild
// <div class=​"box">​box1​</div>​

// cont.lastElementChild
// <div class=​"box">​box5​</div>​

// cont.lastElementChild.style.backgroundColor = "red"
// 'red'

///////////////////////////////////////////////////////////

// document.body.firstElementChild
// <div class=​"container">​…​</div>​

// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// document.body.firstElementChild.children[0]
// <div class=​"box">​box1​</div>​

// document.body.firstElementChild.children[1]
// <div class=​"box">​box2​</div>​

// document.body.firstElementChild.children[4]
// <div class=​"box">​box5​</div>​

//document.body.firstElementChild.children[2]
// <div class=​"box">​box3​</div>​

// document.body.firstElementChild.children[2].previousElementSibling
// <div class=​"box">​box2​</div>​

//document.body.firstElementChild.children[2].nextElementSibling
// <div class=​"box">​box4​</div>​

// document.body.firstElementChild.children[2].nextSibling
// #text