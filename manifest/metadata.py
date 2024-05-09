#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

from typing import Dict, List


class Metadata:
    """
    This class builds the Metadata part of the IIIF manifest.

    Attributes:
        language: String containing the two letter language code the manuscript is in.
        metadata: Dictionary containing the Metadata items, these are from the manifest config.yml file.
    """
    def __init__(self, metadata: Dict, language: str = "en"):
        """
        Method that gets initialized with every instance of the class.
        :param metadata: String containing the two letter language code the manuscript is in.
        :param language: Dictionary containing the Metadata items, these are from the manifest config.yml file.
        """
        self.language: str = language
        self.metadata = metadata

    def items(self) -> List:
        """
        Method for generating the items that form part of the Metadata block of the IIIF manifest.
        :return: List of dictionaries containing the Metadata items the object has.
        """
        metadata_items: List = []

        for label, value in self.metadata.items():
            metadata_items.append(
                {
                    "label": {
                        self.language: [
                            label
                        ]
                    },
                    "value": {
                        self.language: [
                            value
                        ]
                    }
                }
            )

        return metadata_items
