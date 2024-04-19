import reflex as rx
from reflex_image_zoom import image_zoom

def header() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Bienvenidos, somos!", size="9"),
            rx.heading("Autana Muebles...", size="6"),
            image_zoom(
                rx.image(src="/autana/armario.jpg", width="400px"),
            ),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(header)