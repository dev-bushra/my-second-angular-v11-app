import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // the view for app component
  styleUrls: ['./app.component.css'] // the css file for app component
})
export class AppComponent {

  // Data
  title = 'my-angular-project';
  ninjas: any[] = [
    { img: 'https://picsum.photos/200', name: 'Bushra Aboubida', price: 500, color: 'black', },
    { img: 'https://picsum.photos/200', name: 'Ali Kamak', price: 300, color: 'red', },
    { img: 'https://picsum.photos/200', name: 'Ninja Sus', price: 100, color: 'blue', },
  ];
  searchTerm: string = '';
  filteredItems: any[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  newNinja: any = { };


  // Methods
  removeNinja(ninja): void {
    let temp = this.ninjas.indexOf(ninja)
    this.ninjas.splice(temp, 1)
  }
  addNinja(): void {
    this.ninjas.push({
      img: 'https://picsum.photos/200',
      name: this.newNinja.name,
      color: this.newNinja.color,
      price: this.newNinja.price
    })

    this.newNinja.name = ''
    this.newNinja.color = ''
    this.newNinja.price = ''
  }
  
  performSearch(): void {
    this.filteredItems = this.ninjas.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchTermChange(): void {
    this.performSearch();
  }
  
  sortItems(): void {
    this.ninjas.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  updateSortOrderPrice(newSortOrder: 'asc' | 'desc'): void {
    this.sortDirection = newSortOrder;
    this.sortItems();
  }
  updateSortOrder(newSortOrder: 'asc' | 'desc'): void {
    this.sortDirection = newSortOrder;
    this.sortItems();
  }
}
