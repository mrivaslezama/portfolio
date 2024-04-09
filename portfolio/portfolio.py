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
            rx.text(""" Contact information, 
                    relevant social media accounts;
                    Short bio and your photo;
                    Relevant experience and skills with context;
                    Personal projects;
                    Documented source code;
                    Education;
                    Awards/recognition;
                    Downloadable web developer resume
"""), 

rx.card(
    rx.link(
        rx.flex(
            rx.avatar(src="/reflex_banner.png"),
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
),


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
