let container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

let row1 = document.createElement('div')
row1.classList.add('row','m-4')
row1.innerHTML = `<ul type="none">
<li class="ms-3"><a                   href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/HOME/index.html"><img  class="image mt-3" src="./makeup icon.jpg" ></a></li>
<li class="ms-3"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/HOME/index.html" >Home</a></li>
<li class="ms-3"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/BRANDS/index.html">Brands</a></li>
<li class="ms-3"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/PRODUCTS/index.html">Products</a></li>
<li class="ms-3"><a class="underline" href="https://baburajan03.github.io/WEBCODE-MAKEUP-API--TASK/CONTACT%20US/index.html">ContactUs</a></li>
</ul>`
container.appendChild(row1)

let row2 = document.createElement('div')
row2.classList.add('row','ms-5')
row2.innerHTML = `<h2>Contact Us</h2>`
container.appendChild(row2)

let row3 = document.createElement('div')
row3.classList.add('row','m-3')
row3.innerHTML = `<div class="col-2 ms-5 mt-3">
<h5 >Phone</h5>
<h5 >Email</h5>
<h5 >Address</h5>
</div>
<div class="col-8 ms-1 mt-3">
<h5>: +123-456-7890</h5>
<h5>: makeup@website.com</h5>
<h5>: 123, Anywhere, AnyCountry.</h5>
<h5></h5>
</div>
<div class="col-2">
</div>`
container.appendChild(row3)
