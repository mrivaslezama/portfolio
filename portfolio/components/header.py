import reflex as rx
from reflex_image_zoom import image_zoom

def header() -> rx.Component:
    return rx.box(
        rx.center(
        rx.vstack(
            rx.divider(
            rx.image(src="autana/proyectos.jpg", width="100%", height="auto"),
            ),
            rx.hstack(
                "Bienvenidos",
                class_name="text-4xl text-center text-blue-500",
                ),
            rx.heading("Somos fabricantes de muebles en melamina, todo lo relacionado a: clósets, cocinas, zapateras, escritorios, estantes, muebles personalizados, a medida, con cierre fácil, estanterias, esquineros, entre otros.", size="6"),
            

            align="center",
            spacing="7",
            font_family="IBM Plex Mono",
            font_size="2em",
            
        ),
        height="100vh",
    )
)

app = rx.App()
app.add_page(header)