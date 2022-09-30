import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../model/iWord";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const w = paramMap.get('word');
      this.word = dictionaryService.findByWord(w);
    })
  }

  ngOnInit(): void {
  }

}
