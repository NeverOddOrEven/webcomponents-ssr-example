/** @jsx h */

import '@skatejs/ssr/register'
import { props, withComponent } from 'skatejs';
import ssr from '@skatejs/ssr'
import withPreact from '@skatejs/renderer-preact'
import { h, render } from 'preact'

import { serialize } from './helpers'

class Hello extends withComponent(withPreact()) {
    static get props() {
        return {};
    }

    render() {
        return <span>Hello, <x-yell><slot></slot></x-yell>!</span>;
    }
}

class Yell extends withComponent(withPreact()) {
    static get props() {
        return {};
    }

    render() {
        return <strong><slot></slot></strong>;
    }
}

customElements.define('x-hello', Hello);
customElements.define('x-yell', Yell);



const body = document.createElement("body")


Promise.resolve().then(() => {
    console.log("\nRendering JSX:")
}).then(() => {
    let template = <body><x-hello>World</x-hello></body>
    return ssr(render(template))
}).then((htmlString) => {
    console.log(htmlString)
}).then(() => {
    console.log("\nRendering imperative javascript:")
}).then(() => {
    const hello = new Hello();
    hello.textContent = "World";

    body.appendChild(hello)

    return ssr(body)
}).then((htmlString) => {
    console.log(htmlString)
}).then(() => {
    console.log("\nPlain HTML:")
    console.log(serialize(body))
})
