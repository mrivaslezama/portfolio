import reflex as rx

def cards() -> rx.Component:
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
    ),
)
)
