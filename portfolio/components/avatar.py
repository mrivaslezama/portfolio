import reflex as rx

def avatar() -> rx.Component:
    return rx.center(
        rx.avatar(src="autana/logo.jpg", fallback="Autana", size="9"),
        rx.text("Reflex User", weight="bold", size="4"),
        rx.text("@reflexuser", color_scheme="gray"),
        rx.button(
            "Edit Profile",
            color_scheme="indigo",
            variant="solid",
        ),
        direction="column",
        spacing="1",
    )