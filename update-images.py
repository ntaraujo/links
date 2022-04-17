from PIL import Image
import os

here = os.path.dirname(__file__)
public = os.path.join(here, r"public")
avatar = os.path.join(here, r"src\assets\avatar.jpg")
pdir = os.listdir(public)
aimg = Image.open(avatar)

for item in pdir:
    if item.endswith(".png"):
        path = os.path.join(public, item)
        oldi = Image.open(path)
        newi = aimg.resize(oldi.size, Image.ANTIALIAS)
        newi.save(path, 'PNG', quality=100)
