import reflex as rx
from .components.navbar import navbar


def index ():
	return rx.container(
		navbar(),
	)

def about():
	return rx.text('About page........')
app = rx.App()
app.add_page(index)
app.add_page(about, route='/aboutpage')
app.compile()