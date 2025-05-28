#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

import json
import os
import yaml
import logging.config

from typing import Dict, List

from manifest.metadata import Metadata
from manifest.partof import PartOf
from manifest.items import Items

log_config: Dict = yaml.full_load(open('logging.yml', 'r'))
logging.config.dictConfig(log_config)
log = logging.getLogger('__name__')


class ManifestError(Exception):
    pass


class Manifest:
    """
    This class builds the main body of the IIIF manifest.

    Attributes:
        imagedata: Dictionary containing the items from images part of the manifest config.yml file.
        context: List containing the IIIF context of the object.
        id: String URI/ID of the object.
        type: String containing the type of the object e.g. manifest
        label: Dictionary containing the shelfmark and or identifiers of the object.
        summary: Dictionary containing the summary text about the object.
        metadata: List containing the metadata associated with the object.
        homepage: List containing the homepage of the object in a digital collection.
        provider: List containing the providers of the physical object.
        logo: List containing the logos associated with the object e.g. University or Funder etc.
        thumbnail: List containing the preferred thumbnail image of the object.
        requirements: List containing the terms and copyright attributed to the object.
        part_of: List containing the collections the object is a part of.
        behavior: List containing the behaviour of the object e.g. 'paged'.
        items: List containing the canvases of the object.
        structures: List containing the structures items of the object.
        viewing_direction: String containing the viewing direction of the object.
    """
    def __init__(self, host: str, data_file: str):
        """
        Method that gets initialized with every instance of the class.
        :param host: String containing the host part of the IIIF URIs e.g. http://localhost:8000.
        :param data_file: String containing the path to the manifest config.yml.
        """
        try:
            parameters: Dict = yaml.full_load(open(data_file))
        except yaml.YAMLError:
            raise yaml.YAMLError

        self.imagedata: Dict = parameters.get("items")

        language: str = parameters.get("language") or "en"
        full_shelfmark: str = parameters.get("full_shelfmark")
        summary: str = parameters.get("summary")
        metadata: Dict = parameters.get("metadata")
        object_id: str = parameters.get("object_id")
        object_label: str = parameters.get("object_label")
        provider_id: str = parameters.get("provider_id")
        provider_name: str = parameters.get("provider_name")
        logo_image_id: str = parameters.get("logo_image_id")
        thumbnail_image_id: str = parameters.get("thumbnail_image_id")
        html_terms: str = parameters.get("html_terms")
        part_of: Dict = parameters.get("part_of")
        items: List = Items(host, self.imagedata).items
        object_range: str = parameters.get("range")
        canvas_id: str = self.imagedata.get("canvas_id")
        self.context: List = [
            "http://iiif.io/api/presentation/3/context.json",
            f"{ host }/contexts/lightingmap/context/json"
        ]
        self.id: str = f"{ host }/iiif/manifest/{ object_id }.json"
        self.type: str = "Manifest"
        self.label: Dict = {
            f"{ language }": [
                f"{ full_shelfmark }"
            ]
        }
        self.summary: Dict = {
            f"{ language }": [
                f"{ summary }"
            ]
        }
        self.metadata: List = Metadata(metadata).items()
        self.homepage: List = [
            {
                "id": f"{ host }/objects/{ object_id }",
                "type": "Text",
                "label": {
                    f"{ language }": [
                        f"{ object_label }"
                    ]
                },
                "format": "text/html",
                "language": [
                    f"{ language }"
                ]
            }
        ]
        self.logo: List = [
            {
                "id": f"{ host }/iiif/image/{ logo_image_id }/full/256,/0/default.jpg",
                "type": "Image",
                "service": [
                    {
                        "@id": f"{ host }/iiif/image/{ logo_image_id }",
                        "@type": "ImageService2",
                        "profile": "http://iiif.io/api/image/2/level1.json"
                    },
                    {
                        "id": f"{ host }/iiif/image/{ logo_image_id }",
                        "type": "ImageService3",
                        "profile": "level1"
                    }
                ]
            }
        ]
        self.provider: List = [
            {
                "id": f"{ provider_id }",
                "type": "Agent",
                "label": {
                    f"{ language }": [
                        f"{ provider_name }"
                    ]
                },
                "logo": self.logo,
                "format": "text/html"
            }
        ]
        self.thumbnail: List = [
            {
                "id": f"{ host }/iiif/image/{ thumbnail_image_id }/full/256,/0/default.jpg",
                "type": "Image",
                "service": [
                    {
                        "@id": f"{ host }/iiif/image/{ thumbnail_image_id }",
                        "@type": "ImageService2",
                        "profile": "http://iiif.io/api/image/2/level1.json"
                    },
                    {
                        "id": f"{ host }/iiif/image/{ thumbnail_image_id }",
                        "type": "ImageService3",
                        "profile": "level1"
                    }
                ]
            }
        ]
        self.required_statement: Dict = {
            "label": {
                f"{ language }": [
                    "Terms of Use"
                ]
            },
            "value": {
                f"{ language }": [
                    f"{ html_terms }"
                ]
            }
        }
        self.part_of: List = PartOf(host, part_of).items()
        self.behavior: List = ["paged"]
        self.items: List = items
        self.structures: List = [
            {
                "id": f"{ host }/iiif/range/{ object_id }/{ object_range }",
                "type": "Range",
                "label": {
                    language: [
                        full_shelfmark
                    ]
                },
                "items": [
                    {
                        "id": f"{ host }/iiif/canvas/{ canvas_id }.json",
                        "type": "Canvas"
                    }
                ],
                "start": {
                    "id": f"{ host }/iiif/canvas/{ canvas_id }.json",
                    "type": "Canvas"
                }
            }
        ]
        self.viewing_direction: str = "left-to-right"

    def to_json(self, filename: str):
        """
        Method that writes the dictionary representation of the manifest into json file format.
        :param filename: String containing the output file name e.g. the name of the manifest.json file.
        :raises IOError: When a json file is unable to be written to disk.
        """
        manifest: Dict = {
            "@context": self.context,
            "id": self.id,
            "label": self.label,
            "type": self.type,
            "summary": self.summary,
            "metadata": self.metadata,
            "homepage": self.homepage,
            "provider": self.provider,
            "thumbnail": self.thumbnail,
            "requiredStatement": self.required_statement,
            "partOf": self.part_of,
            "behavior": self.behavior,
            "items": self.items,
            "structures": self.structures,
            "viewingDirection": self.viewing_direction
        }

        output_path: str = os.path.join("iiif/manifest", filename)

        try:
            with open(output_path, "w") as json_file:
                json_file.write(
                    json.dumps(manifest, indent=4)
                )
        except IOError as error:
            raise ManifestError(error)

