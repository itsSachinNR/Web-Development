//business name genertor

// function adjective(params) {
//     let a="crazy"
//     let b="Amazing"
//     let c="fire"
//     return ((a || b || c))
// }
// rand
// function shop(p){
//     let d="engine"
//     let e="food"
//     let f="garment"
// }

// function last(params) {
//     let g="bros"
//     let h="limited"
//     let i="hub"
// }


function getrandomadj() {

    let randomnum = Math.floor(Math.random() * 5) + 1;

    const adjective = {
        1: "crazy",
        2: "Amazing",
        3: "fire",
        4: "cool",
        5: "great"
    };
    return adjective[randomnum];
}
function getrandomshop() {

    let randomnum = Math.floor(Math.random() * 5) + 1;

    const shop = {
        1: "engine",
        2: "food",
        3: "garment",
        4: "factory",
        5: "tech"
    };
    return shop[randomnum];
}
function getrandomlast() {

    let randomnum = Math.floor(Math.random() * 5) + 1;

    const last = {
        1: "bros",
        2: "limited",
        3: "hub",
        4: "press",
        5: "loop"
    };
    return last[randomnum];
}
let randadj = getrandomadj();
let randshop = getrandomshop();
let randlast = getrandomlast();




console.log(`${randadj} ${randshop} ${randlast}`)
