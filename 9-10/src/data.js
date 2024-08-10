import render from "./render";

export let nick  = null

export function changeNick(newNick) {
    nick = newNick
    render(nick)
}