import reflex as rx

def navbar():
    return rx.hstack(
        rx.hstack(
            rx.image(src="/autana/logo.jpg", width="2em"),
            rx.heading("Autana Muebles", font_size="2em"),
        ),
        rx.spacer(),
        rx.menu.root(
            rx.menu.trigger(
                rx.button("Menu"),
            ),
            rx.menu.content(
                rx.menu.item("Nosotros"),
                rx.menu.separator(),
                rx.menu.item("Galeria"),
                rx.menu.item("Contactanos"),
                width="10rem",
            ),
        ),
        position="fixed",
        top="0px",
        background_color="lightgray",
        padding="1em",
        height="4em",
        width="100%",
        z_index="5",
    )

