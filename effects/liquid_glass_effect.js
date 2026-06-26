'use strict';

import Shell from 'gi://Shell';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';

const getLiquidGlassShaderSource = (extensionDir) => {
  const SHADER_PATH = GLib.build_filenamev([
    extensionDir,
    'shaders',
    'liquid-glass.frag',
  ]);

  try {
    return Shell.get_file_contents_utf8_sync(SHADER_PATH);
  } catch (e) {
    log(`[lda] error loading shader from ${SHADER_PATH}: ${e}`);
    return null;
  }
};

export const LiquidGlassEffect = GObject.registerClass(
  {},
  class LDALiquidGlassEffect extends Clutter.ShaderEffect {
    _init(params) {
      super._init(params);
      this._dock_position = [0, 0];
      this._dock_size = [0, 0];
    }

    preload(path) {
      this._source = getLiquidGlassShaderSource(path);
      if (this._source) this.set_shader_source(this._source);
    }

    set_dock_parameters(x, y, width, height) {
      if (this._dock_position[0] !== x || this._dock_position[1] !== y) {
        this._dock_position = [x, y];
        this.set_uniform_float('u_dock_position', 2, this._dock_position);
      }
      if (this._dock_size[0] !== width || this._dock_size[1] !== height) {
        this._dock_size = [width, height];
        this.set_uniform_float('u_dock_size', 2, this._dock_size);
      }
    }

    vfunc_paint_target(paint_node = null, paint_context = null) {
      // Clutter handles 'tex' automatically for the actor's content

      if (paint_node && paint_context)
        super.vfunc_paint_target(paint_node, paint_context);
      else if (paint_node) super.vfunc_paint_target(paint_node);
      else super.vfunc_paint_target();
    }
  }
);
