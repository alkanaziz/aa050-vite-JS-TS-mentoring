import "./style.scss";

const firstName = "George";
const age = 44;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/`
<h1 class="text-3xl mb-3">Vitest Site</h1>
<p>${firstName} is ${age}</p>
<p>Next year, ${firstName} will be ${age+1}</p>
<p>The variable firstName is of type ${typeof firstName}</p>
<p>The variable age is of type ${typeof age}</p>
`;