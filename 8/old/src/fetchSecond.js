export async function fetchSecond(nick) {
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