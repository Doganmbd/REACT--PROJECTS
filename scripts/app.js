const Data = [
    {
        id: 1,
        category: 'breakfast',
        title: 'buttermilk pancakes',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg',
        text:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`
    },
    {
        id: 2,
        category: 'lunch',
        title: 'diner double',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg',
        text:  `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`
    },
    {
        id: 3,
        category: 'shakes',
        title: 'godzilla milkshake',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg',
        text:  `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
    },
    {
        id: 4,
        category: 'breakfast',
        title: 'country delight',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-4.jpeg',
        text:  `Shabby chic keffiyeh neutra snackwave beef belly shoreditch. Prism austin mlkshk truffaut,`
    },
    {
        id: 5,
        category: 'lunch',
        title: 'egg attack',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-5.jpeg',
        text:  `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
    },
    {
        id: 6,
        category: 'shakes',
        title: 'oreo dream',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-6.jpeg',
        text:  `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
    },
    {
        id: 7,
        category: 'breakfast',
        title: 'bacon overflow',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-7.jpeg',
        text:  `carry jianbing normcore freegan. Viral single-origin coffee live-edge, beef belly cloud bread iceland put a bird`
    },
    {
        id: 8,
        category: 'lunch',
        title: 'american classic',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-8.jpeg',
        text:  `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`
    },
    {
        id: 9,
        category: 'shakes',
        title: 'quarantine buddy',
        price: 15,
        img: 'https://react-projects-5-menu.netlify.app/images/item-9.jpeg',
        text:  `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
    },
];
/* Checklist:
Benden istenen ne?
1.Data'yi display et.(yani menü sayfasini browser'da gör.)
    a- Data'yi bos bir listeye ata.(Data fetch/async)(bunu bir function'da yap)
    b- Data'nin icindeki degiskenleri HTML icine göm.(${item.id}... gibi)(bunu bir function'da yap)
        1- Data'nin icindeki degiskenleri map methodu ile gömebiliriz. !(Ama map her zaman liste return eder.)
2. Display edildikten sonra bu sayfanin amaci ne?
    a-Eger input manipülasyonuysa:
        1. input'u cek ve funtiona yolla.(bir function)
        2. function icinde datayi güncelle ve display ettigin function a yolla.Array
    b- Eger button'a görev vermek ise:
        1. tek button ise event olusturup function calistir. Bu function'da manipüle ettigin datayi display function'a yolla.(bir function)
        2. Coklu button ise:
            a. button lari forEach ile event ekle. event in icinde function calistir ve bu function da datayi manipüle et. (bir function)
            b. manipüle ettigin datayi display ettigin function a yolla.
thumbsup
thumbsdown
man-raising-hand

ag yapisi budur gerisi teferruattir
önüne cikan sorunlarla google ile bogusmacadir. her proje icin aynisi gecerlidir.
hali hazirda bir display varsa o proje zaten bitmistir
arada ki yogurt yeme sekli size kalmis
yarin isterseniz üzerinden gecip tic-tac-toe yapabiliriz

 */

const menu = document.querySelector(".menu-section");
let currentData = [];





function setList(result) {
    const menuSection = result.map((item)=>{
        return `
        <div class="menu-item">
            <img src= ${item.img} alt=${item.id} class="photo"/>
            <div class="item-info">
                <header>                    
                    <h2>${item.title}</h2>
                    <h2 class="price">${item.price}</h2>
                </header>
                <p class="item-text">${item.text}</p>
            </div>
        </div>
        `
    }).join("");
    menu.innerHTML = menuSection;
    //console.log(typeof menuSection);
}



function loadList(){
    currentData = Data;
    setList(currentData);
}

loadList ();


function handleEvent(str){
    //console.log(typeof str);
    let filteredData = Data.filter(item=>{
        return item.title.includes(str);
    });
    //for (let i = 0; i < currentData.length; i++) {
    //    const element = currentData[i];
    //    console.log(str === currentData[i].title);
    //    if (currentData[i].title.includes(str)) {
    //        filteredData.push(currentData[i])
    //    }
    //}
    console.log(filteredData);
    setList(filteredData);
}


let search1 = document.querySelector(".input");
search1.addEventListener("keyup", (e)=>{
    handleEvent(e.target.value.toLowerCase())
})


function createButtons(){
    let div = document.createElement("div");
    div.className = "btn-area"
    let btn0 = document.createElement("button");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    btn0.innerText = "all"
    btn1.innerText = "breakfast";
    btn2.innerText = "lunch";
    btn3.innerText = "shakes";
    div.appendChild(btn0)
    div.appendChild(btn1);
    div.appendChild(btn2);
    div.appendChild(btn3);
    let form = document.querySelector("#form1");
    form.appendChild(div);
    let container = document.querySelector(".form-container");
    container.appendChild(form);
    
}

createButtons();


let categories = document.querySelectorAll("button")
console.log(categories)

categories.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        
        const category = e.target.innerText
        
        const menuCategory = Data.filter((item => {
            if(item.category === category){
                return item
            }
            
        }))
        if(category === "all"){
            setList(Data)
        }else{
            setList(menuCategory)
        }
        
    })
})

