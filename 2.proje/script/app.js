const container = document.querySelector(".container");
const table = document.querySelector(".table");
let currentBoard = [];
// data şeklinde formatımı displaye yazdırmak için oluşturdum
let board = [
  {
    cell: 0,
  },
  {
    cell: 1,
  },
  {
    cell: 2,
  },
  {
    cell: 3,
  },
  {
    cell: 4,
  },
  {
    cell: 5,
  },
  {
    cell: 6,
  },
  {
    cell: 7,
  },
  {
    cell: 8,
  },
];

//butonları oluş. display etme sağ
function setList(activeBoard) {
  let boardSection = activeBoard.map((item) => {
      return `<button class="btn">${item.cell}</button>`;
    }).join("");
// join ile string yaptı
  table.innerHTML = boardSection;
  container.appendChild(table);
}
// setList()

// datayı fetch etme
loadList();


function loadList() {
    // ana data mı değiştirmememk için data mı  current da atadım.
  currentBoard = [...board]; // seperator metodu board ı değiştirmeden current değiştirdim.
  setList(currentBoard);
}

// html deki buton tagleri liste olarak çektim
let buttons = document.querySelectorAll(".btn");
// oluşturduğum butomnları liste hainde çektim

buttons.forEach((b, index) => {
    // butonlara görev atama yaptım
  b.addEventListener("click", () => {
    handleClick(b, index);
    checkWinner(emptyArr)
  });
});

// butonun görevi butonun tıkladığımda ne olmasını istiyorum
function handleClick(params, index) {
  console.log(params);
  if (params.innerText === "X" || params.innerText === "O") {
    return;
  }
  if (xO === "X") {
    emptyArr[index] = xO;
    params.innerText = xO;
    setTurn("O");
  } else {
    params.innerText = xO;
    emptyArr[index] = xO;
    setTurn("X");
  }
}

let xO = "X";
// x ve o nun değişimi sırayı değiştirme
function setTurn(str) {
  if (xO === "X") {
    return (xO = str);
  }
  return (xO = str);
}

// 9 tane boş oluşturma
let emptyArr = Array(9).fill("");
function checkWinner(arr) {
    //hane karşılaştırması 3 lü karşılaştırma
  let line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // sırayla karşılaştırma yaptım.
  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (arr[a] && arr[a] === arr[b] && arr[c] === arr[a]) {
        
      alert(`winner ${arr[a]}`);
      return arr[a];
    }
  }
}


























/* const container = document.querySelector(".container") ;
const table = document.querySelector(".table") ;
let currentBoard = []
const buttons = document.querySelectorAll(".btn")



// buton yazdıracaz mantiğimiz bir board olacak borddaki her bir haneye rakamlar yazdıracam . ilk işim bir liste(board) oluşturup içerisine sözlükler yazacaz. butonları içerisine atamak . 


let board = [
    {
        cell : 0
        
    },
    {
        cell : 1

    },
    {
        cell : 2

    },
    {
        cell : 3

    },
    {
        cell : 4

    },
    {
        cell : 5

    },
    {
        cell : 6

    },
    {
        cell : 7

    },
    {
        cell : 8

    }

]

// setList func. ile ekrana bastırmak istiyorum.bu board u çevirecez.
// elimizde data var . bu data yı displaye görüntelemenmesini istiyorum . bu yüzden tek tek map edip 
function setList(activeBoard) {
    let boardSection = activeBoard.map((item) => {
        return `
        <button class = "btn">${item.cell}</button>

        `
    }).join("")

// bunuu table in içine atalım ve oarent yapalım
    table.innerHTML = boardSection ;
    container.appendChild(table)

}
// setList()

// yukarıda sadece 9 tane kutucuk oluştuurduk.

loadList()  // bu bir fonk  oldu




function loadList() {
    currentBoard = [...board] ;
    setList(currentBoard)
}

buttons.forEach((btn) => {
    btn.addEventListener("click" , () => {
        handleClick(btn)
    })
})

let xO = "X" ;

function setTurn(str) {
    if(xO === "X" ){
        if(params.innerText === "X" || params.innerText === "O")
        params.innerText  = xO
        return xO = str
    } 
    return xO = str
}

function handleClick(params) {
    
    if (xO === "X") {
        setTurn("O")
    }else {
        setTurn("X")
    }
    
} */