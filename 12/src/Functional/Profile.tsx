import React, {useCallback, useState} from "react";
import style from "./Style/Profile.module.css";
import BtnProfile from "./BtnProfile.tsx";
import useFetchProf from "./useFetchProfile.ts";

interface ProfileProps {
	nick: string
}

const Profile: React.FC<ProfileProps> = (props) => {
	const {repo, followers} = useFetchProf(props.nick);
	const [count, setCount] = useState<number>(0);

	const countClick = useCallback(() => {
		setCount((prevCount) => prevCount + 1);
		console.log(count);
	}, [count]);

	return (
		<section className={style.profile}>
			<img src={repo !== null ? repo.owner.avatar_url : ""} alt="no img" className={style.user_pic} />

			<div>
				<a className={style.nick_ref} href={repo !== null ? repo.owner.html_url : ""}>
					<h3 className={style.nick}>{repo !== null ? repo.owner.login : "no user"}</h3>
				</a>
				<p className={style.followers}>{repo !== null ? followers : ""}</p>
				<BtnProfile countClick={countClick} />
			</div>
		</section>
	);
};

export default Profile;
