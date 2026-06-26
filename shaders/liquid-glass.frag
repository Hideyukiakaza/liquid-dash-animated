uniform sampler2D tex;
uniform vec2 u_dock_position;
uniform vec2 u_dock_size;
void main() {
    vec2 uv = cogl_tex_coord_in[0].st;
    // Physical lens refraction simulation matrix
    vec2 center = vec2(0.5, 0.5);
    vec2 distort = (uv - center) * 0.05 * (1.0 - dot(uv - center, uv - center));
    vec4 color = texture2D(tex, uv + distort);

    // Add thin white specular edge rim lighting
    float edge = smoothstep(0.48, 0.50, max(abs(uv.x - 0.5), abs(uv.y - 0.5)));
    color.rgb = mix(color.rgb, vec3(1.0), edge * 0.3);

    cogl_color_out = color;
}
