#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

import imageio
import os

from typing import Dict, List, Tuple


class Items:
    """
    This class builds the canvas items of the IIIF manifest.

    Attributes:
        host: String containing the host part of the IIIF URIs e.g. http://localhost:8000.
        language: String containing the two letter language code the manuscript is in.
        folio: String containing the page folio label.
        preferred_image_format: String containing the preferred format of the images e.g. jpg, webp, png etc.
        body_items: List containing the images in the choices annotation.
        items: List containing the canvas and body items.
    """
    def __init__(self, host: str, imagedata: Dict, language: str = "en"):
        """
        Method that gets initialized with every instance of the class.
        :param host: String containing the host part of the IIIF URIs e.g. http://localhost:8000.
        :param imagedata: Dictionary containing the items from images part of the manifest config.yml file.
        :param language: String containing the two letter language code the manuscript is in.
        """
        self.host: str = host
        self.language: str = language
        self.folio: str = imagedata.get("folio")
        preferred_image: str = os.path.join("./image/", imagedata.get("preferred_image"))
        self.preferred_image_format: str = os.path.splitext(imagedata.get("preferred_image"))[1]
        preferred_image_metrics: Dict = self.get_image_metrics(preferred_image)
        canvas_width = preferred_image_metrics.get("image_width")
        canvas_height = preferred_image_metrics.get("image_height")
        canvas_id: str = imagedata.get("canvas_id")

        self.body_items: List = [self.build_body_item(item_data) for item_data in imagedata.get("images")]
        self.items: List = [
            {
                "id": f"{ host }/iiif/canvas/{ canvas_id }.json",
                "type": "Canvas",
                "label": {
                    language: [
                        self.folio
                    ]
                },
                "width": canvas_width,
                "height": canvas_height,
                "items": [
                    {
                        "id": f"{ host }/iiif/annotationpage/{ canvas_id }.json",
                        "type": "AnnotationPage",
                        "items": [
                            {
                                "id": f"{ host }/iiif/annotation/{ canvas_id }.json",
                                "type": "Annotation",
                                "motivation": "painting",
                                "target": f"{ host }/iiif/canvas/{ canvas_id }.json",
                                "body": {
                                    "type": "Choice",
                                    "items": self.body_items
                                }
                            }
                        ],
                    }
                ]
            }
        ]

    @staticmethod
    def get_image_metrics(image_path: str) -> Dict:
        """
        Method gets the height and width of an image.
        :param image_path: String containing the path to the image to get metrics from.
        :return: Dictionary containing the image width and height.
        """
        image = imageio.v2.imread(image_path)
        image_shape: Tuple = image.shape
        image_data: Dict = {
            "image_width": image_shape[1],
            "image_height": image_shape[0]
        }
        return image_data

    def build_body_item(self, image_data: Dict) -> Dict:
        """
        Method builds an image item for a canvas.
        :param image_data: Dictionary containing the image data to be added to the choice annotation.
        :return: Dictionary containing an item to append to the choice annotation.
        """
        image_id: str = image_data.get("image_id")
        image_metrics: Dict = self.get_image_metrics(os.path.join("./image", image_id + self.preferred_image_format))
        image_width: int = image_metrics.get("image_width")
        image_height: int = image_metrics.get("image_height")
        map_type: str = image_data.get("map_type")

        body_item: Dict = {
            "id": f"{ self.host }/iiif/image/{ image_id }/full/max/0/default{self.preferred_image_format}",
            "type": "Image",
            "format": f"image/{self.preferred_image_format.strip('.')}",
            "label": {
                self.language: [
                    self.folio
                ]
            },
            "width": image_width,
            "height": image_height,
            "service": [
                {
                    "@id": f"{ self.host }/iiif/image/{ image_id }",
                    "@type": "ImageService2",
                    "profile": "http://iiif.io/api/image/2/level1.json"
                },
                {
                    "id": f"{ self.host }/iiif/image/{ image_id }",
                    "type": "ImageService3",
                    "profile": "level1"
                },
                {
                    "id": f"{ self.host }/iiif/image/lightingmap/{ image_id }.json",
                    "type": "LightingMapExtension",
                    "profile": "http://iiif.io/api/extension/lightingmap",
                    "mapType": map_type
                }
            ]
        }

        return body_item

    def items(self) -> List:
        """
        Method gets the items attribute for the class.
        :return: List containing the canvases of the object.
        """
        return self.items
