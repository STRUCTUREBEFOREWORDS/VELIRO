# Git Workflow

このプロジェクトを常に最新版に保つための最短コマンド集です。

## 作業前

```bash
git pull origin main
```

GitHub 側や別端末で更新が入っていても、作業開始前にこれを実行すれば同期できます。

## 作業後

```bash
git add -A
git commit -m "update"
git push origin main
```

## 毎回の最短手順

```bash
git pull origin main
git add -A
git commit -m "update"
git push origin main
```

## 状態確認

```bash
git status
git log --oneline --max-count=5
```

## 注意

- このサイトはプロジェクトフォルダ自体が Git リポジトリです。
- 作業ディレクトリは `/home/sairen/デスクトップ/SAIREN/ウェブサイト制作会社/ウェブサイト会社` を使います。
- `git pull` をせずにそのまま `git push` すると、更新競合で弾かれることがあります。
- 壊れた状態のまま自動 push しないため、push は手動運用のままが安全です。