# [Cómo instalar Angular Material en Angular 17](https://www.youtube.com/watch?v=2izPvkchsoA)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.


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

## Creando un componente

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


