const loader = document.getElementById('loader');
const alert = document.getElementById('alert');
const itemsContainer = document.getElementById('items-container');
const showAllBtn = document.getElementById('show-all-btn');

const displayItems = async (phones, dataLimit) => {
    itemsContainer.innerHTML = '';
    if(dataLimit && phones.length > dataLimit) {
        showAllBtn.classList.remove('hidden');
        phones = phones.slice(0, dataLimit);
    }
    else {
        showAllBtn.classList.add('hidden');
    }
    phones.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="card card-side bg-base-100 border rounded-sm shadow-md">
                <figure><img src="${element.image}" alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${element.phone_name}</h2>
                    <div>
                        <label onclick="loadDetailsItem('${element.slug}')" for="my-modal" class="btn btn-xs ">View Details</label>
                    </div>
                </div>
            </div>
            `
        itemsContainer.appendChild(newDiv);
        loader.classList.add('hidden');
    });
}

const displayItemDetails = (phone) => {
    const itemDetailsContainer = document.getElementById('item-details-container');
    itemDetailsContainer.innerHTML = `
    <h3 class="font-bold text-lg">${phone.name ? phone.name : ''}</h3>
    <p class="mt-2"><strong>Brand: </strong>${phone.brand ? phone.brand : ''}</p>
    <p class="mt-2"><strong>Release Date: </strong>${phone.releaseDate ? phone.releaseDate : ''}</p>
    <hr class="my-4">
    <h3 class="font-bold text-lg">Main Features</h3>
    <p class="mt-2"><strong>ChipSet: </strong>${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : ''}</p>
    <p class="mt-2"><strong>Display Size: </strong>${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize : ''}</p>
    <p class="mt-2"><strong>Memory: </strong>${phone.mainFeatures.memory ? phone.mainFeatures.memory : ''}</p>
    <p class="mt-2"><strong>Sensors: </strong>${phone.mainFeatures.sensors ? phone.mainFeatures.sensors : ''}</p>
    <p class="mt-2"><strong>Storage: </strong>${phone.mainFeatures.storage ? phone.mainFeatures.storage : ''}</p>
    `
}