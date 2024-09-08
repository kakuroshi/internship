import {useState, useEffect} from "react";

interface own{
	avatar_url: string,
	html_url: string,
	login: string
}

interface Repo {
	name: string,
	owner: own
}

const useFetchProf = (nick: string) => {
	const [repo, setRepo] = useState<Repo | null>(null);
	const [followers, setFollowers] = useState<string | null>(null);

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
				const data: Repo[] = await response.json();

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
					const res: any[] = await resp.json();

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
