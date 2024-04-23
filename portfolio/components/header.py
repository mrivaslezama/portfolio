import reflex as rx
from reflex_image_zoom import image_zoom

def header() -> rx.Component:
    return rx.center(
            rx.vstack(   
            rx.image(src="autana/cocina.png", width="100%", height="auto"),
                      
            rx.heading("Fabricantes de muebles en melamina.", size="6"),
            

            align="center",
            spacing="7",
            font_family="IBM Plex Mono",
            font_size="2em",
            
        ),
        height="100vh",
    
)

app = rx.App()
app.add_page(header)