#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

from typing import Dict, List
from tiler.image_info import ImageInfo

VERSION211: str = "2.1.1"
VERSION3: str = "3.0"


class InfoJson:
    """
    This class generates the IIIF info.json for an image.

    Attributes:
        image_info: ImageInfo class instance containing the key, value pairs of an image.json file.
        uri: str: String containing the bas URI to use for all URIs/IDs in the image.json file.
        version: String containing the IIIF image API version we are currently using for tile generation.
    """
    def __init__(self, image_info: ImageInfo = None, uri: str = "", version: str = VERSION211):
        """
        Method that gets initialized with every instance of the class.
        :param image_info: ImageInfo class instance containing the key, value pairs of an image.json file.
        :param uri: String containing the bas URI to use for all URIs/IDs in the image.json file.
        :param version: String containing the IIIF image API version we are currently using for tile generation.
        """
        self.image_info: ImageInfo = image_info
        self.uri: str = uri
        self.version: str = version

    def get_id(self) -> str:
        """
        Method to ge the id property of the class.
        :return:  String containing the URI/ID of the image.
        """
        return self.uri + self.image_info.get_id()

    def get_width(self) -> int:
        """
        Method to get the width property of the class.
        :return: Integer containing the width of the image.
        """
        return self.image_info.get_width()

    def get_height(self) -> int:
        """
        Method to get the height property of the class.
        :return: Integer containing the height of the image.
        """
        return self.image_info.get_height()

    def get_version(self) -> str:
        """
        Method to get the version property of the class.
        :return: String containing the IIIF image API version.
        """
        return self.version

    def to_json(self) -> Dict:
        """
        Method outputs the class attributes in dictionary form which can easily be converted into a info.json file.
        :return: Dictionary containing the key, value pairs expected in a IIIF info.json file.
        """
        info_json: Dict = {}

        if self.version == VERSION3:
            info_json["@context"] = "http://iiif.io/api/image/3/context.json"
            info_json["id"] = self.get_id()
            info_json["type"] = "ImageService3"
            info_json["profile"] = "level0"
            info_json["extraFormats"] = ["png"]
            info_json["preferredFormats"] = ["png", "jpg"]
        else:
            info_json["@context"] = "http://iiif.io/api/image/2/context.json"
            info_json["@id"] = self.get_id()
            info_json["profile"] = "http://iiif.io/api/image/2/level0.json"

        info_json["protocol"] = "http://iiif.io/api/image"
        info_json["width"] = self.get_width()
        info_json["height"] = self.get_height()

        sizes_json: List = []

        for size in self.image_info.get_sizes():
            size_map: Dict = {"width": size.get("x"), "height": size.get("y")}
            sizes_json.append(size_map)

        sizes_json.reverse()

        info_json["sizes"] = sizes_json

        tiles: List = []
        tile_properties: Dict = {
            "width": self.image_info.get_tile_width(),
            "height": self.image_info.get_tile_height(),
            "scaleFactors": self.image_info.get_scale_factors()
        }

        tiles.append(tile_properties)
        info_json["tiles"] = tiles

        return info_json
