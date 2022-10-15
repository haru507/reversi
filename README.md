## 環境構築

1. `cp .env.sample .env`
2. envの内容を入力する(Discordにある)
3. `docker compose up -d` でコンテナ立ち上げ
4. `docker compose exec web bash` でコンテナ内入る
5. `rails db:create`
6. http://localhost:4040 にアクセス

## 単体テスト
```shell
docker-compose run web rspec
```

## 開発作業手順

1. mainブランチから`feature/〇〇`でブランチを切る
2. 実装(単体テスト含)
3. 良きタイミングでpush
   1. commitでrubocopエラーが出たら修正
4. 完了したらプルリクを出す
   1. 他2人が確認
   2. 問題なければmainブランチにマージ

エラーサンプル
```
      ======================================
      ======= 🚧 Rubocop Checking 🚧 =======
      ======================================
Inspecting 1 file
W

Offenses:

app/channels/application_cable/connection.rb:2:1: C: [Correctable] Layout/IndentationWidth: Use 2 (not 8) spaces for indentation.
        class Connection < ActionCable::Connection::Base
^^^^^^^^
app/channels/application_cable/connection.rb:3:3: W: [Correctable] Layout/EndAlignment: end at 3, 2 is not aligned with class at 2, 8.
  end
  ^^^
```
   
### 開発関係決め事
1. コミットメッセージは英語でも日本語でも好きな方で(今回統一しない)
2. タスクはissueで管理。プルリクには対象issueを紐づける
  
## 定期進捗報告
毎週日曜に進捗報告
テンプレ
```
・今週やったこと
　　〇〇〇〇　　　　　進捗率：大体◯%
・困っていること
　　〇〇〇〇
・来週やること
　　〇〇〇〇
```
