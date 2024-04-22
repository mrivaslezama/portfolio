import reflex as rx
from .components.navbar import navbar
from .components.header import header
from .components.cards import cards
from .components.avatar import avatar
from .components.footer import footer

def index ():
	return rx.container(
		navbar(),
		header(),
		avatar(),
		cards(),
		footer()
	
		
	)

def about():
	return rx.text('About page........')

app = rx.App()
app.add_page(index)
app.add_page(about, route='/aboutpage')
app.compile()