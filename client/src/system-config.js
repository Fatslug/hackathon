var map = {
    'firebase': 'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2'
};
var packages = {
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    }
};
var barrels = [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    'rxjs',
    'app',
    'app/shared',
    'app/angular-test',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
System.config({ map: map, packages: packages });
