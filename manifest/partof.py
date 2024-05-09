#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

from typing import Dict, List


class PartOf:
    """
    This class builds the PartOf part of the IIIF manifest.

    Attributes:
        part_of: List containing the collections the object is a part of, this is from the manifest config.yml file.
        host: String containing the host part of the IIIF URIs e.g. http://localhost:8000.
        language: String containing the two letter language code the manuscript is in.
    """
    def __init__(self, host: str, part_of: Dict, language: str = "en"):
        """
        Method that gets initialized with every instance of the class.
        :param host: String containing the host part of the IIIF URIs e.g. http://localhost:8000.
        :param part_of: Dictionary containing the key, value pairs of the collections the object is a part of.
        :param language: String containing the two-letter ISO code for the language the manifest is in e.g. en.
        """
        self.part_of: Dict = part_of
        self.host: str = host
        self.language: str = language

    def items(self) -> List:
        """
        Method for generating the list of collections the object is a part of.
        :return: List of dictionaries containing the collections the object is a part of.
        """
        part_of_items: List = []

        for collection_id, collection_name in self.part_of.items():
            part_of_items.append(
                {
                    "id": f"{ self.host }/iiif/collection/{ collection_id }",
                    "type": "Collection",
                    "label": {
                        self.language: [
                            collection_name
                        ]
                    }
                }
            )

        return part_of_items
