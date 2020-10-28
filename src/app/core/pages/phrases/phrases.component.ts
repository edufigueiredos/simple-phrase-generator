import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss']
})
export class PhrasesComponent implements OnInit {

  firstWordList = ['hate', 'want', 'have', 'like', 'need', 'prefer', 'love'];
  secondWordList = ['have', 'eat', 'buy', 'drink', 'sell', 'go', 'work'];
  thirdWordList = ['money', 'apartment', 'house', 'home', 'coke', 'water', 'tequila',
    'popcorn', 'hot chocolate', 'school', 'car', 'banana cake', 'bacon', 'wine', 'bike'];
  fourthWordList = ['in the evening', 'in the afternoon', 'always', 'every now and then',
    'often', 'every day', 'sometimes', 'not so often', 'once in a while', 'never', 'in the morning', 'today', 'tomorrow'];
  firstWord = this.firstWordList[0];
  secondWord = this.secondWordList[0];
  thirdWord = this.thirdWordList[0];
  fourthWord = this.fourthWordList[0];

  constructor() { }

  ngOnInit(): void {
    this.randomPhrase();
  }

  randomPhrase(): void {
    const indexFirstWorld = this.returnARandomNumber(this.firstWordList.length);
    const indexSecondWorld = this.returnARandomNumber(this.secondWordList.length);
    const indexThirdWorld = this.returnARandomNumber(this.thirdWordList.length);
    const indexFourthWorld = this.returnARandomNumber(this.fourthWordList.length);

    this.firstWord = this.firstWordList[indexFirstWorld];
    this.secondWord = this.secondWordList[indexSecondWorld];
    this.thirdWord = this.thirdWordList[indexThirdWorld];
    this.fourthWord = this.fourthWordList[indexFourthWorld];
  }

  returnARandomNumber(listLength): number {
    return Math.floor(Math.random() * listLength);
  }

}
