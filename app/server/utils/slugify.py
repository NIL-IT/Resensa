import re
from transliterate import translit
from unidecode import unidecode


def slugify(text: str) -> str:
    # Transliterate from Russian to Latin
    latin_text = translit(text, 'ru', reversed=True)

    # Further clean up using unidecode (removes special characters)
    normalized_text = unidecode(latin_text)

    # Convert to lowercase and replace spaces with hyphens
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', normalized_text.lower()).strip('-')

    return slug

def reverse_slug(slug: str) -> str:
    """Reverse the slug to find the corresponding name in the database."""
    custom_replacements = {
        "series": "СЕРИЯ",
        "equipment": "ОБОРУДОВАНИЕ",
    }

    # Replace English words back to Russian
    for en_word, ru_word in custom_replacements.items():
        slug = slug.replace(en_word, ru_word)

    # Replace hyphens with spaces and capitalize
    name = slug.replace("-", " ").upper()

    return name


 #СЕРИЯ RCOMP
