import "./styles.css";

var divElement = document.getElementById("div_container");

  let arrObj = [
    {
      name: "Michael",
      age: 35,
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
      },
    },
    {
      name: "Emily",
      age: 25,
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
      },
    },
    {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
      },
    },
  ];

  (function () {
    console.log("Calling?");
    arrObj.forEach((item) => {
      var detailElement = document.createElement("div");
      detailElement.innerHTML = `
        <h2>Name:${item.name}</h2>
        <p>Age: ${item.age}</p>
        <p>Address:${item.address.street} ${item.address.city}${item.address.state}</p>
        
      `;
      divElement.appendChild(detailElement);
    });
  })();
