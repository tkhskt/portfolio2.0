import Gl from './Gl'

export default class ArtworkGL {
  constructor(props) {
    this.props = props
    this.init()
  }

  init() {
    this.scene = new Gl(this.props)
    this.scene.init()
  }

  resize = () => {
    // todo
  }

  loop = () => {
    // todo
  }

  changeImg = (img) => {
    this.scene.changeImage(img)
  }

  destroy = () => {
    this.scene.dispose()
    this.scene = null
  }

  render() {
    // todo
  }
}
