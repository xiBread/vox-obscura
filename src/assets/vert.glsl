attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec3 vVertexNormal;
varying vec2 vVertTexCoord;

void main(void) {
	gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);

	vVertexNormal = aNormal;
	vVertTexCoord = aTexCoord;
}
