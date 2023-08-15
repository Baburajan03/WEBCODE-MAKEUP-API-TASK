let container1 = document.createElement('div')
container1.classList.add('container')
document.body.appendChild(container1)

let row1 = document.createElement('div')
row1.classList.add('row','m-4','white')
row1.innerHTML = `<ul type="none" class="d-flex">
<li class="ms-3"><a                   href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/HOME/index.html"><img  class="image mt-3" src="./makeup icon.jpg" ></a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/HOME/index.html" >Home</a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/BRANDS/index.html">Brands</a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/PRODUCTS/index.html">Products</a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/CONTACT%20US/index.html">ContactUs</a></li>
</ul>`
container1.appendChild(row1)

let row2 = document.createElement('div')
row2.classList.add('row')
row2.setAttribute('id','row2')
container1.appendChild(row2)

async function fetchdata(){
    try{
        let response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        let data = await response.json()
        return data
       
    }
    catch(error){
    }
}

async function getdetailsbybrands(){
   
        let getdata = await fetchdata()

        let rows = document.getElementById('row2')
        
        getdata.forEach((e) => {
    
        let column1 = document.createElement('div')
        column1.setAttribute('class','col-6')
        column1.setAttribute('id','column')
        rows.appendChild(column1)
        
        let column2 = document.createElement('div')
        column1.appendChild(column2) 
    
        let column3 = document.createElement('div')
        column3.classList.add('card','styles')
        column2.appendChild(column3)
    
        let heading1 = document.createElement('h6')
        heading1.classList.add('card-title')
        heading1.innerHTML = `<h4>${e.brand}</h4> </br>
        ${e.product_type}`
        column3.appendChild(heading1)
    
        let image = document.createElement('img')
        image.setAttribute('src',`${e.image_link}`)
        image.setAttribute('alt','product image not available')
        image.classList.add('card-img-top','p-3')
        column3.appendChild(image)
    
        let column4 = document.createElement('div')
        column4.setAttribute('class','card-body')
        column3.appendChild(column4)
    
        let heading2 = document.createElement('h6')
        heading2.setAttribute('class','adjust')
        heading2.innerHTML = `<b>Prize : </b> ${e.price} ${e.price_sign}`
        column4.appendChild(heading2)
    
        let heading3 = document.createElement('h6')
        heading3.setAttribute('class','adjust')
        heading3.innerHTML = `<b>Product Link :</b> <a class="underline"  href="${e.product_link}">${e.product_link}</a></br> </br>
        <b>Website Link :</b> <a class="underline"  href="${e.website_link}">${e.website_link}</a></br></br> <b>Description :</b> ${e.description}`
        column4.appendChild(heading3)
    
        let button = document.createElement('button')
        button.classList.add('btn','btn-outline-secondary')
        button.innerHTML = "Buy Now"
        column4.appendChild(button)
        rows.appendChild(column1)
    })
    }
    
        getdetailsbybrands()