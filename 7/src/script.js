const inp = document.getElementById("findInp");
const but = document.getElementById("findBtn");

but.addEventListener("click", () => {
    document.getElementById("reposF").innerHTML = "";
    document.getElementById("reposA").innerHTML = "";

    if (inp.value) {
        getMan(inp.value);
        fetchFirst(inp.value)
            .then((res) => {
                let flag = 5;
                if (res.length < 5) {
                    flag = res.length;
                }

                for (let i = 0; i < flag; i++) {
                    const cont = document.createElement("a");
                    const btn = document.createElement("button");
                    const repInf = document.createElement("p");

                    const creation = new Date(res[i].created_at).toLocaleString("ru-RU");
                    const update = new Date(res[i].updated_at).toLocaleString("ru-RU");

                    const repName = document.createElement("h4");
                    repName.textContent = res[i].name;
                    repInf.innerHTML = `creation date: ${creation} <br> <br> last update: ${update}`;
                    cont.setAttribute("href", res[i].clone_url);

                    btn.append(repName, repInf);
                    cont.append(btn);

                    document.getElementById("reposF").append(cont);
                }
            })
            .catch((error) => {
                console.log("Error fetching repositories: " + error.message);
            });

        fetchSecond(inp.value).catch((error) => {
            console.log("Error fetching additional repositories: " + error.message);
        });

        inp.value = "";
    } else {
        alert("Please, enter nickname!!!");
    }
});

async function getMan(nick) {
    document.getElementById("usPic").src = "";
    document.getElementById("nick").textContent = "Non-existent user";
    document.getElementById("nickRef").href = "";
    document.getElementById("followers").textContent = "";

    try {
        // const response = await fetch(`https://api.github.com/users/${nick}/repos_1`);
        const response = await fetch(`https://api.github.com/users/${nick}/repos`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            throw new Error("Network response: " + response.statusText);
        }
        const data = await response.json();

        document.getElementById("hr").style.display = "block";
        document.getElementById("manInfo").style.display = "grid";
        document.getElementById("rep").style.display = "block";

        document.getElementById("usPic").src = data[0].owner.avatar_url;
        document.getElementById("nick").textContent = data[0].owner.login;
        document.getElementById("nickRef").href = data[0].owner.html_url;

        try {
            const resp = await fetch(
                `https://api.github.com/users/${nick}/followers`
            );
            if (!resp.ok) {
                if (resp.status === 404) {
                    throw new Error("Followers not found");
                }
                throw new Error("Network response: " + resp.statusText);
            }
            const res = await resp.json();

            document.getElementById("followers").textContent =
                res.length + " followers";
        } catch (err) {
            console.error("Problem with fetch followers:", err);
            console.log("Error fetching followers: " + err.message);
        }
    } catch (error) {
        console.error("Problem with fetch user info:", error);
        console.log("Error fetching user info: " + error.message);
    }
}

function fetchFirst(nick) {
    return new Promise((resolve, reject) => {
        // fetch(`https://api.github.com/users/${nick}/repos_1`)
        fetch(`https://api.github.com/users/${nick}/repos`)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        reject(new Error("User not found"));
                    }
                    reject(new Error("Network response: " + response.statusText));
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(new Error("Problem with fetch: " + error.message));
            });
    });
}

async function fetchSecond(nick) {
    try {
        // const response = await fetch(`https://api.github.com/users/${nick}/repos_1`);
        const response = await fetch(`https://api.github.com/users/${nick}/repos`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            throw new Error("Network response: " + response.statusText);
        }
        const data = await response.json();
        if (data.length <= 5) {
            const mes = document.createElement("h4");
            mes.textContent = "All repositories are already displayed.";
            document.getElementById("reposA").append();
        } else {
            for (let i = 5; i < data.length; i++) {
                const cont = document.createElement("a");
                const btn = document.createElement("button");

                const creation = new Date(data[i].created_at).toLocaleString("ru-RU");
                const update = new Date(data[i].updated_at).toLocaleString("ru-RU");

                const repName = document.createElement("h4");
                repName.textContent = data[i].name;
                const repInf = document.createElement("p");
                repInf.innerHTML = `creation date: ${creation} <br> <br> last update: ${update}`;
                cont.setAttribute("href", data[i].clone_url);

                btn.append(repName, repInf);
                cont.append(btn);

                document.getElementById("reposA").append(cont);
            }
        }
    } catch (error) {
        console.error("Problem with fetch additional repositories:", error);
        console.log("Error fetching additional repositories: " + error.message);
    }
}