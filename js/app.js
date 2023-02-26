const getInputValue = () => {
    return searchInput.value;
}

const loadDetailsItem = async (itemId) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phone/${itemId}`;
        const res = await fetch(url);
        const data = await res.json();
        displayItemDetails(data.data);
    }
    catch (error) {
        console.log(error);
    }
}

const loadItems = async (itemName, dataLimit) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=${itemName}`;
        const res = await fetch(url);
        const data = await res.json();
        if((data.data).length > 0) {
            alert.classList.add('hidden');
            displayItems(data.data, dataLimit);
        }
        else {
            alert.classList.remove('hidden');
            loader.classList.add('hidden');
            itemsContainer.innerHTML = '';
            showAllBtn.classList.add('hidden');
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getItems = (dataLimit) => {
    loader.classList.remove('hidden');

    const itemName = getInputValue();
    if(itemName !== '') {
        alert.classList.add('hidden');
        loadItems(itemName, dataLimit);
    }
    else {
        alert.classList.remove('hidden');
        loader.classList.add('hidden');
        itemsContainer.innerHTML = '';
        showAllBtn.classList.add('hidden');
    }
}

searchInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        getItems(9);
    }
})

// loadItems('apple', 10);