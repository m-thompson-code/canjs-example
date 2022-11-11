import StacheElement from "can-stache-element";
import view from "./my-component.stache";
import "./my-component.css";

class MyComponent extends StacheElement {
    static view = view;
}

customElements.define('can-my-component', MyComponent);
