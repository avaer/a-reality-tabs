AFRAME.registerPrimitive('menu-item', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'circle',
            segments: 6,
            thetaStart: 90,
            radius:0.1,
            skipCache: true
        },
        scale:{x:1,y:1,z:1},
        material: {
            shader: 'flat',
            transparent: true,
            alphaTest: "0.3",
            color:'#ffffff',
            side:'double'
        }
    },
    mappings: {
        src:'material.src',
        opacity:'material.opacity',
        color:'material.color',
        radius:'geometry.radius'
    }
}));