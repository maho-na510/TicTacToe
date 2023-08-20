//mainfile
import{playerSelect} from './playerSelect.js';
import{playerMove} from './playerMove.js';
//cpu
import{cpu} from './stronger.js';
import{winCheck} from './winCheck.js';
import{drawCheck} from './drawCheck.js';
//バリデーション
import{validationCheck} from './errorCheck.js';

//罫線を作る
let board = [
    ["","",""],["","",""],["","",""]
];

//ctrl C で終了
//先攻後攻を決める
playerSelect()

//まるばつを書き込む
playerMove()

//入力エラー判定
validationCheck()

//勝敗引き分け判定
winCheck()

drawCheck()

//満たしていなければ、攻守交代

//勝敗が決まるor引き分けの場合は、メッセージを表示してゲームを終了する
