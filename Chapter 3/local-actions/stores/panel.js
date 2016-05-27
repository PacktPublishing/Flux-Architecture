'use strict';

import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

// Our "Panel" store which is an "EventEmitter"
class PanelStore extends EventEmitter {
  constructor() {

    // We always need to call this when extending a class.
    super();

    // The initial state of the store.
    this.state = {
      visible: true,
      items: [
        { name: 'First', selected: false },
        { name: 'Second', selected: false }
      ]
    };

    dispatcher.register((e) => {
      switch (e.type) {

        // Toggles the visibility of the panel, which is
        // visible by default.
        case 'PANEL_TOGGLE':
          this.state.visible = !this.state.visible;
          this.emit('change', this.state);
          break;

        // Selects an object from "items", but only
        // if the panel is visible.
        case 'ITEM_SELECT':
          let item = this.state.items[e.payload];

          if (this.state.visible && item) {
            item.selected = true;
            this.emit('change', this.state);
          }

          break;
      }
    });
  }
}

export default new PanelStore();
