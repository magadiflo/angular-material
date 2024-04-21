# Angular Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

**Capítulos**
- Capítulo 1: [Cómo instalar Angular Material en Angular 17](https://www.youtube.com/watch?v=2izPvkchsoA)
- Capítulo 2: [Theming Angular Material](https://material.angular.io/guide/theming#defining-a-theme)

---

# Capítulo 1: [Cómo instalar Angular Material en Angular 17](https://www.youtube.com/watch?v=2izPvkchsoA)


## [Instalando Angular Material](https://material.angular.io/guide/getting-started)

Utilizando la terminal nos posicionamos en la raíz del proyecto de Angular y ejecutamos el siguiente comando `ng add @angular/material`, en el proceso de instalación iremos respondiendo ciertas preguntas:

```bash
$ ng add @angular/material

i Using package manager: npm
√ Found compatible package version: @angular/material@17.3.5.
√ Package information loaded.

The package @angular/material@17.3.5 will be installed and executed.
Would you like to proceed? Yes
√ Packages successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Purple/Green [ Preview: https://material.angular.io?theme=purple-green ]
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1113 bytes)
√ Packages installed successfully.
UPDATE src/app/app.config.ts (366 bytes)
UPDATE angular.json (3055 bytes)
UPDATE src/index.html (544 bytes)
UPDATE src/styles.scss (182 bytes)
```

¡Ya terminaste! Angular Material ahora está configurado para usarse en su aplicación.

**IMPORTANTE**

> Una vez instalado `Angula Material` es muy importante que detengamos el proyecto y volvamos a levantarlo para que los cambios instalados se apliquen correctamente.

## Creando componente: mat-toolbar

Crearemos un componente de Angular para incorporar algún componente de Angular Material y ver cómo es que se ve en nuestro proyecto:

```bash
$ ng g c header --skip-tests
CREATE src/app/header/header.component.html (22 bytes)
CREATE src/app/header/header.component.ts (247 bytes)
CREATE src/app/header/header.component.scss (0 bytes)
```

En el componente `header.component.html` agregamos el siguiente código:

```html
<mat-toolbar>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>Angular Material</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
```

Mientras que en el componente `header.component.ts` de tipo standalone de typescript importamos los módulos de Angular material que estamos usando en el componente de `html`:

```typescript
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
```

Ahora, para mostrar el componente `HeaderComponent` debemos importarlo en el componente `AppComponent` dentro de la sección de `imports` dado que
hemos creado el componente `HeaderComponent` del tipo StandAlone Component.

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
```

En el componente html `app.component.html` agregamos el selector del componente creado:

```html
<app-header />
```

## Creando componente: mat-table

Vamos a crear un componente en Angular par mostrar el componente de table de Angular material. Para eso creamos nuestro componente `table.component`:

```bash
$ ng g c table --skip-tests
CREATE src/app/table/table.component.html (21 bytes)
CREATE src/app/table/table.component.ts (243 bytes)
CREATE src/app/table/table.component.scss (0 bytes)
```

En el componente `table.component.html` agregamos el html de ejemplo mostrado en la página de Angular Material:

```html
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!-- Checkbox Column -->
  <ng-container matColumnDef="select">
    <th mat-header-cell *matHeaderCellDef>
      <mat-checkbox (change)="$event ? toggleAllRows() : null" [checked]="selection.hasValue() && isAllSelected()"
        [indeterminate]="selection.hasValue() && !isAllSelected()" [aria-label]="checkboxLabel()">
      </mat-checkbox>
    </th>
    <td mat-cell *matCellDef="let row">
      <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? selection.toggle(row) : null"
        [checked]="selection.isSelected(row)" [aria-label]="checkboxLabel(row)">
      </mat-checkbox>
    </td>
  </ng-container>

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="selection.toggle(row)">
  </tr>
</table>
```

En el componente de typescript agregamos loa módulos requeridos:

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
```

## Creando componente: mat-slide-toggle

Crearemos el componente `slide-toggle`:

```bash
$ ng g c slideToggle --skip-tests
CREATE src/app/slide-toggle/slide-toggle.component.html (28 bytes)
CREATE src/app/slide-toggle/slide-toggle.component.ts (270 bytes)
CREATE src/app/slide-toggle/slide-toggle.component.scss (0 bytes)
```

```html
<section>
  <mat-slide-toggle class="example-margin" [checked]="checked" [disabled]="disabled">
    Slide me!
  </mat-slide-toggle>
</section>
```

```css
section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 50px;
  padding: 10px;
}
```

```typescript
@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss'
})
export class SlideToggleComponent {
  checked = false;
  disabled = false;
}
```

Luego, este componente lo importamos en el componente `AppComponent` y lo agregamos en el correspondiente html.



## Viendo componentes

A continuación se muestra los componentes de Angular material utilizados en esta demostración:

![componentes usando angular material](./src/assets/01.componentes-usando-angular-material.png)

---

# Capítulo 2: [Theming Angular Material](https://material.angular.io/guide/theming#defining-a-theme)

---


## ¿Qué es la tematización?

El sistema de temas de Angular Material le permite personalizar los estilos de `base`, `color`, `tipografía` y `densidad` para los componentes de su aplicación. **El sistema de temas se basa en la especificación Material Design de Google.**

Este documento describe los conceptos y las API para personalizar colores. Para personalizar la tipografía, consulte [Tipografía de angular material](https://material.angular.io/guide/typography). Para obtener orientación sobre cómo crear componentes que se puedan personalizar con este sistema, consulte [Tematización de sus propios componentes](https://material.angular.io/guide/theming-your-components).

## SASS (SCSS)

Las API de temática de Angular Material están construidas con `Sass`. Este documento asume familiaridad con los conceptos básicos de CSS y Sass, incluidas `variables`, `funciones` y `mixins`.

Puede utilizar Angular Material sin Sass utilizando un tema prediseñado. Sin embargo, el uso directo de la biblioteca de la API Sass le brinda el mayor control sobre los estilos en su aplicación.

## Paletas

**Una paleta es una colección de colores** que representan una parte del espacio de color. **Cada valor de esta colección se llama `tono`.** En `Material Design`, **cada tono de una paleta tiene un número identificador.** Estos números identificadores incluyen `50` y luego cada valor `100` entre `100` y `900`. **Los números ordenan los tonos dentro de una paleta del más claro al más oscuro.**

`Angular Material` representa una paleta como un `mapa de Sass`. **Este mapa contiene los `tonos de la palet`a y otro mapa anidado de `colores de contraste` para cada uno de los tonos.** Los colores de contraste sirven como color de texto cuando se utiliza un tono como color de fondo. El siguiente ejemplo demuestra la estructura de una paleta. [Consulte el sistema de color de Material Design para obtener más información.](https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes)

```scss
$indigo-palette: (
 50: #e8eaf6,
 100: #c5cae9,
 200: #9fa8da,
 300: #7986cb,
 // ... continúa hasta el 900
 contrast: (
   50: rgba(black, 0.87),
   100: rgba(black, 0.87),
   200: rgba(black, 0.87),
   300: white,
   // ... continúa hasta el 900
 )
);
```

## Crea tu propia paleta

Puede crear su propia paleta definiendo un `mapa Sass` que coincida con la estructura descrita en la sección Paletas anterior. El mapa debe definir tonos para `50` y cada cien entre `100` y `900`. El mapa `también debe definir un mapa de contraste` con colores de contraste para cada tono.

## Paletas predefinidas

Paletas predefinidas
Angular Material ofrece paletas predefinidas basadas en la versión 2014 de la especificación Material Design. [Consulte las paletas de colores de Material Design 2014 para obtener una lista completa.](https://m1.material.io/style/color.html#color-color-palette)

Además de los tonos numerados del cero al 900, las paletas de Material Design 2014 incluyen distintos tonos de acento numerados como A100, A200, A400 y A700. **Angular Material no requiere estos tonos, pero puede usarlos** al definir un tema como se describirá en la sección **definición de un tema.**

```scss
@use '@angular/material' as mat;

$my-palette: mat.$indigo-palette;
```
