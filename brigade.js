function kubeJobRunner (config, k) {
    k.storage.enabled = false
    k.image = "lachlanevenson/k8s-kubectl:v1.8.2"
    k.tasks = [
        `kubectl set image deployment/heroes-web-deploy heroes-web-cntnr=<youracrhere>.azurecr.io/azureworkshop/rating-web:${config.get("imageTag")}`
    ]
}
