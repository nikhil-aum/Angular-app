import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-box',
  styles: `
      input {
      padding: 10px;
      width: 250px;
      border: 1px solid gray;
      border-radius: 5px;
      font-size: 16px;
    }
    input:focus {
      border-color: blue;
      outline: none;
    }

    input::placeholder {
      color: red;
      opacity: 1;
      font-size: 14px;
    }
  `,
  template: ` 
    <p>
       <input type="text" placeholder="start type ">
    </p> 
    `,
})
export class SearchBox {


}
