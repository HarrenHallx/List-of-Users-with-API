const renderButton = document.querySelector(".users-page__load-button")
const userCard = document.querySelector(".users-table__empty")
const usersTableBody = document.querySelector(".users-table__body")
const userCount = document.querySelector(".users-table__count")

async function loadUsers() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        
        if (!response.ok) {
            throw new Error("СУЛТАН КОТОК")
        }

        const users =  await response.json()

        users.forEach(user => {
            const row = document.createElement("tr");

            const id = document.createElement("td");
            const name = document.createElement("td");
            const username = document.createElement("td");
            const email = document.createElement("td");
            const phone = document.createElement("td");

            id.textContent = user.id;
            name.textContent = user.name;
            username.textContent = user.username;
            email.textContent = user.email;
            phone.textContent = user.phone;

            row.append(id, name, username, email, phone)

            usersTableBody.append(row)   
            
            console.log("CUM!!CUM!!CUM!CUM!CUM!CUM!CUM!CUM!CUM")
        });

        userCard.style.display = "none"

        userCount.textContent = users.length
        } catch (error) {
            alert("УЕБОК БЛЯ")
        }
}

renderButton.addEventListener("click", function(){
    loadUsers()
})