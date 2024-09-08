import render from "./render";

export let nick:string = ''

export function changeNick(newNick: string): void {
    nick = newNick
    render(nick)
}