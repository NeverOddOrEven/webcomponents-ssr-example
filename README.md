# SkateJS SSR

An example with some extra nuance, to cover the gaps where the documentation may not be as clear

## Getting Started

The repository uses ts-node to run the jsx file directly, or you can transpile it down to js and run the code that way.

```bash
npm install
npm run start-js
npm run start-ts
```

## Expected Output
```bash
> node -r ts-node/register src/index.jsx


Rendering JSX:
<body><script>function __ssr() {var r,s=document.currentScript,f=s.parentNode;h=f.parentNode;f.removeChild(s);h.removeChild(f);r=h.attachShadow({mode:h.getAttribute('mode')||'open'});while(f&&f.firstChild)r.appendChild(f.firstChild);}</script><x-hello><shadowroot><span>Hello, <x-yell><shadowroot><strong><slot></slot></strong><script>__ssr()</script></shadowroot><slot></slot></x-yell>!</span><script>__ssr()</script></shadowroot>World</x-hello></body>

Rendering imperative javascript:
<body><script>function __ssr() {var r,s=document.currentScript,f=s.parentNode;h=f.parentNode;f.removeChild(s);h.removeChild(f);r=h.attachShadow({mode:h.getAttribute('mode')||'open'});while(f&&f.firstChild)r.appendChild(f.firstChild);}</script><x-hello><shadowroot><span>Hello, <x-yell><shadowroot><strong><slot></slot></strong><script>__ssr()</script></shadowroot><slot></slot></x-yell>!</span><script>__ssr()</script></shadowroot>World</x-hello></body>

Plain HTML:
<body>
	<x-hello>
		World
	</x-hello>
</body>
```
