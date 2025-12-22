import script from "./modules/script";

new script()

import {responsiveImmersiveComponent} from '/components/responsive-immersive.js'
import {
  portalCameraComponent, tapToPlacePortalComponent,
  promptFlowComponent, spinComponent,
} from '/components/portal-components.js'

AFRAME.registerComponent('portal-camera', portalCameraComponent)
AFRAME.registerComponent('spin', spinComponent)

AFRAME.registerComponent('prompt-flow', promptFlowComponent)
AFRAME.registerComponent('tap-to-place-portal', tapToPlacePortalComponent)

AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)

AFRAME.registerComponent('auto-play-video', {
  schema: {
    video: {type: 'string'},
  },
  init() {
    const v = document.querySelector(this.data.video)
    v.play()
  },
})
