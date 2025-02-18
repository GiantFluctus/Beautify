# Formateador de Código HTML, CSS y JS

Este proyecto es una herramienta web que permite formatear código HTML, CSS y JavaScript. Proporciona una interfaz de usuario sencilla con pestañas para cada tipo de código y una barra de herramientas para realizar acciones comunes como formatear, seleccionar todo, copiar, guardar y limpiar el área de trabajo.

## Características

- **Formatear Código:** Formatea el código HTML, CSS y JavaScript para mejorar la legibilidad.
- **Seleccionar Todo:** Selecciona todo el código en la pestaña activa.
- **Copiar Código:** Copia el código formateado al portapapeles.
- **Guardar Código:** Guarda el código formateado como un archivo de texto.
- **Limpiar Área de Trabajo:** Limpia el área de texto para ingresar nuevo código.
- **Resaltado de Sintaxis:** Resalta la sintaxis del código usando Prism.js.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- [js-beautify](https://cdnjs.com/libraries/js-beautify) (librería para formatear código)
- [Prism.js](https://prismjs.com/) (librería para resaltar sintaxis)
- [Font Awesome](https://cdnjs.cloudflare.com/libraries/font-awesome) (iconos)

## Cómo Empezar

### Prerrequisitos

Asegúrate de tener instalado Git en tu máquina. Puedes descargarlo desde [aquí](https://git-scm.com/).

### Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/GiantFluctus/Beautify.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd Beautify
   ```

3. Abre el archivo `index.html` en tu navegador web:

   ```bash
   open index.html
   ```

## Estructura del Proyecto

```
.
├── css
│   └── style.css
├── js
│   └── formatear_codigo.js
├── index.html
└── README.md
```

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Navega a la pestaña correspondiente (HTML, CSS o JS).
3. Pega tu código en el área de texto.
4. Utiliza los botones de la barra de herramientas para formatear, seleccionar, copiar, guardar o limpiar el código.

## Contribución

Las contribuciones son bienvenidas. Si tienes alguna idea para mejorar el proyecto o encuentras algún error, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
