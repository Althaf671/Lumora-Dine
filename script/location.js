document.addEventListener("DOMContentLoaded", () =>  {
    const gallery = document.querySelector(".gallery");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    let currentIndex = 0;
    const totalItems = document.querySelectorAll(".gallery-item").length;

        const updateGalleryPosition = () => {
            const offset = -currentIndex *-64;
            gallery.style.transform = `translateX(${offset}%)`;
        };

    rightBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalItems -1;
        }
        updateGalleryPosition();
    });

    leftBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        updateGalleryPosition();
    });

    

    const link = document.getElementById('GermanyLink');
    
    if (link) {
        const otherDiv = document.getElementById('mainDiv');

        link.addEventListener('click', function(event){
            event.preventDefault();

            otherDiv.innerHTML = ` 
                <div class="imageSection">
                    <img src="/asset/background/Germany-branch.jpg">
                </div>
                <div class="contentSection">
                    <h1>14 Lindenweg, Steinhafen, Germany</h1>
                    <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laboriosam 
                        impedit reprehenderit provident quas mollitia ducimus reiciendis molestiae ipsum repellendus 
                        tenetur laudantium architecto modi, sapiente nesciunt repellat aspernatur blanditiis at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laboriosam 
                        impedit reprehenderit provident quas mollitia ducimus reiciendis molestiae ipsum repellendus 
                        tenetur laudantium architecto modi, sapiente nesciunt repellat aspernatur blanditiis at.
                    </p>
                    <div class="facilities">
                        <img src="/asset/misc/wifi_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/wc_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/wash_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/mosque_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                    </div>
                    <div class="placeRate">
                        <p>Rate this branch</p>
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                    </div>
                </div>`
    });

    document.getElementById('UsaLink').addEventListener('click', function () {
        otherDiv.innerHTML = ` 
                <div class="imageSection">
                    <img src="/asset/background/USA-Branch.jpg">
                </div>
                <div class="contentSection">
                    <h1>Maple Street, Ridgewood Valley, USA</h1>
                    <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laboriosam 
                        impedit reprehenderit provident quas mollitia ducimus reiciendis molestiae ipsum repellendus 
                        tenetur laudantium architecto modi, sapiente nesciunt repellat aspernatur blanditiis at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laboriosam 
                        impedit reprehenderit provident quas mollitia ducimus reiciendis molestiae ipsum repellendus 
                        tenetur laudantium architecto modi, sapiente nesciunt repellat aspernatur blanditiis at.
                    </p>
                    <div class="facilities">
                        <img src="/asset/misc/wifi_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/wc_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/wash_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/mosque_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                    </div>
                    <div class="placeRate">
                        <p>Rate this branch</p>
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                    </div>
                </div>`
    });

    document.getElementById('IndonesiaLink').addEventListener('click', function () {
        otherDiv.innerHTML = ` 
                <div class="imageSection">
                    <img src="/asset/background/indo-branch.jpg">
                </div>
                <div class="contentSection">
                    <h1>Pahlawan Street, Sukamerta, Indonesia</h1>
                    <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laboriosam 
                        impedit reprehenderit provident quas mollitia ducimus reiciendis molestiae ipsum repellendus 
                        tenetur laudantium architecto modi, sapiente nesciunt repellat aspernatur blanditiis at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laboriosam 
                        impedit reprehenderit provident quas mollitia ducimus reiciendis molestiae ipsum repellendus 
                        tenetur laudantium architecto modi, sapiente nesciunt repellat aspernatur blanditiis at.
                    </p>
                    <div class="facilities">
                        <img src="/asset/misc/wifi_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/wc_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/wash_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                        <img src="/asset/misc/mosque_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg">
                    </div>
                    <div class="placeRate">
                        <p>Rate this branch</p>
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                        <img src="/asset/misc/star_rate_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg">
                    </div>
                </div>`
    });

} else {
    console.log("failed to load");
}

});

