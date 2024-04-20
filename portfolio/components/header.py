import reflex as rx
from reflex_image_zoom import image_zoom

def header() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Bienvenidos", size="9"),
            rx.heading("Somos una fabrica de muebles en melamina, clósets, cocinas, zapateras, escritorios, estantes, muebles personalizados, a medida, con cierre fácil, estanterias, esquineros, entre otros.", size="6"),
            image_zoom(
                rx.image(src="/autana/armario.jpg", width="600px"),
            ),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(header)