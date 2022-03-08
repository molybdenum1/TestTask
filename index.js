let data = `{
    "loans": [
      {
        "id": "1",
        "title": "Voluptate et sed tempora qui quisquam.",
        "tranche": "A",
        "available": "11.959",
        "annualised_return": "8.60",
        "term_remaining": "864000",
        "ltv": "48.80",
        "amount": "85,754"
      },
      {
        "id": "5",
        "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
        "tranche": "B",
        "available": "31.405",
        "annualised_return": "7.10",
        "term_remaining": "1620000",
        "ltv": "48.80",
        "amount": "85,754"
      },
      {
        "id": "12",
        "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
        "tranche": "C",
        "available": "12.359",
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
////MAIN
    let div = document.createElement('div');
    div.className = 'ex'

    let div1 = document.createElement('div');
    div1.className = 'lside'
    let h2 = document.createElement("h2")
    h2.innerText = "Cur Loan " + i
    div1.appendChild(h2)
    let span = document.createElement("span")
    span.innerText = "Loan details, amounts and values"
    div1.appendChild(span)
    div.appendChild(div1)

    let div2 = document.createElement('div');
    div2.className = 'rside'
    let span1 = document.createElement("p")
    span1.id = "invested"
    span1.innerText = "Invested"
    div2.appendChild(span1)
    let btn = document.createElement("button")
    btn.innerText = "Invest"
    btn.id = "invs"
    div2.appendChild(btn)
    div.appendChild(div2)
 ///////////   
 //////////////////////////
 ///FORM   
    let form = document.createElement("div")
    form.id = "form"
    
    let hh = document.createElement("h2")
    hh.innerText = "Invest in Loan"
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
    sub.id = "sub"
    sub.innerText = "Invest"
    form.appendChild(sub)
    
    curLoans.appendChild(form)
   


    btn.addEventListener('click', (e)=>{
      //console.log(e)
      //console.log(btn.value)
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
        ss.innerText = "Title: " + arr['title']
        pp.innerText = "Amount available: £" + arr['available'].replace(".",",")
        pp.value     = arr['available']
        //console.log(pp.value)
    } 
    curLoans.appendChild(div)
    i= i+1;

    sub.addEventListener('click', (e) => {
      
      let am = pp.value

      let kol = input.value
      console.log(+am)
      amount = amount - (+am * (+kol))
      form.style.display = "none";
      span1.style.display = "block";
      para.innerText = 'Total amount availible for investments ' + amount
    })
}

let footer = document.createElement('div')
footer.className = "footer"
let para = document.createElement('p')
para.innerText = 'Total amount availible for investments ' + amount
footer.appendChild(para)
curLoans.appendChild(footer)

