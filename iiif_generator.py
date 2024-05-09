#!/usr/bin/python3
"""
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

Copyright © 2024 Bodleian Libraries
"""

import argparse
import logging.config

import os
import sys
import yaml

from typing import Dict, List
from tiler.info_json import VERSION211
from manifest.manifest import Manifest, ManifestError
from tiler.tiler import Tiler

log_config: Dict = yaml.full_load(open('logging.yml', 'r'))
logging.config.dictConfig(log_config)
log = logging.getLogger('iiif-generator')


def main(arguments) -> bool:
    """
    Function performs one of two possible options, generating static IIIF tiled images or a manifest.
    :param arguments: argparse.Namespace containing the arguments passed into the iiif_generator program.
    :return: True if successful | False if there is an error.
    """

    if arguments.command == "tiles":
        max_file_no: int = -1

        # find files
        input_files: List = []
        for image in os.listdir(arguments.input_directory):
            if image.endswith((".png", ".jpg", "webp")):
                input_files.append(os.path.join(arguments.input_directory, image))

        if not input_files:
            log.error("No image files to process in input directory: s%", arguments.input_directory)
            return False

        tiler = Tiler()

        tiling_success: List = tiler.create_images(
            input_files,
            arguments.output,
            arguments.identifier,
            arguments.zoom_levels,
            max_file_no,
            arguments.tile_size,
            arguments.version
        )

        if tiling_success:
            return True

    if arguments.command == "manifest":

        config_path: str = str(os.path.join(arguments.input_directory, arguments.file_name))

        if not os.path.exists(config_path):
            log.error("Config file: s% does not exist", config_path)
            return False

        manifest_success = Manifest(arguments.host_name, config_path)

        if not manifest_success:
            log.error("Manifest generation failed")  # try and improve this, we need to probably raise errors elsewhere
            return False

        try:
            manifest_success.to_json(arguments.output)
            return True
        except ManifestError as error:
            log.error(
                "Manifest generation failed at the json file output stage due to the following error: %s",
                error
            )
            return False


if __name__ == "__main__":
    parent_parser = argparse.ArgumentParser(
        description="Python terminal application to create static tiles and manifest for a IIIF viewer, the code was "
                    "translated from the Java version written by Glen Robson of IIIF fame to avoid having to require "
                    "a JRE and also make it easier to modify for Python developers.",
        add_help=False
    )

    parser = argparse.ArgumentParser()

    sub_parsers = parser.add_subparsers(
        dest="command",
        required=True
    )

    manifest = sub_parsers.add_parser(
        "manifest",
        parents=[parent_parser],
        help="Generate a IIIF static manifiest from a directory of images and a yml file."
    )

    tile = sub_parsers.add_parser(
        "tiles",
        parents=[parent_parser],
        help="Generate IIIF static tiles from a directory of images"
    )

    # add an argument
    tile.add_argument(
        "-i",
        "--identifier",
        type=str,
        default="http://0.0.0.0:8000/iiif/",
        help="Set the identifier in the info.json. The default is http://0.0.0.0:8000/iiif"
    )

    tile.add_argument(
        "-z",
        "--zoom_levels",
        type=int,
        default=5,
        help="Set the number of zoom levels for this image. Default is 5"
    )

    tile.add_argument(
        "-v",
        "--version",
        type=str,
        default=VERSION211,
        help="Set the IIIF version. Default is 2.1.1 and the options are 2.1.1 or 3"
    )

    tile.add_argument(
        "-t",
        "--tile_size",
        type=int,
        default=1024,
        help="Set the tile size. Default is 1024"
    )

    tile.add_argument(
        "-o",
        "--output",
        type=str,
        default="iiif",
        help="Directory where the IIIF images are generated. Default is: /iiif"
    )

    tile.add_argument(
        "-d",
        "--input_directory",
        type=str,
        default="image",
        help="Directory where the images to tile are situated. Default is: /image"
    )

    manifest.add_argument(
        "-o",
        "--output",
        type=str,
        default="manifest.json",
        help="Directory where the IIIF manifest is generated. Default is: /iiif/manifest/manifest.json"
    )

    manifest.add_argument(
        "-d",
        "--input_directory",
        type=str,
        default="image",
        help="Directory where the images to tile are situated. Default is: /image"
    )

    manifest.add_argument(
        "-f",
        "--file_name",
        type=str,
        required=True,
        help="Filename where the manifest config.yml is stored. A value is required"
    )

    manifest.add_argument(
        "-s",
        "--host_name",
        type=str,
        default="http://0.0.0.0:8000",
        help="Host name for the URL/URIs in the manifest"
    )

    args = parser.parse_args()
    success: bool = False

    try:
        success = main(args)
        if success:
            log.info(f"IIIF {args.command} generated!")
        else:
            log.error(f"IIIF {args.command} failed!")
    except BaseException:
        log.error("Unhandled exception in iiif_generator", exc_info=True)
        raise

    if success:
        sys.exit()
    else:
        sys.exit(1)
