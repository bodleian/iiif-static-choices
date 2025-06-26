iiif-static-choices
===

A IIIF static tile and manifest generator built using Python to generate IIIF tiled images and manifests.

This application was put together to de-mystify the process of creating and hosting IIIF content and allow implementations
without the need for specialist infrastructure such as imaging servers (iip) and manifest servers.

It also includes the Bodleian Libraries Mirador plug-in written as part of the ARCHiOx project and the Mirador image-tools
plug-in and is also intended as a vehicle to test the capabilities of using 2D images to encode and present 3D information.

A simple Python server application is included to serve the Mirador or Openseadragon via your local browser, it is not
intended for a production environment and would need replacing with something else more suitable for the job.

Licensing
===

This project is covered by the [Mozilla Public License](LICENSE) except for the bundled [Mirador](https://github.com/ProjectMirador/mirador?tab=Apache-2.0-1-ov-file#readme) and [Openseadragon](https://github.com/openseadragon/openseadragon?tab=BSD-3-Clause-1-ov-file#readme) builds
which are covered by their own licenses.  

The tile generation part of this project is based on and translated from the work of Glen Robson in his Java [iiif-tiler](https://github.com/glenrobson/iiif-tiler)

Dependencies
===

- Python 3.9
- Poetry

Installation Instructions
===

Install the project after installing Python and Poetry, as follows:

```bash
poetry install --no-root
```

Basic Instructions
===

For this quick guide we'll be using the existing example images and manifest-config.yml files present in the `image` directory.

1. Run the tile generation as follows, this will generate v3 static tiles in the `iiif/image` folder:

    ```bash
    poetry run python iiif_generator.py tiles -t 256 -v 3.0
    ```
2. Run the manifest generator as follows, this will generate a v3 manifest in the `iiif/manifest` folder:

    ```bash
    poetry run python iiif_generator.py manifest -f ammonite-config.yml -o pyritised-ammonite.json 
    ```

3. Run the basic server application as follows:

    ```bash
    poetry run python server 8000
    ```

Using your own images and manifest-config.yml
===

To use your own images and manifest-config.yml do the following:

1. Copy your image files into the project directory called `image`.

2. Create a manifest_config.yml file from the template provided, add real values to this and copy this to the `image` directory too.  You can find a populated one in `image` for reference. Or skip ahead and use the examples already there.

3. Run through the steps in [Basic Instructions](#basic-instructions) again.

What should it look like?
===

If you've done the above set up correctly and the server is running, you can go to your browser and enter the address: http://0.0.0.0:8000/ and you will see the following.  Click the buttons like the cursor does in the animated gif to play around in 2.5D in Mirador.

![Animated picture showing a pyritised ammonite and someone interacting with it using the ARCHiOx Mirador plug-in](examples/fossil.gif)

Todo
===

- add in thumbnail generation for the choices layers in Mirador, this could be done during manifest generation  
- add in logo generation
- add in multi-page manifests
- add some unit tests to prevent development breaking

Docker Support
===

A Docker container with web interface is available for easier deployment and usage without Python installation.
See [docker-gui/README.md](docker-gui/README.md) for complete Docker documentation and GUI usage instructions.
