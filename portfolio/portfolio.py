"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction/"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return rx.center(
        
        rx.vstack(
            rx.heading("Hola, Soy Miguel!", size="9"),
            rx.text("Este es un ensayo con REFLEX!"),
            rx.text("Actualizando información actual"), 

            rx.button(
                "Contactame!",
                on_click=lambda: rx.redirect(docs_url),
                size="4",
            ),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(index)
