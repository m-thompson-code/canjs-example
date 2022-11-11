import StacheElement from "can-stache-element";
import route from "can-route";
import "can-stache-route-helpers";// Allows `can-stache` to work nicely with `can-route`
import RoutePushstate from "can-route-pushstate";
import view from "./app.stache";
import "./app.css";
import "./my-component/my-component";
import "./first/first";

route.urlData = new RoutePushstate();// "/#!first" -> "/first"
route.register("{page}", { page: "home" });// Default value is "home"
route.start();

class App extends StacheElement {
    static view = view;


  static props = {
    routeData: {
      get default() {
        return route.data;
      },
    },
  };

  get component() {
    switch (this.routeData.page) {
      case 'home':
        const home = document.createElement('p');
        home.innerHTML = 'Home route';
        return home;
      case 'first':
        return document.createElement('can-first');
      default:
        const notFound = document.createElement('p');
        notFound.innerHTML = '404: not found';
        return notFound;
    }
  }
}

customElements.define('can-app', App);
