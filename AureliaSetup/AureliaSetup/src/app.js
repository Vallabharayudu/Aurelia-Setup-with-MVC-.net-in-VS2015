export class App {
    configureRouter(config, router){
        config.title = 'Aurelia';
        config.map([
          { route: ['','welcome'],  name: 'welcome',  moduleId: './welcome',  nav: true, title:'Welcome' },
          { route: 'Bindable',  name: 'Bindable',  moduleId: './Bindable',  nav: true, title:'Bindable Custom Element' },
          { route: 'repeatFor',  name: 'repeatFor',  moduleId: './repeatFor',  nav: true, title:'RepeatFor' },
          { route: 'Users',  name: 'Users',  moduleId: './Users/ListOfUsers',  nav: true, title:'Users' },
          { route: 'tabelEdit',  name: 'tabelEdit',  moduleId: './Users/tabelEdit',  nav: true, title:'Tabel Editor' }


        ]);

        this.router = router;
    }
}
