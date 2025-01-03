# Dockerコンテナを起動
up:
	docker-compose up

# すべてのDockerキャッシュ、イメージ、コンテナ、ネットワーク、ボリュームを削除
clean:
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -af --volumes

# これらのターゲットは常に実行されるように指定
.PHONY: up clean
