# Project Scope
We are building a custom GNOME Shell extension by merging the physics loops of 'liquid-dash-animated' with the custom GLSL fragment shader rendering pipelines of 'liquid-glass'.

# Architectural Requirements
- Bind the Clutter.ShaderEffect engine natively to the moving actor wrappers.
- Forward real-time container bounds to the fragment shader uniforms during animation ticks.
