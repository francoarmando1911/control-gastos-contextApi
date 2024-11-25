
# Gestor de Gastos

Una aplicación web diseñada para gestionar tus gastos de manera eficiente. Este proyecto utiliza tecnologías modernas como **React**, **TypeScript** y **Tailwind CSS**, junto con diversas herramientas y patrones para garantizar una experiencia de usuario fluida y un código bien estructurado.

## Tecnologías Utilizadas

- **React**: Para la construcción de la interfaz de usuario.
- **TypeScript**: Para garantizar un desarrollo más seguro y estructurado.
- **Tailwind CSS**: Para el diseño y la creación de estilos de manera eficiente.

## Características del Proyecto

### 1. Estado Global con Context API
La aplicación implementa por primera vez el **Context API** junto con el hook `useContext` para manejar un estado global, permitiendo compartir datos entre componentes de forma sencilla.

### 2. Reducers y Helpers
Se utilizan reducers para manejar la lógica del estado de manera centralizada y helpers para optimizar funciones repetitivas o específicas.

### 3. Custom Hook: useBudget
Un hook personalizado llamado `useBudget` permite encapsular la lógica relacionada con el presupuesto, facilitando su reutilización en diferentes partes de la aplicación.

### 4. Manejo de Fechas
Se utilizan las bibliotecas **react-date-picker** y **react-calendar** para gestionar la selección y visualización de fechas, mejorando la experiencia de usuario al manejar datos relacionados con el tiempo.

### 5. Almacenamiento Local
El uso del **localStorage** permite guardar los datos de gastos de forma persistente, asegurando que los datos no se pierdan al recargar la página.

### 6. Swipeable List
Con la ayuda de **react-swipeable-list**, se ha implementado un efecto de barrido en los botones de **editar** y **eliminar**, proporcionando una experiencia de usuario moderna e intuitiva.

