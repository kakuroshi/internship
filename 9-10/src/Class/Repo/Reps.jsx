import React, { Component } from 'react';
import style from './Style/Rep.module.css';
import Butn from './Butn';

class Reps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    async fetchFirst() {
        try {
            const response = await fetch(`https://api.github.com/users/${this.props.nick}/repos`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("User not found");
                }
                throw new Error("Network response: " + response.statusText);
            }
            const data = await response.json();
            this.setState({ repos: data });
        } catch (error) {
            console.error("Problem with fetch:", error);
        }
    }

    componentDidMount() {
        this.fetchFirst().catch((error) => {
            console.log("Error fetching repositories: " + error.message);
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.nick !== this.props.nick) {
            this.fetchFirst().catch((error) => {
                console.log("Error fetching repositories: " + error.message);
            });
        }
    }

    render() {
        const { repos } = this.state;

        return (
            <div className={style.repos_first}>
                <div className={style.repos_f}>
                    {repos.map((e, i) => (
                        <Butn
                            key={i}
                            name={e.name}
                            href={e.clone_url}
                            creation={new Date(e.created_at).toLocaleString("ru-RU")}
                            update={new Date(e.updated_at).toLocaleString("ru-RU")}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Reps;
