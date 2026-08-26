let properties =
    JSON.parse(localStorage.getItem("properties")) || [

        {
            id: 1,

            title: "Luxury 2 BHK Apartment",

            location: "Indirapuram, Ghaziabad",

            price: 18000,

            purpose: "Rent",

            type: "Apartment",

            bedrooms: 2,

            bathrooms: 2,

            area: 1200,

            image:
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",

            description:
                "Beautiful and spacious 2 BHK apartment with parking and modern facilities."
        },


        {
            id: 2,

            title: "Modern Family House",

            location: "Noida Sector 62",

            price: 8500000,

            purpose: "Sale",

            type: "House",

            bedrooms: 3,

            bathrooms: 2,

            area: 1800,

            image:
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d",

            description:
                "Modern family house located in a prime residential area."
        },


        {
            id: 3,

            title: "Beautiful 3 BHK Villa",

            location: "Greater Noida",

            price: 25000,

            purpose: "Rent",

            type: "Villa",

            bedrooms: 3,

            bathrooms: 3,

            area: 2200,

            image:
                "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",

            description:
                "Premium villa with spacious rooms, parking and excellent surroundings."
        }

    ];


const propertyContainer =
    document.getElementById("propertyContainer");


function displayProperties(data = properties) {

    propertyContainer.innerHTML = "";


    if (data.length === 0) {

        propertyContainer.innerHTML = `
            <h2>No property found.</h2>
        `;

        return;
    }


    data.forEach(function(property) {

        let priceText =
            property.purpose === "Rent"
                ? `₹${property.price.toLocaleString()}/month`
                : `₹${property.price.toLocaleString()}`;


        propertyContainer.innerHTML += `

            <div class="property-card">

                <img
                    src="${property.image}"
                    alt="${property.title}"
                >

                <div class="card-body">

                    <span class="badge">
                        ${property.purpose}
                    </span>

                    <h3>
                        ${property.title}
                    </h3>

                    <div class="price">
                        ${priceText}
                    </div>

                    <div class="location">
                        📍 ${property.location}
                    </div>

                    <div class="features">

                        <span>
                            🛏️ ${property.bedrooms} Beds
                        </span>

                        <span>
                            🚿 ${property.bathrooms} Baths
                        </span>

                    </div>

                    <p>
                        ${property.area} sq.ft
                    </p>

                    <br>

                    <button
                        class="details-btn"
                        onclick="showDetails(${property.id})"
                    >
                        View Details
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteProperty(${property.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;
    });
}


displayProperties();


// ADD PROPERTY


const propertyForm =
    document.getElementById("propertyForm");


propertyForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let newProperty = {

        id: Date.now(),

        title:
            document.getElementById("title").value,

        location:
            document.getElementById("location").value,

        price:
            Number(document.getElementById("price").value),

        purpose:
            document.getElementById("purpose").value,

        type:
            document.getElementById("type").value,

        bedrooms:
            Number(document.getElementById("bedrooms").value),

        bathrooms:
            Number(document.getElementById("bathrooms").value),

        area:
            Number(document.getElementById("area").value),

        image:
            document.getElementById("image").value,

        description:
            document.getElementById("description").value

    };


    properties.push(newProperty);


    localStorage.setItem(
        "properties",
        JSON.stringify(properties)
    );


    displayProperties();


    propertyForm.reset();


    alert("Property added successfully!");


    document
        .getElementById("properties")
        .scrollIntoView();

});


// SEARCH


function searchProperties() {

    let search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    let purpose =
        document
            .getElementById("purposeFilter")
            .value;


    let filtered =
        properties.filter(function(property) {

            let locationMatch =
                property.location
                    .toLowerCase()
                    .includes(search);


            let purposeMatch =
                purpose === "all" ||
                property.purpose === purpose;


            return locationMatch && purposeMatch;

        });


    displayProperties(filtered);


    document
        .getElementById("properties")
        .scrollIntoView();

}


// PROPERTY DETAILS


function showDetails(id) {

    let property =
        properties.find(function(item) {

            return item.id === id;

        });


    document.getElementById("modalImage").src =
        property.image;


    document.getElementById("modalTitle").innerText =
        property.title;


    document.getElementById("modalPurpose").innerText =
        property.purpose;


    document.getElementById("modalPrice").innerText =
        property.purpose === "Rent"
            ? `₹${property.price.toLocaleString()}/month`
            : `₹${property.price.toLocaleString()}`;


    document.getElementById("modalLocation").innerText =
        "📍 " + property.location;


    document.getElementById("modalBedrooms").innerText =
        `🛏️ ${property.bedrooms} Bedrooms`;


    document.getElementById("modalBathrooms").innerText =
        `🚿 ${property.bathrooms} Bathrooms`;


    document.getElementById("modalArea").innerText =
        `📐 ${property.area} sq.ft`;


    document.getElementById("modalDescription").innerText =
        property.description;


    document.getElementById("propertyModal").style.display =
        "flex";

}


function closeModal() {

    document.getElementById("propertyModal").style.display =
        "none";

}


// DELETE


function deleteProperty(id) {

    let confirmDelete =
        confirm(
            "Are you sure you want to delete this property?"
        );


    if (!confirmDelete) {
        return;
    }


    properties =
        properties.filter(function(property) {

            return property.id !== id;

        });


    localStorage.setItem(
        "properties",
        JSON.stringify(properties)
    );


    displayProperties();

}


// LOGIN


function showLogin() {

    document.getElementById("loginModal").style.display =
        "flex";

}


function closeLogin() {

    document.getElementById("loginModal").style.display =
        "none";

}


function loginUser() {

    alert(
        "Login system will be connected with backend later."
    );

}


// CONTACT OWNER


function contactOwner() {

    alert(
        "Owner contact system will be connected with backend later."
    );

}