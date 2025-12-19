AFRAME.registerComponent('world-place', {
  init() {
    const reticle = document.getElementById('reticle')
    const box = document.getElementById('box')

    this.el.sceneEl.addEventListener('click', () => {
      if (!reticle.object3D.visible) return

      box.object3D.position.copy(reticle.object3D.position)
      box.object3D.quaternion.copy(reticle.object3D.quaternion)
      box.setAttribute('visible', true)
    })
  }
})

document.querySelector('a-scene').setAttribute('world-place', '')
