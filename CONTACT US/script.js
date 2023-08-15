let container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

let row1 = document.createElement('div')
row1.classList.add('row','mt-4')
container.appendChild(row1)

let col1 = document.createElement('div')
col1.classList.add('col-12')
col1.innerHTML = `<ul type="none" class="d-flex">
<li class="ms-3"><a                   href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/HOME/index.html"><img  class="image mt-3" src="./makeup icon.jpg" ></a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/HOME/index.html" >Home</a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/BRANDS/index.html">Brands</a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/PRODUCTS/index.html">Products</a></li>
<li class="ms-3 mt-4"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/CONTACT%20US/index.html">ContactUs</a></li>
</ul>`
row1.appendChild(col1)

let row2 = document.createElement('div')
row2.classList.add('row','ms-5')
row2.innerHTML = `<h2>Contact Us</h2>`
container.appendChild(row2)

let row3 = document.createElement('div')
row3.classList.add('row','m-3')
row3.innerHTML = `<div  class="col-12 ms-5">
<ul type="none">
    <li><h5>Phone &nbsp &nbsp:  +123-456-7890</h5></li>
    <li><h5>Email &nbsp &nbsp : makeup@website.com</h5></li>
    <li><h5>Address : 123, Anywhere, AnyCountry</h5></li>
</ul>
</div>`
container.appendChild(row3)
