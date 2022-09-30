import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../model/iWord";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  dictionaries: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionaries = this.dictionaryService.getAll();
  }

}
