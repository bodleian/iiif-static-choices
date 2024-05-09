#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

import os
import imageio
import numpy

from typing import Optional


class IIIFImage:
    """
    This class stores the source image as a BufferedImage and also works out the IIIF image identifier from the
    filename.

    Attributes:
        image: numpy.array containing the image pixel data.
        id: String containing the image URI/ID.
        image_format: String containing.
    """
    def __init__(self, image_file: str):
        """
        Method that gets initialized with every instance of the class.
        :param image_file: String containing the path to the image file to open as an array.
        """
        self.image: Optional[numpy.ndarray] = None
        self.id: str = ""
        self.load_image(image_file)
        self.image_format: str = self.get_image_format()

    def load_image(self, image_file: str):
        """
        Method to read the image target into a numpy array.
        :param image_file: String containing the path to the image file you want to open as an array.
        """
        try:
            self.image: numpy.ndarray = imageio.v2.imread(image_file)
        except IOError as error:
            raise error
        self.set_id(os.path.splitext(image_file)[0])
        self.set_image_format(os.path.splitext(image_file)[1])

    def get_image_format(self) -> str:
        """
        Method to get the image format attribute.
        :return: String containing the image format attribute.
        """
        return self.image_format

    def set_image_format(self, image_format):
        """
        Method to set the image format attribute.
        :param image_format: String containing the image_format you'd like to set the attribute to.
        """
        self.image_format = image_format

    def get_id(self) -> str:
        """
        Method to get the image id attribute.
        :return: String containing the image id attribute.
        """
        return self.id

    def set_id(self, image_id):
        """
        Method to set the image id attribute.
        :param image_id: String containing the image id you'd like to set the attribute to.
        """
        self.id = image_id

    def get_width(self) -> int:
        """
        Method to get the image width.
        :return: Integer containing the image width.
        """
        return self.image.shape[1]

    def get_height(self) -> int:
        """
        Method to get the image height.
        :return: Integer containing the image height.
        """
        return self.image.shape[0]

    def get_image(self) -> numpy.ndarray:
        """
        Method to get the image bytes array.
        :return: numpy.ndarray containing the byte form of the image.
        """
        return self.image
