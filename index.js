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
        "amount": "81"
      },
      {
        "id": "5",
        "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
        "tranche": "B",
        "available": "31,405",
        "annualised_return": "7.10",
        "term_remaining": "1620000",
        "ltv": "48.80",
        "amount": "22"
      },
      {
        "id": "12",
        "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
        "tranche": "C",
        "available": "12,359",
        "annualised_return": "4.80",
        "term_remaining": "879000",
        "ltv": "48.80",
        "amount": "11"
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
    h2.innerText = "Cur Loan " + i
    div.appendChild(h2)
    let span = document.createElement("span")
    span.innerText = "Some describe"
    div.appendChild(span)
    let btn = document.createElement("button")
    btn.innerText = "Invest"
    btn.id = "invs"
    div.appendChild(btn)
    
    let divForm = document.createElement("div")
    div.appendChild(divForm)
    
    let form = document.createElement("div")
    form.id = "form"
    
    let hh = document.createElement("h2")
    hh.innerText = "loan"
    form.appendChild(hh)
    let ss = document.createElement("span")
    ss.id = "title"
    form.appendChild(ss)
    let pp = document.createElement("p")
    pp.id =  "amount"
    form.appendChild(pp)
    pp = document.createElement("p")
    pp.innerText =  "Invest amount"
    form.appendChild(pp)
    let input =  document.createElement("input")
    input.id =   "input"
    input.type = "number"
    form.appendChild(input)
    let sub = document.createElement("button")
    sub.innerText = "Invest"
    form.appendChild(sub)
    
    divForm.appendChild(form)
   


    btn.addEventListener('click', (e)=>{
      //console.log(e)
      console.log(btn.value)
      let value = btn.value
      if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
      })
    
    //console.log(arr)
    for(let key in arr){
        btn.value = arr['id']
        //console.log(key + " " + arr[key])
        hh.innerText = arr['title']
        ss.innerText = arr['tranche']
        pp.innerText = arr['amount']
        pp.value     = arr['amount']
        console.log(pp.value)
    } 
    curLoans.appendChild(div)
    i= i+1;

    sub.addEventListener('click', (e) => {
      
      let am = pp.value
      let kol = input.value
      console.log(amount - (+am * (+kol)))
      amount = amount - (+am * (+kol))
      form.style.display = "none";
    })
}

let footer = document.createElement('div')
let para = document.createElement('p')
para.innerText = 'total amount availible for investments ' + amount
footer.appendChild(para)
curLoans.appendChild(footer)

