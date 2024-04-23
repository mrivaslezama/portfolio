import reflex as rx

def avatar() -> rx.Component:
    return rx.center(
        rx.avatar(src="autana/logo.jpg", fallback="Autana", size="9"),
                   
       
        direction="column",
        spacing="1",
    )