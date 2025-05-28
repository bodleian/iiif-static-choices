import os

from typing import Tuple
from PIL import Image


def create_thumbnail(source_image: str, target_image: str, size: Tuple[int, int]):
    """

    :param source_image:
    :param target_image:
    :param size:
    :return:
    """
    with Image.open(source_image) as image:
        # convert to RGB from RGBA
        rgb_image = image.convert('RGB')
        # Downscale the image
        rgb_image.thumbnail(size)
        os.makedirs(os.path.dirname(target_image), exist_ok=True)
        # Save the resized image
        rgb_image.save(target_image)

        # needs to be saved in the iiif folder path... for it's size
