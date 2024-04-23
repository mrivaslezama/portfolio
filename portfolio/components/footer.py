import reflex as rx

def footer() -> rx.Component:
    return rx.hstack(
        rx.divider(
        rx.text(
    "Reconocidos por diseñar y fabricar muebles con excelencia y altos estandares de calidad. ",
    rx.divider(),
    rx.hover_card.root(
        rx.hover_card.trigger(
            rx.link(
                "Puedes seguir nuestros procesos de construcción en Instagram!",
                color_scheme="blue",
                underline="always",
                href="https://www.instagram.com/autanamuebles/?hl=es."
            ),
        ),
        rx.hover_card.content(
            rx.text("Instagram"),
        ),
        rx.text(
        "Atención y despacho en La Serena y Coquimbo.",
        size="5",
    ),
  
    rx.divider(
    rx.text(
        "CONSULTAS & ORDENES, autanamuebles@gmail.com / +56 9 4844 6060",
        size="5",
    ),
    ),
    direction="column",
    spacing="3",
    ),
    ),
    )
    )


"""
ATENCIÓN
La Serena y Coquimbo, Region de Coquimbo


CONSULTAS & ORDENES
autanamuebles@gmail.com / +65 8111 8900

Copyright@2024 Autana Muebles® All Rights Reserved.

ATENCIÓN AL CLIENTE
Materiales & Mantenimiento
Ventas & Contraciones
Terminos & Condiciones
Servicios de diseño & cotizaciones
"""