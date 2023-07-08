import { Component, signal } from '@angular/core';

interface MenuItem {
    title: string;
    route: string;
}
@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

    // menuItems is the reference to the signal
    public menuItems = signal<MenuItem[]>([
        { title: 'Counter', route: 'counter'},
        { title: 'User info', route: 'user-info'},
        { title: 'Mutation', route: 'properties'}
    ]);
    // public menuItems: MenuItem[] = [
    //     { title: 'Counter', route: 'counter'},
    //     { title: 'User info', route: 'user-info'},
    //     { title: 'Mutation', route: 'properties'}
    // ];


}
