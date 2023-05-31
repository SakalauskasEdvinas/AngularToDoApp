import { Component } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular To do application';
  filter: "all" | "active" | "isComplete" = "all";

  allItems = [
    { description: "study", isComplete: true },
    { description: "eat", isComplete: false },
    { description: "exercise", isComplete: false },
    { description: "contemplate", isComplete: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }

    return this.allItems.filter((item) =>
      this.filter === "isComplete" ? item.isComplete : !item.isComplete
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      isComplete: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }


}

