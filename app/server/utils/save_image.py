import base64
import logging
import os

from starlette.datastructures import UploadFile
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


async def save_upload_file(upload_file: UploadFile, destination: str):
    dirname = os.path.dirname(__file__)
    directory = os.path.join(dirname, f"../../../files/")
    absolute_path = os.path.abspath(directory)
    logger.info(absolute_path)
    if not os.path.exists(absolute_path):
        os.makedirs(absolute_path)

    try:
        with open(destination, "wb") as f:
            f.write(upload_file.file.read())
            return True
    except Exception as e:
        raise e

def read_image(image_path: str) -> str:
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')