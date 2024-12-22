FROM node:18

WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# Angular CLI をグローバルインストール
RUN npm install -g @angular/cli

# プロジェクト依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "500"]
