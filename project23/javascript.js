let container = document.querySelector("#container");

let data = []

function ApiCall() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((users) =>
            users.forEach((user, index) => {
                let cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>User Name:</strong>${user.username}</p>
        <p><strong>Email:</strong>${user.email}</p>
        <p><strong>City:</strong>${user.address.city}</p>
        <p><strong>Zip Code:</strong>${user.address.zipcode}</p>
`;

                container.append(cardDiv);
                data.push(user)
            }),
        );
}
ApiCall();

document.querySelector("#search").addEventListener("change", () => {
    let inputVal = document.querySelector("#search").value;
    if (inputVal === "") {
        data = []
        document.querySelectorAll(".card").forEach((card) => card.remove());
        ApiCall()
    } else {
        let find = data.find(item => item.username.toLowerCase().includes(inputVal.toLowerCase()) || item.email.toLowerCase().includes(inputVal.toLowerCase()) || item.address.city.toLowerCase().includes(inputVal.toLowerCase()) || item.address.zipcode.replace("-", "").includes(inputVal));
        document.querySelectorAll(".card").forEach((card) => card.remove());

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.innerHTML = `
        <h2>${find.name}</h2>
        <p><strong>User Name:</strong>${find.username}</p>
        <p><strong>Email:</strong>${find.email}</p>
        <p><strong>City:</strong>${find.address.city}</p>
        <p><strong>Zip Code:</strong>${find.address.zipcode}</p>
`;

        container.append(cardDiv);
    }

});
