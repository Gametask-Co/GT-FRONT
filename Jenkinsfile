def configFile = ''
def buildImage = 'node:13-alpine'

continuousDelivery(configFile) {
  docker.image(buildImage).inside() {
    sh ""
  }
}
