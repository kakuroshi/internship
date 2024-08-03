export async function getMan(nick) {
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