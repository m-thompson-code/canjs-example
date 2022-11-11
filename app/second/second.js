import StacheElement from "can-stache-element";
import view from "./second.stache";
import "./second.css";

class Second extends StacheElement {
    static view = view;
}

customElements.define('can-second', Second);
