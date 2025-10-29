# Universal Theme for Amplify

## Description
The purpose of this project is to implement a theme that can be changed its color, font, component other attributes on demand we using CSS variables. It will also include some of the common packages that is used by our system like select2 library dataTables and other relevant source file. The program will also include a JavaScript customization class that will Handle the side interactivity functionality like sticky header non sticky header static sidebar, etc.

## Deadline
30 November, 2025

## Tasks:

### Milestone 1:

- **Migrate the task runner from "Grunt" to "Webpack/Laravel Mix".**

Using the **Laravel-mix** standalone setup, migrate the current task runner to Laravel-mix. Made the require changes compile the assets properly. Write proper configuration files.

- **Configure the distribution directory to the assets folder.**

The theme source code produces the compiled files in **dist** directory. Configure the task runner to produce the output to **assets** directory and keep the source code in **src** directory.

- **Migrate all dependencies from static files to package manager-based (latest compatible) versions.**

The Current Task Manager may use very older versions of Node and NPM. Upgrade the **Node** and **NPM** version to the latest LTS version. Please include the **Node** version and **NPM** version into package JSON engine configuration. Use the latest bootstrap4 version. On day of the documentation, latest **bootstrap** version is **4.6.x**. And related library is a **jQuery** **3.5.x**. Ensure that all the libraries are being pulled using the **npm** package manager. if any library has reached end of life support, Configure the latest code available of that library through package manager.

### Milestone 2:

- **Implement Select2 and DataTables plugin integrations.**

As of the currently theme don't support **select2** and **dataTables** plugin integration you need to introduce a component configuration demo pages in **src/templates** directory and link them on component top navbar menu.

Select2 configuration demos:

- Basic setup
- Multiselect setup
- Ajax setup
- List option customization

DataTables configuration demos:

- Basic Setup
- Server Side Rendering setup
- Bootstrap 4 theme setup
- Export Configuration setup
- **Replace hard coded hex color codes with CSS var() functions.**

Replace all the possible hardcoded hex color codes and SASS variables with css variables. To be exact we don't want to remove all the says variable or we wanted to use the sash variable using the CSS bar function.

For example:

**Current SCSS:**
```scss
.btn-primary {
  background-color: $primary;
  color: $white-color;
  border-radius: $btn-radius-base;
}
```

**Expected SCSS:**
```scss
.btn-primary {
  background-color: var(--primary, $primary);
  color: var(--white-color, $white-color);
  border-radius: var(--btn-radius-base, $btn-radius-base);
}
```
Here: --primary, --white-color, --btn-radius-base are css variable alias and the $primary, $white-color, $btn-radius-base are scss variable.

All the CSS variables must have a default fallback SASS variable. Put all the SCSS variables in src/helpers/variables.scss.

If the styles don't have a scss variable for the purpose. Please introduce the variable and use.

_Note: All variables have to write in kebab case. Example:_ **_\$btn-radius, \$font-size-base, \$brand-primary-color,_** _etc._

### Milestone 3:

- **Develop a JavaScript configuration class to handle template interactions.**

Create Vanilla JavaScript class named "**Amplify**" that will take the a JSON object as constructor argument. Where interaction flags will be provided.

Mentioned Configuration:

- Navbar will be a sticky or stay on top
- Page body will have container or container-fluid wrapper.
- **Add a sidebar panel to enable theme customization interactions.**

Create sidebar panel to test the interaction of JS class customization.

## Timeline:

The project task has to deliver in three milestones.

| Milestone   | Suggested Start | Suggested End |
|-------------|-----------------|---------------|
| Milestone 1 | 01 Nov, 2025    | 06 Nov, 2025  |
| Milestone 2 | 08 Nov, 2025    | 20 Nov, 2025  |
| Milestone 3 | 22 Nov, 2025    | 27 Nov, 2025  |

## Disclaimer:

- On each end of working day developer must report an update on <https://support.amplify-b2b.com/> system with given account credentials.
- Any work that suppress the suggested end of project timeline will not be compensated.
- Communication is the key, please ensure an active communication.
- Every milestone delivery will be verified with 2 reviews upon receiving Pull Request.
