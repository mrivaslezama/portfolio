import reflex as rx
from reflex_image_zoom import image_zoom


def cards() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.divider(
                rx.text(
                    rx.link("Puedes ver más de nuestros proyectos en instagram.",href="https://www.instagram.com/autanamuebles/?hl=es."),
                    rx.image(src="autana/proyectos.jpg", width="100%", height="auto"),
            rx.box(
            rx.divider(
                    rx.video(
                        url="/autana/autana1.mp4",
                        width="800px",
                        height="auto",
                        playing=True,
                        loop=True,
                        
                    ),
                ),
            ),
        align="center",
        spacing="7",
        font_family="Lora",
        font_size="2em",
        padding_top="3em",
            )
        ),
        height="100vh",
        )
    )