# Posts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# openclassroom_angular_activity_1

Instructions
Vous allez :
créer un service qui stockera l'array des posts et pourra les émettre sous forme de Subject — le service permettra également l'ajout d'un nouveau post et la suppression d'un post existant
intégrer un bouton "Supprimer post" sur chaque PostListItemComponent
créer un nouveau component, NewPostComponent, qui comportera un formulaire (méthode template ou réactive au choix) qui permettra à l'utilisateur d'entrer le titre et le contenu d'un nouveau post — ce nouveau post sera ensuite créé et ajouté au service, et l'utilisateur sera redirigé vers la liste des posts
intégrer un menu de navigation en haut (avec le routing correspondant), permettant de naviguer vers la liste des posts (/posts) et vers le formulaire (/new) (le path vide sera redirigé vers le path /posts) — le lien du menu correspondant à la route active comportera la classe active
faire en sorte que le changement du nombre de loveIts soit enregistré dans le service

