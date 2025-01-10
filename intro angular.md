# intro angular
# What's Angular 
>> Javascript Framework [build single page application (spa)].
>> Angular Arch consistes group of components.
>> Moduls are groups of components | Standalone Component groups of components.
>> we can transaction between pages without reload.
>> ssr [server]
>> csr [client]

# install angular project
* install nodejs
* install npm [default is setup with install Nodejs]
* install npm install -g @angular/cli [tool packege] [run command on cmd]
* ng new projectName [run command on cmd]

# Angular Architecture based on Components
>> Index.html >> <app-root></app-root> >> <app-component></app-component> >> Group of Components (Site Pages).

# Angular Server start
* ng serve --open

# Angular Serer stop
* ctrl + c

# Angular Files
* .angular >> build project
* .vscode >> vscode settings
* .node_modules >> contain on all packages downloaded by npm
* .src >> works on project here | app >> works on project here | assets >> images - fonts - vidoes
* .editorconfig >> contain on vscode configuration
* .gitignore >> deleted files when upload project on github
* angule.json >> responsible about all angular project configuration 
* package.json >> contain on packages we uses in project
* README >> notes
* tsconfig.json >> typescript configuration

# Components Details
* selector >> component name ('app-components name')
* standalone >> 
* imports >> route component name or other modules
* templateUrl >> HTML components path
* styleUrl >> CSS components path
* export class component name

# Components Generate
* ng generate component component name
* for %n in (components names)

# Tools Download (Bootstrap - Fontawesome)
* npm install bootstrap
* npm install @fortawesome/fontawesome-free

# Angular.json Configuration
* any css files put in styles array
* any js files put in scripts array

