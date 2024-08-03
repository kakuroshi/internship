import "../style/style.css";
import { getMan } from "./getMan";
import { fetchFirst } from "./fetchFirst";
import { fetchSecond } from "./fetchSecond";

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
