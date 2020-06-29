import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
import vertexShader from './glsl/vertex.glsl'
import fragmentShader from './glsl/fragment.glsl'
export default class Gl {
  constructor(prop) {
    this.rot = 0
    this.scene = new THREE.Scene()
    this.img = prop.img
    this.nowChange = false
    this.changeFrame = 0

    this.camera = new THREE.PerspectiveCamera(
      45,
      (0.53 * window.innerWidth) / window.innerHeight,
      0.1,
      100
    )

    this.camera.position.z = 1
    this.renderer = new THREE.WebGLRenderer({
      canvas: prop.$canvas,
      antialias: true
    })
    this.renderer.setSize(window.innerWidth * 0.53, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    // eslint-disable-next-line unicorn/number-literal-case
    this.renderer.setClearColor(0xf5f4df, 1)

    this.clock = new THREE.Clock()

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableZoom = false
    this.controls.enableRotate = false
  }

  init() {
    this.createMesh()
    this.addEvents()
    this.composeRender()
  }

  changeImage(img) {
    this.img = img
    this.material.uniforms.uTexture.value = new THREE.TextureLoader().load(
      this.img,
      this.renderer.render(this.scene, this.camera)
    )
    this.changeFrame = 0
    this.nowChange = true
    this.material.needsUpdate = true
  }

  composeRender() {
    this.composer = new EffectComposer(this.renderer)
    const renderPass = new RenderPass(this.scene, this.camera)
    this.composer.addPass(renderPass)
    this.customPass = new GlitchPass()
    this.customPass.curF = 119
    this.customPass.renderToScreen = true
    this.composer.addPass(this.customPass)
  }

  createMesh() {
    this.geometry = new THREE.PlaneGeometry(0.5, 0.5, 16, 16)
    const texture = new THREE.TextureLoader().load(
      this.img,
      this.renderer.render(this.scene, this.camera)
    )
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uTexture: {
          value: texture
        },
        uPercent: { value: 1.0 }
      },
      transparent: true,
      depthWrite: true,
      side: THREE.DoubleSide
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)
    this.mesh.position.set(0.0, 0.15, 0.0)
  }

  addEvents() {
    this.animationRequestId = window.requestAnimationFrame(this.run.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }

  dispose() {
    window.removeEventListener('resize', this.onResize.bind(this))
    this.renderer.forceContextLoss()
    window.cancelAnimationFrame(this.animationRequestId)
    this.renderer.domElement = null
    this.renderer.dispose()
    this.scene.dispose()
    this.material.dispose()
    this.geometry.dispose()
    this.renderer = null
    this.composer = null
    this.material = null
  }

  run() {
    if (this.renderer != null) {
      requestAnimationFrame(this.run.bind(this))
      this.render()
    }
  }

  render() {
    this.customPass.curF = 119 // never glitched
    if (this.nowChange && this.changeFrame < 15) {
      this.customPass.curF = 0
      this.changeFrame = this.changeFrame + 1
    }
    if (this.changeFrame >= 15) {
      this.customPass.curF = 119
      this.nowChange = false
      this.changeFrame = 0
    }
    this.material.uniforms.uTime.value = this.clock.getElapsedTime()
    this.rot += 0.5 // 毎フレーム角度を0.5度ずつ足していく
    // ラジアンに変換する
    const radian = (this.rot * Math.PI) / 180
    // 角度に応じてカメラの位置を設定
    this.camera.position.x = 1.0 * Math.sin(radian)
    this.camera.position.z = 1.0 * Math.cos(radian)
    // 原点方向を見つめる
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    this.material.uniforms.uPercent = { value: Math.tan(radian) }
    // this.renderer.render(this.scene, this.camera)
    // this.customPass.uniforms.time.value = this.clock.getElapsedTime()
    this.composer.render()
  }

  onResize() {
    const w = window.innerWidth * 0.53
    const h = window.innerHeight

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(w, h)

    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }
}
