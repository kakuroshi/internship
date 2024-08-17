import {useState, useEffect} from "react";

const useFetchProf = (nick) => {
	const [repo, setRepo] = useState(null);
	const [followers, setFollowers] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(`https://api.github.com/users/${nick}/repos`);
				if (!response.ok) {
					if (response.status === 404) {
						throw new Error("User not found");
					}
					throw new Error("Network response: " + response.statusText);
				}
				const data = await response.json();

				if (data[0]) {
					setRepo(data[0]);
				} else {
					setRepo(null);
				}
			} catch (error) {
				console.error("Problem with fetch user info:", error);
			}
		};

		const fetchFollowers = async () => {
			if (repo) {
				try {
					const resp = await fetch(`https://api.github.com/users/${nick}/followers`);
					if (!resp.ok) {
						if (resp.status === 404) {
							throw new Error("Followers not found");
						}
						throw new Error("Network response: " + resp.statusText);
					}
					const res = await resp.json();

					setFollowers(res.length + " followers");
				} catch (err) {
					console.error("Problem with fetch followers:", err);
				}
			}
		};

		if (nick) {
			fetchUser();
			fetchFollowers();
		}
	}, [nick, repo]);

	return {repo, followers};
};

export default useFetchProf;
