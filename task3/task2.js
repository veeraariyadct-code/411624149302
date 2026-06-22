const button = document.getElementById("btn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

button.addEventListener("click", () => {

    usersDiv.innerHTML = "";

    status.innerHTML = "Loading...";

    setTimeout(fetchUsers, 2000);

});

function fetchUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            return response.json();

        })

        .then(data => {

            usersDiv.innerHTML = "";

            data.forEach(user => {

                usersDiv.innerHTML += `
                <div class="user">

                    <h3>${user.name}</h3>

                    <p>Email : ${user.email}</p>

                    <p>Phone : ${user.phone}</p>

                </div>
                `;

            });

            status.innerHTML = "Loaded successfully";

        })

        .catch(error => {

            status.innerHTML = "Error loading data";

            console.log(error);

        });

}