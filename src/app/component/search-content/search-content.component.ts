import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css']
})
export class SearchContentComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      city:[""],
      coutry:[""],
    });
   }
   searchTes(){
    localStorage.setItem("searchObj" , JSON.stringify(this.searchForm.value));
   }
 

}
