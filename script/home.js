document.addEventListener('DOMContentLoaded', function() {

    const link = document.getElementById('beverageLink');
    if (link) {
    
    const otherDiv = document.getElementById('foodDiv');
    
    link.addEventListener('click', function(event){
        event.preventDefault();
    
        otherDiv.innerHTML =  ` <div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/tea/pexels-pixabay-259955.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Tea</p>
            <div class="weight">
                <p>250ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/tea/pexels-nipananlifestyle-com-625927-1581484.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Iced Tea</p>
            <div class="weight">
                <p>300ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-a3tabacos-2480828.jpg">
    <p class="price" id="priceId">$3.99</p>
    <div class="name">
        <p>Cocktail</p>
            <div class="weight">
                <p>250ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-anna-nekrashevich-7214308.jpg">
    <p class="price" id="priceId">$0.99</p>
    <div class="name">
        <p>Mineral Water</p>
            <div class="weight">
                <p>300ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-asphotograpy-104509.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Soda</p>
            <div class="weight">
                <p>350ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-chevanon-312418.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Coffee</p>
            <div class="weight">
                <p>250ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-suju-1233319.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Lemonade</p>
            <div class="weight">
                <p>300ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-pixabay-434295.jpg">
    <p class="price" id="priceId">$4.99</p>
    <div class="name">
        <p>Smoothie</p>
            <div class="weight">
                <p>400ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-pixabay-248412.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Milk</p>
            <div class="weight">
                <p>300ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-jeshoots-3603.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Orange Juice</p>
            <div class="weight">
                <p>350ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-fallon-michael-1928485-3551717.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Hot Chocolate</p>
            <div class="weight">
                <p>300ml</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/beverage/pexels-cileklipalet-29533269.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Iced Tea</p>
            <div class="weight">
                <p>250g</p>
            </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>`;
});

document.getElementById('dessertLink').addEventListener('click', function() {
otherDiv.innerHTML =  ` <div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-brigitte-tohm-36757-239578.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Macaron</p>
        <div class="weight">
            <p>400g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-cescrz-3185509.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Tomato Juice</p>
        <div class="weight">
            <p>500g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-ella-olsson-572949-3026801.jpg">
    <p class="price" id="priceId">$0.99</p>
    <div class="name">
        <p>Pudding</p>
        <div class="weight">
            <p>500g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-elli-559179-1854652.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Chocolate Cake</p>
        <div class="weight">
            <p>300g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-frans-van-heerden-201846-703116.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Tiramisu</p>
        <div class="weight">
            <p>300g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-gabriel-lima-865460-15735976.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Cheesecake</p>
        <div class="weight">
            <p>200g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-galina-b-481968537-29284429.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Panna Cotta</p>
        <div class="weight">
            <p>200g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-koshi-887853.jpg">
    <p class="price" id="priceId">$3.99</p>
    <div class="name">
        <p>Layer Cake</p>
        <div class="weight">
            <p>700g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-mccutcheon-1191639.jpg">
    <p class="price" id="priceId">$0.99</p>
    <div class="name">
        <p>Brownies</p>
        <div class="weight">
            <p>500g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-myburgh-2082617.jpg">
    <p class="price" id="priceId">$0.99</p>
    <div class="name">
        <p>Donut</p>
        <div class="weight">
            <p>600g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-sittisak-c-842235-1739347.jpg">
    <p class="price" id="priceId">$1.99</p>
    <div class="name">
        <p>Ice Cream</p>
        <div class="weight">
            <p>500g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>

<div class="card">
    <div class="inner-card">
        <img src="/asset/dessert/pexels-solodsha-8105071.jpg">
    <p class="price" id="priceId">$2.99</p>
    <div class="name">
        <p>Fruit Tart</p>
        <div class="weight">
            <p>800g</p>
        </div>
        <button onclick="" id="add-btn">Add</button>
    </div>
    </div>
</div>
 `;
});

document.getElementById('foodLink').addEventListener('click', function() {
    otherDiv.innerHTML =  ` <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-caricatte-2336674.jpg">
            <p class="price" id="priceId">$1.99</p>
            <div class="name">
                <p>Tacos</p>
                    <div class="weight">
                        <p>150g</p>
                    </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-david-geib-1265112-3220617.jpg">
            <p class="price" id="priceId">$2.99</p>
            <div class="name">
                <p>Burger</p>
                <div class="weight">
                    <p>250g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-ehioma-osih-109764575-11743998.jpg">
            <p class="price" id="priceId">$2.99</p>
            <div class="name">
                <p>Fried Rice</p>
                <div class="weight">
                    <p>400g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-jdgromov-12419160.jpg">
            <p class="price" id="priceId">$3.99</p>
            <div class="name">
                <p>Paella</p>
                <div class="weight">
                    <p>450g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-natalie-bond-320378-3911229.jpg">
            <p class="price" id="priceId">$1.99</p>
            <div class="name">
                <p>Dimsum</p>
                <div class="weight">
                        <p>150g</p>
                    </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-peyman-hamsayeh-7161623-11286814.jpg">
            <p class="price" id="priceId">$2.99</p>
            <div class="name">
                <p>Kebab</p>
                <div class="weight">
                    <p>300g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pizza/pexels-abrar-27874930.jpg">
            <p class="price" id="priceId">$4.99</p>
            <div class="name">
                <p>Pizza</p>
                <div class="weight">
                    <p>700g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/steak/pexels-cristian-rojas-7613436.jpg">
            <p class="price" id="priceId">$5.99</p>
            <div class="name">
                <p>Steak</p>
                <div class="weight">
                    <p>500g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-pixabay-271715.jpg">
            <p class="price" id="priceId">$2.99</p>
            <div class="name">
                <p>Sushi</p>
                <div class="weight">
                    <p>240g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-polina-tankilevitch-4518844.jpg">
            <p class="price" id="priceId">$2.99</p>
            <div class="name">
                <p>Pasta</p>
                <div class="weight">
                    <p>350g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-xmtnguyen-2664216.jpg">
            <p class="price" id="priceId">$4.99</p>
            <div class="name">
                <p>Ramen</p>
                <div class="weight">
                    <p>700g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="inner-card">
                <img src="/asset/food/pexels-baarast-project-243124132-15853315.jpg">
            <p class="price" id="priceId">$3.99</p>
            <div class="name">
                <p>Meatball Soup</p>
                <div class="weight">
                    <p>5000g</p>
                </div>
                <button onclick="" id="add-btn">Add</button>
            </div>
            </div>
        </div>
 `;
    });

} else {
    console.log("failed to load");
}

});
     
///function for update quantity

let cart = [];

function addToCart(id, name, price, weight) {

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, weight, quantity: 1});
    }

    updateCartNotification();
}

function updateCartNotification() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartNotification = document. getElementById("cart-notification");

    cartNotification.textContent = totalItems;
    cartNotification.style.display = totalItems > 0 ? "inlin" : "none";
}

function viewCart() {
    const cartPage = document.getElementById(cart-page);
    const cartTableBody = document.querySelector("#cart-table tbody");

    // to empty last table
    cartTableBody.innerHTML = "";

    // to add item to the tabel
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.weight}</td>
        <td>${item.quantity}</td>
        `;
        cartTableBody.appendChild(row);
    });

    // Cart Page Display
    cartPage.style.display = "block";
}
    
   