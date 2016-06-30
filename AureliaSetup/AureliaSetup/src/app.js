export class App {
    configureRouter(config, router){
        config.title = 'Aurelia';
        config.map([
          { route: ['','welcome'],  name: 'welcome',  moduleId: './welcome',  nav: true, title:'Welcome' },
          { route: 'Bindable',  name: 'Bindable',  moduleId: './Bindable',  nav: true, title:'Bindable Custom Element' }
        ]);

        this.router = router;
    }
}
