#adding style css for the components...

#main css
css: dict = {
    "app": {
        "_dark": {"bg": "#1f2128"},
        "_light": {"bg": "#312e2a"},
        "font_family": "Gill Sans",        
    },
"header":{
    "widht": "100%",
    "height": "7vh",
    "box_shadow": "0px 8px 16px 0px rgba(0, 0, 0 ,0.35)",
    "justify_content": "center",
    "padding": ["0 1rem", "0 1rem", "0 1rem", "0 4rem", "0 10rem"],
    "transition": "all 400ms ease",
    "_dark": {
        "bg": "#141518",
    },
    "_light":{
        "bg": "#292824",
    },

},
"content": {
    "width": "100%",
    "display": "flex",
    "align_item": "center",
}

}