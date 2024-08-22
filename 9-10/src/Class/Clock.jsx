import { React, Component } from "react";

class Clock extends Component {
    constructor (props) {
        super(props)
        this.state = {
            time: new Date(),
            clck: 0,
            phrase: "Приветик!"
        }
        this.phrases = [
            "Тыкнул!",
            "Пуньк!",
            "ДА ДАВАЙ",
            "ЕЩЕ",
            "Плюс один!"
        ]
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({ time: new Date() })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.clck !== this.state.clck) {
            this.setState({ phrase: this.phrases[Math.floor(Math.random() * 4)] })
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("Прощайте, часики((");
    }

    render () {
        return(
            <div>
                <p>Время сейчас: {this.state.time.toLocaleTimeString()} </p>

                <div>
                    <p>Количество тыков: {this.state.clck}</p>
                    <button onClick={() => this.setState({ clck: this.state.clck + 1 })} style={{color: "white"}}>Тык!</button>
                    <p>{this.state.phrase}</p>
                </div>
            </div>
        )
    }
}

export default Clock