import React, { Component } from "react";
import style from "./Style/Profile.module.css";

class Prof extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: null,
            followers: null,
        };
    }

    async fetchUser() {
        try {
            const response = await fetch(
                `https://api.github.com/users/${this.props.nick}/repos`
            );
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("User not found");
                }
                throw new Error("Network response: " + response.statusText);
            }
            const data = await response.json();
            if (data[0]) {
                this.setState({ repo: data[0] });
            } else {
                this.setState({ repo: null });
            }

        } catch (error) {
            console.error("Problem with fetch user info:", error);
        }
    }

    async fetchFollowers() {
        if (this.repo) {
            try {
                const resp = await fetch(
                    `https://api.github.com/users/${this.props.nick}/followers`
                );
                if (!resp.ok) {
                    if (resp.status === 404) {
                        throw new Error("Followers not found");
                    }
                    throw new Error("Network response: " + resp.statusText);
                }
                const res = await resp.json();
                this.setState({ followers: res.length + " followers" });
            } catch (err) {
                console.error("Problem with fetch followers:", err);
                console.log("Error fetching followers: " + err.message);
            }
        }
    }

    componentDidMount() {
        if (this.props.nick) {
            this.fetchUser();
            this.fetchFollowers();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.nick !== this.props.nick) {
            this.fetchUser();
            this.fetchFollowers();
        }
    }

    render() {
        const { repo, followers } = this.state;
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
                        href={repo !== null ? repo.owner.html_url : ""}
                    >
                        <h3 className={style.nick}>
                            {repo !== null ? repo.owner.login : "no user"}
                        </h3>
                    </a>
                    <p className={style.followers}>
                        {repo !== null ? followers : ""}
                    </p>
                </div>
            </section>
        );
    }
}

export default Prof;
