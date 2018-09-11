import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  items = [
    {id: 1, name:'・表示(print)',
     Description:"説明 画面上に文字や数字を表示させることを教えるよ！"},
    {id: 2, name:'・コメント',
     Description:"説明　次は作ったプログラムをわかりやすくするのにコメントを使って分かりやすい説明を書くことができるよ"},
    {id: 3, name:'・変数', 
     Description:"説明　変数という入れ物に文字や数字をいれておけば、その変数を表示させると変数に入れていた文字や数字が表示させることができるよ。"},
    {id: 4, name:'・演算子（足し算、引き算）',
     Description:"説明　算数の計算で使う演算子（+や-）をつかい変数を使って計算も行うことができるし、文字もつなげることができるよ。"},
    {id: 5, name:'・IF文',
     Description:"説明　分岐はもし１だったら赤、２だったら青というように条件によって結果が変わることだよ"},
    {id: 6, name:'・比較演算子',
     Description:"説明　条件分岐の時に使える、比較のやり方を覚えよう。数字のどっちが大きいのか、小さいのかを比べることができるよ"},
    {id: 7, name:'・繰り返し',
     Description:"説明　同じプログラムを何回も書くのはめんどくさい！！そんな時には繰り返し処理を使って、プログラムを何回か動かすようにしてみよう"},
    {id: 8, name:'・配列',
     Description:"たくさんのデータを扱うときに便利な配列を使ってみよう。例えば、カレンダーの月を変数に一つ一つ入れると１２個必要だけど配列だと１つでかんりできるんやで"}
 ];

  constructor() { }

  ngOnInit() {
  }

}
