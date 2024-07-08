import * as THREE from "three"

const vertexShader = `

    varying vec2 vUv;

    attribute float a_x1;
    attribute float a_x2;
    attribute float a_z1;
    attribute float a_z2;

    varying float v_x1;
    varying float v_x2;
    varying float v_z1;
    varying float v_z2;

    void main() {
        vUv = uv;
        v_x1 = a_x1;
        v_x2 = a_x2;
        v_z1 = a_z1;
        v_z2 = a_z2;

        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;
    }
`;
const fragmentShader = `
    varying vec2 vUv;
    varying float v_x1;
    varying float v_x2;
    varying float v_z1;
    varying float v_z2;

    
    void main() {
        float distance = sqrt(pow(0.5 - vUv.x, 2.0) + pow(0.5 - vUv.y, 2.0)) * 1.7;
        float opacity = pow(distance, exp(1.0));
        vec3 color = vec3(0.0, 0.5, 0.8);

        if(vUv.x < 0.01) {
            opacity = 1.0;
            color = vec3(0.0, 1.0, 1.0);
        }
        if(vUv.y < 0.01) {
            opacity = 1.0;
            color = vec3(0.0, 1.0, 1.0);
        }

        if(vUv.x > 0.99) {
            opacity = 1.0;
            color = vec3(0.0, 1.0, 1.0);
        }
        if(vUv.y > 0.99) {
            opacity = 1.0;
            color = vec3(0.0, 1.0, 1.0);
        }

        float x = v_x1;
        float z = gl_FragCoord.z / 500.0;
        gl_FragColor = vec4(color, opacity);
    }
`;

const CellShader = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
})

export default CellShader