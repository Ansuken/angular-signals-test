import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy{

    public counter = signal(10);
    public user = signal<User>({
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        id: 2,
        last_name: 'Weaver'
    });
    public fullname = computed(()=>`${this.user().first_name} ${this.user().last_name}`);

    public userChangedEffect = effect( () => {
        console.log('userChangedEffect triggered')
        console.log(`${this.user().first_name} - ${this.counter()}`)
    });

    onFiedlupdated( field: keyof User, value: string ): void {
        this.user.mutate( current => {
            switch( field ) {
                case 'email':
                    current.email = value;
                    break;
                case 'first_name':
                    current.first_name = value;
                    break;
                case 'last_name':
                    current.last_name = value;
                    break;
                case 'id':
                    current.id = Number(value);
                    break;
            }
        })
    }

    increaseBy( value: number ): void {
        this.counter.update(current => current+value)
    }

    ngOnDestroy(): void {
        this.userChangedEffect.destroy();
    }

}
