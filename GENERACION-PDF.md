# Generación del PDF

El PDF del diagnóstico se genera desde `Diagnóstico crítico sitio Colegio Capellán Pascal.html`
mediante `generate-pdf.js`.

La configuración de impresión usa explícitamente `displayHeaderFooter: false` y no define
`headerTemplate` ni `footerTemplate`. De esta forma, el navegador no agrega la URL local,
la fecha, la hora ni la numeración automática de páginas.

## Uso

```powershell
npm install
npm run generate:diagnostico
```

El archivo PDF se escribe en la raíz del proyecto. No debe modificarse posteriormente con
reemplazos binarios: cualquier ajuste debe hacerse en el generador y volver a exportar.
