# フィボナッチ数を返す API サービスの開発
## テストを追加する前のAPI (ver.1)
https://fibonacci-api-1lch.onrender.com
## テスト追加後のAPI (ver.2)
https://fibonacci-api-60j3.onrender.com/fib/1

追加前の構成だとテストがしづらかったので、テストしたい数字を返す部分だけ切り出した。そしたら2回目以降値が返るのが遅くなってしまった。
ユニットテストは全て通っているが、実際にコンソールされる値が現状異なってしまっている。

## ソースコードの構成(ver.1)
- index.js (全て一つのファイルに記述)
- package-lock.json
- package.json
- README.md
- .gitignore
## ソースコードの構成(ver.2)
- index.js (expressを用いた通信の部分)
- fibonacci.js (getFibonacci関数の返り値をもとにAPIのレスポンスを規定)
- getFibonacci.js (入力された値番目のフィボナッチ数を返す関数)
- getFibonacci.test.js (getFibonacci関数のテストファイル)
- package-lock.json
- package.json
- README.md
- .gitignore

# webブラウザがwebページを表示する仕組み
question2.txtに記述


