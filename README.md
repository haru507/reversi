# reversi
会員登録付きリバーシWebアプリ

## 環境構築

1. `cp .env.sample .env`
2. envの内容を入力する(Discordにある)
3. `docker compose up -d` でコンテナ立ち上げ
4. `docker compose exec web bash` でコンテナ内入る
5. `rails db:create`
6. http://localhost:4040 にアクセス

## 開発作業手順

1. mainブランチから`feature/〇〇`でブランチを切る
2. 実装(単体テスト含)
3. プルリクを出す
   1. 他2人が確認
   2. 問題なければmainブランチにマージ
  
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
