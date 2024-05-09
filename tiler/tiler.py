#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

import imageio
import json
import logging.config
import math
import numpy
import yaml
import os

from PIL import Image
from typing import Dict, List, Optional
from tiler.image_info import ImageInfo
from tiler.info_json import InfoJson, VERSION3
from tiler.iiif_image import IIIFImage

log_config: Dict = yaml.full_load(open('logging.yml', 'r'))
logging.config.dictConfig(log_config)
log = logging.getLogger('__name__')

Image.MAX_IMAGE_PIXELS = None


class Tiler:
    """
    This class converts images to IIIF tiles. It has static methods create_image and create_images to create the IIIF
    images.

    Attributes:
        image: ImageInfo class instance containing the key, value pairs of an image.json file.
        version: String containing the IIIF image API version we are currently using for tile generation.
    """
    def __init__(self, image: Optional[ImageInfo] = None, version: str = ""):
        """
        Method that gets initialized with every instance of the class.
        :param image: ImageInfo class instance containing the key, value pairs of an image.json file.
        :param version: String containing the IIIF image API version we are currently using for tile generation.
        """
        self.image: Optional[ImageInfo] = image
        self.version: str = version

    def get_output_path(self, image_directory: str) -> str:
        """
        Method to get the output file path for the tiles generated from a static image.
        :param image_directory: String containing the directory you want to output the tiles to.
        :return: String containing a file path.
        """
        return os.path.join(image_directory, self.image.get_id())

    def generate_tiles(self, image_directory: str, **kwargs):
        """
        Method to generate sizes and tiles from a static image
        :param image_directory: String containing
        :param kwargs: Optional kwarg for file_name, if not supplied will try and use the image ID.
        :raise: KeyError if key not found in image object.
        :raise: ValueError if value empty in image object.
        :raise: TypeError if value is wrong type in image object.
        :raise: IOError if a tile fails to write to disk.
        """
        file_name: str = kwargs.get('file_name')

        if not file_name:
            file_name: str = self.image.get_id()

        image_path: str = os.path.join(image_directory, file_name)
        self._generate_sizes(image_path)
        self._generate_scale_tiles(image_path)

    def _generate_sizes(self, image_path: str):
        """
        Protected method to generate sizes specified in the ImageInfo file.
        :param image_path: String containing the path of the image to generate sizes from.
        """
        for size in self.image.get_sizes():
            # convert image array to PIL image
            image = Image.fromarray(self.image.get_image())
            # resize image using PIL
            self.image_format: str = self.image.get_image_format()

            resized_image = image.resize((size.get("x"), size.get("y")))
            # convert image back to numpy array
            scaled_image: numpy.ndarray = numpy.asarray(resized_image)

            image_size: str = str(size.get("x")) + ","
            if self.version == VERSION3:
                image_size = str(size.get("x")) + "," + str(size.get("y"))

            output_file: str = os.path.join(image_path, "./full/", image_size + "/0/default" + self.image_format)
            os.makedirs(os.path.dirname(output_file), exist_ok=True)
            log.debug(output_file)

            imageio.v2.imwrite(output_file, scaled_image, self.image_format)
            if size.get("x") == self.image.get_width() and size.get("y") == self.image.get_height():
                if self.version == VERSION3:
                    image_size = "max"
                else:
                    image_size = "full"

                output_file = os.path.join(image_path, "./full/", image_size + "/0/default" + self.image_format)
                os.makedirs(os.path.dirname(output_file), exist_ok=True)
                imageio.v2.imwrite(output_file, scaled_image, self.image_format)

    def _generate_scale_tiles(self, image_path: str):
        """
        Protected method to generate scaled tiles sets.
        :param image_path: String containing the path of the image to generate tiles from.
        :raise: KeyError if key not found in image object.
        :raise: ValueError if value empty in image object.
        :raise: TypeError if value is wrong type in image object.
        :raise: IOError if a tile fails to write to disk.
        """
        for scale in self.image.get_scale_factors():
            scale_level_width: int = int(self.image.get_width() / scale)
            scale_level_height: int = int(self.image.get_height() / scale)
            tile_number_width: int = int(scale_level_width / self.image.get_tile_width())
            tile_number_height: int = int(scale_level_height / self.image.get_tile_height())

            if math.ceil(float(self.image.get_width() / scale)) % self.image.get_tile_width() != 0:
                tile_number_width += 1

            if math.ceil(float(self.image.get_height() / scale)) % self.image.get_tile_height() != 0:
                tile_number_height += 1

            for x in range(tile_number_width):
                for y in range(tile_number_height):
                    tile_x: int = x * self.image.get_tile_width() * scale
                    tile_y: int = y * self.image.get_tile_height() * scale
                    scaled_tile_width: int = self.image.get_tile_width() * scale
                    tiled_width_calculation: int = self.image.get_tile_width()
                    if tile_x + scaled_tile_width > self.image.get_width():
                        scaled_tile_width = self.image.get_width() - tile_x
                        tiled_width_calculation = int(math.ceil(float(scaled_tile_width / scale)))

                    scaled_tile_height: int = self.image.get_tile_height() * scale
                    tiled_height_calculation: int = self.image.get_tile_height()
                    if tile_y + scaled_tile_height > self.image.get_height():
                        scaled_tile_height = self.image.get_height() - tile_y
                        tiled_height_calculation = int(math.ceil(float(scaled_tile_height / scale)))

                    url_template: str = "./{},{},{},{}/{},{}/0/default{}"

                    url: str = url_template.format(
                        tile_x,
                        tile_y,
                        scaled_tile_width,
                        scaled_tile_height,
                        tiled_width_calculation,
                        "",
                        self.image_format
                    )

                    if self.version == VERSION3:
                        url = url_template.format(
                            tile_x,
                            tile_y,
                            scaled_tile_width,
                            scaled_tile_height,
                            tiled_width_calculation,
                            tiled_height_calculation,
                            self.image_format
                        )

                    output_file: str = os.path.join(image_path, url)
                    os.makedirs(os.path.dirname(output_file), exist_ok=True)

                    tile_image = Image.fromarray(self.image.get_image()).crop(
                        (
                            tile_x,
                            tile_y,
                            tile_x + scaled_tile_width,
                            tile_y + scaled_tile_height
                        )
                    )

                    scaled_image: Optional[numpy.ndarray]

                    if tile_image.size[0] == tiled_width_calculation and tile_image.size[1] == tiled_height_calculation:
                        scaled_image = numpy.asarray(tile_image)
                    elif tiled_width_calculation > 3 and tiled_height_calculation > 3:
                        try:
                            # resize image using PIL
                            resized_image = tile_image.resize((tiled_width_calculation, tiled_height_calculation))
                            # convert image back to numpy array
                            scaled_image: numpy.ndarray = numpy.asarray(resized_image)
                        except (KeyError, ValueError, TypeError)as error:
                            log.error("Tile: s% (width: s%, height: s%)", output_file, scaled_tile_width, scaled_tile_height)
                            log.error("Tile Image: width: s% height: s%", tile_image.size[0], tile_image.size[1])
                            log.error("Calculated with: s% height: s%", tiled_width_calculation, tiled_height_calculation)
                            raise error
                    else:
                        # create an image don't know why we need to do this, it's not documented at all
                        resized_image = tile_image.resize((tiled_width_calculation, tiled_height_calculation))
                        scaled_image: numpy.ndarray = numpy.asarray(resized_image)

                    try:
                        imageio.v2.imwrite(output_file, scaled_image, self.image_format)
                    except IOError as error:
                        log.error("Failed to write s%", output_file)
                        raise error

    def create_image(self, file: ImageInfo, output_directory: str, uri: str, version: str) -> str:
        """
        Method converts an ImageInfo instance to a IIIF static image.
        :param file: ImageInfo class instance to convert.
        :param output_directory: String containing the output directory for the IIIF images. Note a subdirectory will
                                 be created for each image
        :param uri: String containing the identifier to use in the @id of the info.json.  Note this method will add the
                    identifier for the IIIF image to the end of this URL. So if the image file is a file called
                    picture.jpg the URI could be http://localhost:8887/iiif and the identifier in the info.json would
                    be http://localhost:8887/iiif/picture.
        :param version: String containing either InfoJson.VERSION211 or InfoJson.VERSION3 to select the API version.
        :raise: IOException if there is an issue loading the source image or writing the IIIF image.
        :return: String containing the directory that contains the IIIF image tiles
        """
        if isinstance(file, str):
            image = IIIFImage(file)
            image_info = ImageInfo(image=image)

            return self.create_image(image_info, output_directory, uri, version)

        tiler = Tiler(file, version)
        tiler.generate_tiles(output_directory)
        info = InfoJson(file, uri, version)
        info_json = info.to_json()

        info_json_path: str = os.path.join(tiler.get_output_path(output_directory), "info.json")

        with open(info_json_path, "w") as json_file:
            json_file.write(
                json.dumps(info_json, indent=4)
            )

        return tiler.get_output_path(output_directory)

    def create_images(self, files: List, output_directory: str, identifier: str, zoom_level: int, max_file_no: int, tile_size: int, version: str) -> List:
        """
        Method that converts a list of files into a list of IIIF static images.
        :param files: List containing the paths to the files to convert.
        :param output_directory: String containing the output directory for the IIIF images. Note a subdirectory will be
                            created for each image.
        :param identifier: String containing...
        :param zoom_level: Integer containing the maximum amount of zoom levels to include in the IIIF image. A good
                           value is 5 which works with Leaflet.
        :param max_file_no: Integer that controls if you want the number of tiles and info.json to fit into a maximum
                            supply this variable. The number of zoom levels and tile sizes will be adjusted to try and
                            fit the number of files under this limit. Set it to -1 to prioritise the zoom level.
        :param tile_size: Integer containing the width and height of the tile. Note tiles can only be square in this
                          implementation. Use -1 for default of 1024.
        :param version: String containing either InfoJson.VERSION211 or InfoJson.VERSION3 to select the API version.
        :raise: IOException if there is an issue loading the source image or writing the IIIF image.
        :return: List of image output paths.
        """
        image_output_paths: List = []

        for file in files:
            image = IIIFImage(file)
            image_info = ImageInfo(image=image)
            image_info.set_zoom_level(zoom_level)

            if max_file_no != -1:
                image_info.fit_to_max_file_no(max_file_no)
            else:
                image_info.fit_to_zoom_level()

            if tile_size != -1:
                image_info.set_tile_width(tile_size)
                image_info.set_tile_height(tile_size)

            image_output_paths.append(self.create_image(image_info, output_directory, identifier, version))
        return image_output_paths
