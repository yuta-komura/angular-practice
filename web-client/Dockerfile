FROM node:22

WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# プロジェクト依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "500"]
