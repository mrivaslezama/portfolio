import reflex as rx
from reflex_image_zoom import image_zoom


def cards() -> rx.Component:
    return rx.hstack(
       rx.center(
           
           rx.card("Enfocados en las necesidades de nuestros clientes", size="5"),
           rx.card("Card 3", size="5"),
           rx.card("Card 4", size="5"),
           rx.card("Card 5", size="5"),
           spacing="2",
           align_items="flex-start",
           flex_wrap="wrap",
           justify="between"
    ),
    rx.card(
    rx.link(
        rx.flex(
            rx.avatar(src="/autana/logo.jpg"),
            rx.box(
                rx.heading("Quick Start"),
                rx.text(
                    "Get started with Reflex in 5 minutes."
                ),
            ),
            spacing="2",
        ),
    ),
    as_child=True,
)
)
