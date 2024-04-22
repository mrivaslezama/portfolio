import reflex as rx

def footer() -> rx.Component:
    return rx.hstack(
        rx.text(
    "Trabajamos con los colores en tendencia y materiales de mayor calidad disponibles en el mercado ",
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
        rx.text(
        "Venta de muebles de melamina a pedido, despacho a domicilio en La Serena y Coquimbo.",
        size="7",
    ),
    direction="column",
    spacing="3",
    ),
    ),
    )


