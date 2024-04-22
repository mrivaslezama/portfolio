import reflex as rx
from reflex_image_zoom import image_zoom


def cards() -> rx.Component:
    return rx.hstack(
       rx.center(
           
           rx.card(
               image_zoom(
                rx.image(src="/autana/cuarto1.jpg", width="100%"),
            ), size="5"),
            rx.text("No hay proyecto grande"),
           rx.card(
               image_zoom(
                rx.image(src="/autana/armario.jpg", width="100%"),
            ), size="5"),
            rx.text("Diseñamos modelos 3d, que te permitan visualizar el aprovechamiento del espacio."),

           rx.card(
                image_zoom(
                rx.image(src="/autana/cocinareal.jpg", width="100%"),
             ),  size="5"),
           rx.card("Diseñamos conforme a preferencias de nuestros clientes.", size="5"),
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
                rx.heading("Contactanos"),
                rx.text(
                    "Visita nuestro perfil de instagram."
                ),
            ),
            spacing="2",
        ),
    ),
    as_child=True,
)
)
