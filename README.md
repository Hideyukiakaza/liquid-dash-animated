# Liquid Dash Animated

A GNOME Shell 40+ Extension

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.paywithchai.in/hideyukiakaza)

![Screen Shot](https://github.com/Hideyukiakaza/liquid-dash-animated/blob/main/demo2.png)

### Notice

* Supports GNOME 42, 43, 44, 45, 46, 47, 48, 49
* Initial support for GNOME 50
* Older versions are largely unsupported

### Features

* Multi-monitor support (new!)
* Dash docked at the desktop
* Animated dock icons
* Resize icons
* Autohide/intellihide
* Dock positions: bottom, top, left, right
* Scroll wheel to cycle windows
* Click to maximize/minimize windows
* Style top panel
* Panel mode
* Show/Hide Apps icon
* Analog clock
* Dynamic calendar
* Dynamic trash icon
* Mounted devices
* Downloads icon with fan animation (new!)
* Icon color effects (Tint, Monochrome)
* Custom icons

### Third-Party Compatibility

* [Compiz Magic Lamp Animation](https://github.com/PR3SIDENT/gnome-shell-extension-compiz-alike-magic-lamp-effect)
* [Blur my Shell](https://github.com/aunetx/blur-my-shell)

### Prerequisites

* GNOME Shell (version 42+)

### Installation

#### Manual Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Hideyukiakaza/liquid-dash-animated.git
   ```
2. Build and install using the `Makefile`:
   ```bash
   cd liquid-dash-animated
   make
   ```

#### Using the AUR (Arch User Repository)

*This requires an Arch-based distribution to work:*
```bash
git clone https://aur.archlinux.org/gnome-shell-extension-liquid-dash-animated.git
cd gnome-shell-extension-liquid-dash-animated
makepkg -si
```

#### From GNOME Extensions Repository

Visit [https://extensions.gnome.org/extension/4994/liquid-dash-animated/](https://extensions.gnome.org/extension/4994/liquid-dash-animated/)

## Theme Support

Export your settings under **Style** > **Themes Button** > **"Export"**...

This will be saved to `/tmp/theme.json`. Edit this JSON file and save it under `~/.config/lda/themes` or at `{extension_path}/themes` so that it becomes available in the extension settings app.

## Custom Icons

Create a folder under `~/.config/lda/icons` and place your SVG icons there. Then create a file under `~/.config/lda/icons.json` using the following format:

```json
{
  "icons": {
     "view-app-grid-symbolic": "icons/show-apps-icon.svg",
     "user-trash": "icons/my-own-trash.svg",
     "user-trash-full": "icons/my-own-trash-full.svg"
  }
}
```

You may also use **icon names** from your favorite icon theme using the following format:

```json
{
  "icons": {
     "view-app-grid-symbolic": "show-apps-icon",
     "user-trash": "trash",
     "user-trash-full": "trash-full"
  }
}
```

The icons `show-apps-icon`, `trash`, and `trash-full` must be available in your icon theme folder.

Alternatively, you may override icons via app ID:

```json
{
   "apps": {
      "spotify_spotify": "icons/spotify.svg"
   }
}
```

Check the logs to see the icon names currently being used by Liquid Dash Animated. Search for log text such as:

```sh
Icon created "user-trash"
```

## Custom Config

Create a file `config.json` under the folder `~/.config/lda/`

```json
{
  "file-explorer": "nemo",
  "icon-size": "24"
}
```

* Disable then enable the extension to load the configuration
* `file-explorer` overrides the default "nautilus"
* `icon-size` overrides the icon scale from the preferences panel

## Custom CSS

Create a file `style.css` under the folder `~/.config/lda/`

For now, you will have to use Looking Glass (GNOME's built-in debugger) to inspect class names and styles.

## Blurred Background

The blurred background feature requires **ImageMagick** to be installed on the system. This generates the blurred image based on the desktop wallpaper.

## GNOME 42, 43, 44 Support

To build and install Liquid Dash Animated for older versions (prior to GNOME 45), run:

```bash
make g44
```

## Bug Reporting

When reporting bugs, please include the following details:

* Linux Flavor/Distribution and version
* GNOME version (e.g. 45.xx)
* Liquid Dash Animated release number

Check for any exceptions in the logs by running the following in the terminal:

```bash
journalctl /usr/bin/gnome-shell -f -o cat
```

To check for incompatibilities with other extensions, try running Liquid Dash Animated with all other extensions disabled.

To check for lag or inefficiency, run the following in the terminal and observe `gnome-shell` CPU usage:

```bash
top -d 0.5
```

On a Dell XPS 13 (i5-6200U), CPU usage is about 50% with icon quality set to High, frame rate set to High, and shadows enabled.

Please be specific about the errors encountered, and attach screenshots if possible.

## Testing Rig

* Fedora 43 (GNOME 49)
* Arch Linux (GNOME 49)
* Fedora 37 Live (GNOME 42)
* Ubuntu 23 (GNOME 45)

## License

Distributed under the GPL 3.0 License. See [LICENSE](LICENSE) for more information.
