//GET запрос
function fetchFirst() {
	return new Promise((resolve, reject) => {
		fetch("https://api.github.com/users/kakuroshi/repos")
			.then((response) => {
				if (!response.ok) {
					reject("Network response: " + response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject("Problem with fetch:", error);
			});
	});
}
fetchFirst().then((res) => {
	let flag = 5;
	if (res.length < 5) {
		flag = res.length;
	}

	for (let i = 0; i < flag; i++) {
        let btn = document.createElement('button')
		const repInf = document.createElement("a");
		
        const creation = new Date(res[i].created_at).toLocaleString('ru-RU')
        const update = new Date(res[i].updated_at).toLocaleString('ru-RU')

        const repName = document.createElement('h4')
        repName.textContent = res[i].name
        repInf.innerHTML = `creation date: ${creation} <br> last update: ${update}`
		btn.setAttribute("href", res[i].clone_url);

        btn.append(repName, repInf)

		document.getElementById("reposF").append(btn);
	}
});

//
async function fetchSecond() {
	try {
		const response = await fetch(
			"https://api.github.com/users/kakuroshi/repos"
		);
		if (!response.ok) {
			throw new Error("Network response: " + response.statusText);
		}
		const data = await response.json();
		if (data.length <= 5) {
			const mes = document.createElement("h4");
			mes.textContent = "All repositories are already displayed.";
			document.getElementById("reposA").append();
		} else {            
			for (let i = 5; i < data.length; i++) {
                const btn = document.createElement('button')

                const creation = new Date(data[i].created_at).toLocaleString('ru-RU')
                const update = new Date(data[i].updated_at).toLocaleString('ru-RU')
                
                const repName = document.createElement('h4')
                repName.textContent = data[i].name
				const repInf = document.createElement("a");
				repInf.innerHTML = `creation date: ${creation} <br> last update: ${update}`
				btn.setAttribute("href", data[i].clone_url);

                btn.append(repName, repInf)

				document.getElementById("reposA").append(btn);
			}
		}
	} catch (error) {
		console.error("Problem with fetch:", error);
	}
}

fetchSecond();
