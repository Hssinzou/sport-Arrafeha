import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  SearchForm: FormGroup
  result : any = {};
  constructor(private formbulder: FormBuilder,
    private weatherservice: WeatherService) { }

  ngOnInit() {
    this.SearchForm = this.formbulder.group({
      City: ["", [Validators.required]],
    })
  }
  search() {
    console.log("here response from be " , this.SearchForm.value);
    this.weatherservice.search(this.SearchForm.value).subscribe((data) => {
      console.log("here respose from be", data.result);
      this.result = data.result;
    })
  }

}
