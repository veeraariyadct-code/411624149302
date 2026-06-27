
const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clrBtn");
const messageBox = document.getElementById("msg");
const status = document.getElementById("sts");
const count = document.getElementById("count");

let messages = [];
input.addEventListener("input", function () {
    count.textContent = "Character Count: " + input.value.length;
});

function displayMessages() {

    messageBox.innerHTML = "";

    messages.forEach((msg) => {

        const p = document.createElement("p");
        p.className = "message";
        p.textContent = msg;

        messageBox.appendChild(p);

    });

}
addBtn.addEventListener("click", function () {

    const text = input.value.trim();

    const promise = new Promise((resolve, reject) => {

        if (text.length >= 3) {
            resolve(text);
        } else {
            reject("Message must contain at least 3 characters");
        }

    });

    promise

      .then((message) => {

    status.textContent = "Message Added Successfully";

    messages.push(message);

    displayMessages();

    setTimeout(() => {

        const index = messages.indexOf(message);

        if (index !== -1) {
            messages.splice(index, 1);
            displayMessages();
            status.textContent = "Message Expired";
        }

    }, 10000);

    input.value = "";
    count.textContent = "Character Count: 0";

})
    
        .catch((error) => {

            status.textContent = error;

        });

});

clearBtn.addEventListener("click", function () {

    messages = [];
    messageBox.innerHTML = "";
    status.textContent = "All Messages Cleared";

});

