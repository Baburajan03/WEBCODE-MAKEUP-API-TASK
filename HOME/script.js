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
row2.classList.add('row')
row2.innerHTML = `<div class="col-1">
</div>
<div class="col-10">
    <div class="grid-container ms-6 mb-4  ">
        <img src="./item11.jpg" class="item1">
        <img src="./item12.jpg" class="item2">
        <img src="./item2.jpg" class="item3">
        <img src="./item3.jpg" class="item4">
        <img src="./item4.jpg" class="item5">
</div>
</div>
<div class="col-1">
</div>`
container.appendChild(row2)
