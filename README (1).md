# Café Andino – Interfaz web responsiva

Proyecto de la Guía 3: Desarrollo de una interfaz web responsiva.

## Estructura

```
cafe-andino/
├── index.html      Estructura principal (HTML5 semántico)
├── css/
│   └── styles.css  Estilos CSS3 (Mobile First, Flexbox, Grid, Media Queries)
├── img/
│   └── logo.svg    Imágenes del proyecto
├── js/
│   └── main.js     Menú adaptable y validación del formulario
└── README.md
```

## Cómo ejecutarlo

Abrir `index.html` en el navegador, o usar la extensión *Live Server* de VS Code.

## Cómo probar la responsividad

1. Abrir la página en Chrome o Edge.
2. Presionar `Ctrl + Shift + M` (o clic derecho > Inspeccionar > icono de dispositivo).
3. Probar en:
   - Computador: 1280 px o más
   - Tableta: 768 px (iPad)
   - Teléfono: 375 px (iPhone) y 360 px (Android)
4. Verificar que no aparezca barra de desplazamiento horizontal.

## Subir a Git

```bash
git init
git add .
git commit -m "Versión inicial: interfaz web responsiva Café Andino"
git branch -M main
git remote add origin <URL_DE_TU_REPOSITORIO>
git push -u origin main
```
