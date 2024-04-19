

import reflex as rx

def footer() -> rx.Component:
    return rx.hstack(
        rx.text(
    "Fabricacion de todo tipo de muebles en melamina para el hogar, clósets, cocinas, zapateras, escritorios, estantes, muebles personalizados, entre otros. ",
    rx.hover_card.root(
        rx.hover_card.trigger(
            rx.link(
                "Contactanos!",
                color_scheme="blue",
                underline="always",
                href="https://www.instagram.com/autanamuebles/?hl=es."
            ),
        ),
        rx.hover_card.content(
            rx.text("Instagram"),
        ),
        rx.text(
        "The quick brown fox jumps over the lazy dog.",
        size="9",
    ),
    direction="column",
    spacing="3",
    ),
    ),
    )


