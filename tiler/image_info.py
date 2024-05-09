#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

import io
import logging.config
import math
import yaml

from typing import Dict, List
from tiler.iiif_image import IIIFImage

log_config: Dict = yaml.full_load(open('./logging.yml', 'r'))
logging.config.dictConfig(log_config)
log = logging.getLogger('iiif-tiler-py')


class ImageInfo:
    """
    Class to calculate the attributes for use in the generation of image info.json files.

    Attributes:
        tile_width: int specifying the tile_width for the info.json file, default is 1024
        tile_height: int specifying the tile_height for the info.json file, default is 1024
        zoom_levels: int specifying the highest zoom level, default is 5
        image: IIIFImage containing an instance of the IIIFImage class, default is None
        scale_factors: list containing the tile scale factors for the info.json file, default is None
        sizes: list containing the sizes for the info.json file, default is None
    """
    def __init__(self, tile_width: int = 1024, tile_height: int = 1024, zoom_levels: int = 5,
                 image: IIIFImage = None, scale_factors: List = None, sizes: List = None):
        """
        Method that gets initialized with every instance of the class.
        :param tile_width: Integer containing the tile width.
        :param tile_height: Integer containing the tile height.
        :param zoom_levels: Integer containing the max zoom level to generate tiles for.
        :param image: IIIFImage class instance of the image.
        :param scale_factors: List containing the info.json scale factors to use.
        :param sizes: List containing the info.json sizes to use.
        """

        if scale_factors is None:
            scale_factors = []
        if sizes is None:
            sizes = []

        self.tile_width: int = tile_width
        self.tile_height: int = tile_height
        self.zoom_levels: int = zoom_levels
        self.image: IIIFImage = image
        self.scale_factors: List = scale_factors
        self.sizes: List = sizes
        self.initialize_image_info()

    def __str__(self):
        """
        Method that writes the class attributes to a string used to generate the info.json file
        :return: string containing the content for the info.json file
        """
        buffer = io.StringIO()
        buffer.write("\tTile size; width: ")
        buffer.write("" + str(self.tile_width))
        buffer.write(", height: ")
        buffer.write(str(self.tile_height))
        buffer.write("\n\tZoomlevels: ")
        buffer.write("" + str(self.zoom_levels))
        buffer.write("\n\t * Sizes:")
        buffer.write(str(self.sizes))
        buffer.write("\n\t * ScaleFactors:")
        buffer.write(str(self.scale_factors))

        return str(buffer)

    def fit_to_zoom_level(self):
        """
        Method used in the generation of tiled images in tiler.py if max_file_no == -1
        """
        self.initialize_image_info()

    def fit_to_max_file_no(self, max_file_no: int):
        """
        Method used in the generation of tile images in tiler.py if max_file_no != -1
        :param max_file_no: int
        :return:
        """
        max_zoom: int = 4
        max_tile_size_factor: int = 5
        zoom: int = 0
        tile_size: int = 0
        found: bool = False
        file_count: int = 0

        for i in range(max_tile_size_factor + 1):
            for zoom in range(max_zoom + 1):
                tile_size = i * 256
                file_count = self.calculate_file_count(zoom, tile_size, tile_size)
                if file_count < max_file_no:
                    log.debug(
                        "Using TileSize: %s Zoom: %s + zoom came back with %s file_count files. Target: s%",
                        tile_size,
                        zoom,
                        file_count,
                        max_file_no
                    )
                    found = True
                    break
                else:
                    log.debug(
                        "Rejected TileSize: s% Zoom: s% came back with s% files. Target: s%",
                        tile_size,
                        zoom,
                        file_count,
                        max_file_no
                    )
            else:
                continue
            break

        if found:
            self.set_tile_width(tile_size)
            self.set_tile_height(tile_size)
            self.set_zoom_level(zoom)

            self.initialize_image_info()

            log.debug(
                "Found Goldilocks combinations s% with a file count of s%",
                self.__str__(),
                file_count
            )
        else:
            raise ValueError("Failed to find combination under s% files", max_file_no)

    def calculate_file_count(self, zoom_levels: int = None, tile_width: int = None, tile_height: int = None) -> int:
        if not zoom_levels and not tile_width and not tile_height:
            zoom_levels: int = self.zoom_levels
            tile_width: int = self.tile_width
            tile_height: int = self.tile_height

        file_count: int = 0
        reached_multiple_fullsized_tile: bool = False
        for zoom in range(zoom_levels + 1):
            zoom_factor: int = int(math.pow(2, zoom))
            width: int = self.image.get_width() / zoom_factor
            height: int = self.image.get_height() / zoom_factor
            # Reached the smallest tile
            tile_x_count: int = int(math.ceil(float(width / tile_width)))
            tile_y_count: int = int(math.ceil(float(height / tile_height)))
            # Each tile creates 4 files. 3 directories and 1 image
            if width < tile_width and height < tile_height:
                file_count += tile_x_count * tile_y_count * 3
                reached_multiple_fullsized_tile = True
            else:
                file_count += tile_x_count * tile_y_count * 4

        # If the tile is bigger than the image size we add 3 directories but
        # for one we need to add 4.
        if reached_multiple_fullsized_tile:
            file_count += 1

        # Add full sizes (1 full directory then three subdirectories (size/rotation/file)
        # And full w,h
        file_count += ((zoom_levels + 2) * 3) + 4

        # Add info.json
        file_count += 1
        # Add containing directory
        file_count += 1
        return file_count

    def initialize_image_info(self):
        self.scale_factors: List = []
        self.sizes: List = []
        for i in range(self.zoom_levels + 1):
            scale: int = int(math.pow(2, i))
            self.sizes.append(
                {
                    "x": int(math.ceil(float(self.image.get_width() / scale))),
                    "y": int(math.ceil(float(self.image.get_height() / scale)))
                }
            )
            self.scale_factors.append(scale)
        self.scale_factors.reverse()

    def get_id(self):
        return self.image.get_id()

    def set_id(self, image_id):
        self.image.set_id(image_id)

    def get_scale_factors(self):
        return self.scale_factors

    def get_sizes(self):
        return self.sizes

    def get_width(self):
        return self.image.get_width()

    def get_height(self):
        return self.image.get_height()

    def get_tile_width(self):
        return self.tile_width

    def set_tile_width(self, tile_width):
        self.tile_width = tile_width

    def get_tile_height(self):
        return self.tile_height

    def set_tile_height(self, tile_height):
        self.tile_height = tile_height

    def get_zoom_level(self):
        return self.zoom_levels

    def set_zoom_level(self, zoom_level):
        self.zoom_levels = zoom_level

    def get_image(self):
        return self.image.get_image()

    def get_image_format(self):
        return self.image.get_image_format()

    def set_image(self, image):
        self.image = image
        self.initialize_image_info()


