import React, { useCallback, useEffect, useState } from "react";
import style from "./Style/Profile.module.css";
import BtnProfile from "./BtnProfile.jsx";

const Profile = (props) => {
	const [repo, setRepo] = useState(null);
	const [followers, setFollowers] = useState(null);
	const [count, setCount] = useState(0);

	//useCallback чтобы countClick оставалась неизменной между рендерами, если count не изменился.
	const countClick = useCallback(() => {
		setCount((prevCount) => prevCount + 1);
		console.log(count);
	}, [count]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${props.nick}/repos`
				);
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
					setRepo(null)
				}

			} catch (error) {
				console.error("Problem with fetch user info:", error);
			}
		};

		const fetchFollowers = async () => {
			if (repo) {
				try {
					const resp = await fetch(
						`https://api.github.com/users/${props.nick}/followers`
					);
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
					console.log("Error fetching followers: " + err.message);
				}
			}
		};

		if (props.nick) {
			fetchUser();
			fetchFollowers();
		}
	}, [props.nick, repo]);

	return (
		<section className={style.profile}>
			<img
				src={repo !== null ? repo.owner.avatar_url : ""}
				alt="no img"
				className={style.user_pic}
			/>

			<div>
				<a
					className={style.nick_ref}
					href={repo !== null ? repo.owner.html_url : ""}>
					<h3 className={style.nick}>
						{repo !== null ? repo.owner.login : "no user"}
					</h3>
				</a>
				<p className={style.followers}>{repo !== null ? followers : ""}</p>
				<BtnProfile countClick={countClick} />
			</div>
		</section>
	);
};

export default Profile;
