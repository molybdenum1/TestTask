let data = `{
    "loans": [
      {
        "id": "1",
        "title": "Voluptate et sed tempora qui quisquam.",
        "tranche": "A",
        "available": "11,959",
        "annualised_return": "8.60",
        "term_remaining": "864000",
        "ltv": "48.80",
        "amount": "85,754"
      },
      {
        "id": "5",
        "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
        "tranche": "B",
        "available": "31,405",
        "annualised_return": "7.10",
        "term_remaining": "1620000",
        "ltv": "48.80",
        "amount": "85,754"
      },
      {
        "id": "12",
        "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
        "tranche": "C",
        "available": "12,359",
        "annualised_return": "4.80",
        "term_remaining": "879000",
        "ltv": "48.80",
        "amount": "85,754"
      }
    ]
  }`

data = JSON.parse(data)
console.log(data)

let amount = 10000

let curLoans = document.getElementById("cur-loans")

let header = document.createElement('h1');
header.innerText = "Current Loans";
curLoans.appendChild(header)
let div = document.createElement('div');
let i = 1;

for(let arr of data.loans){
    
    let div = document.createElement('div');
    div.className = 'ex'
    let h2 = document.createElement("h2")
    h2.innerText = "Cur Loan" + i
    div.appendChild(h2)
    let span = document.createElement("span")
    span.innerText = "Some describe"
    div.appendChild(span)
    let btn = document.createElement("button")
    btn.innerText = "Invest"
    div.appendChild(btn)
    //console.log(arr)
    for(let key in arr){
        btn.id = arr['id']
        console.log(key + " " + arr[key])
        
    }
    curLoans.appendChild(div)
    i= i+1;
}

let footer = document.createElement('div')
let para = document.createElement('p')
para.innerText = 'total amount availible for investments ' + amount
footer.appendChild(para)
curLoans.appendChild(footer)