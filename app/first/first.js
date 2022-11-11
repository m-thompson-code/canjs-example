import StacheElement from "can-stache-element";
import view from "./first.stache";
import "./first.css";

class First extends StacheElement {
    static view = view;
}

customElements.define('can-first', First)
