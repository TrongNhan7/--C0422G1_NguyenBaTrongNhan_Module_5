import {Injectable} from '@angular/core';
import {IWord} from "../model/iWord";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {word: 'Mu', mean: 'Vô đối', detail: 'Là trùm'},
    {word: 'cannabis', mean: 'cần sa', detail: 'Hùng hay hít'},
    {word: 'punch', mean: 'cú đấm', detail: 'Dùng cân bằng mắt Vinh'},
  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  findByWord(word: string) {
    return this.words.filter(w => w.word === word)[0];
  }
}
