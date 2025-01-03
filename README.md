# Angular Practice

Angular開発の学習を目的としたリポジトリです。

---

## セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/yuta-komura/angular-practice.git
cd angular-practice
```

### 2. Chocolatey のインストール(Windowsのみ)

1. **Chocolatey のインストール**
   管理者権限で PowerShell を開き、以下を実行します。
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; \
   [System.Net.ServicePointManager]::SecurityProtocol = \
   [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; \
   iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

### 3. nvm のインストール

#### Windows

1. **nvm のインストール**
   管理者権限で PowerShell を開き、以下のコマンドを実行します。

   ```powershell
   choco install nvm
   ```

2. **Node.js バージョンのインストールと適用**
   プロジェクトルートにある .nvmrc ファイルを使用します。
   管理者権限で PowerShell を開き、以下のコマンドを実行します。

   ```powershell
   nvm install $(Get-Content .nvmrc)
   ```

3. **インストール確認**
   ```powershell
   node -v
   npm -v
   ```

#### macOS

1. **nvm のインストール**
   macOS では、`nvm` を公式スクリプトからインストールします。
   ターミナルで以下のコマンドを実行します。

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   ```

2. **nvm を有効化**
   ターミナルの設定ファイルに以下を追加します（使用しているシェルによってファイルが異なります）。

   - **Bash** : `~/.bashrc`
   - **Zsh** : `~/.zshrc`

   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

   設定を反映させるには、以下を実行します。

   ```bash
   source ~/.bashrc # または ~/.zshrc
   ```

3. **Node.js バージョンのインストールと適用**
   プロジェクトルートにある `.nvmrc` ファイルを使用します。
   以下のコマンドを実行します。

   ```bash
   nvm install $(cat .nvmrc)
   ```

4. **インストール確認**
   ```powershell
   node -v
   npm -v
   ```

### 4. 依存関係のインストール

1. **依存関係のインストール**
   プロジェクトルートで以下のコマンドを実行します。
   ```
   npm install
   ```

### 5. Angular CLIのグローバルインストール

1. **Angular CLIのグローバルインストール**
   ```
   npm install -g @angular/cli
   ```

### 6. make のインストール

#### Windows

1. **make コマンドのインストール**

   ```powershell
   choco install make
   ```

2. **インストール確認**
   ```powershell
   make --version
   ```

#### macOS

1. **Command Line Tools をインストール**

   ```bash
   xcode-select --install
   ```

2. **インストール確認**
   ```bash
   make --version
   ```

### 7. Docker および Docker Compose のインストール

#### Windows

1. **Docker のインストール**
   管理者権限で PowerShell を開き、以下のコマンドを実行します。
   ```powershell
   choco install docker-desktop
   ```
2. **インストール確認**
   ```powershell
   docker --version
   docker-compose --version
   ```

#### macOS

1. **Docker のインストール**
   ```bash
   brew install --cask docker
   ```
2. **インストール確認**
   ```powershell
   docker --version
   docker-compose --version
   ```

---

## プロジェクトの操作

### コマンド

#### 起動

プロジェクトルートで以下のコマンドを実行します。
Docker コンテナを起動し、プロジェクトを実行します。

```bash
make up
```

- `make up` は以下を実行するエイリアスです。
  ```bash
  docker-compose up
  ```
- 実行後、ブラウザで以下の URL にアクセスして動作確認を行います。
  - [http://localhost:4200/](http://localhost:4200/)

#### すべてのDockerキャッシュ、イメージ、コンテナ、ネットワーク、ボリュームを削除

以下のコマンドで Docker コンテナを停止します。

```bash
make clean
```

- `make down` は以下を実行するエイリアスです。

  ```bash
  docker-compose down --rmi all --volumes --remove-orphans
  docker system prune -af --volumes
  ```

### テスト

#### ユニットテストの実行

```bash
ng test
```

#### エンドツーエンドテストの実行

```bash
ng e2e
```
