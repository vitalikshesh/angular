import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    providers: [UserService]
})
export class HomeComponent  implements OnInit {
    //типи шаблонів
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    editedUser: User;
    users: Array<User>;
    isNewRecord: boolean;
    statusMessage: string;

    constructor(private serv: UserService) {
        this.users = new Array<User>();
    }

    ngOnInit() {
        this.loadUsers();
    }

    //загрузка користувачів
    private loadUsers() {
        this.serv.getUsers().subscribe((data: User[]) => {
            this.users = data;
        });
    }
    // добавлення користувача
    addUser() {
        this.editedUser = new User(0,"",0);
        this.users.push(this.editedUser);
        this.isNewRecord = true;
    }

    // редагування  користувача
    editUser(user: User) {
        this.editedUser = new User(user.Id, user.Name, user.Age);
    }
    // загружаєм один з двох шаблонів
    loadTemplate(user: User) {
        if (this.editedUser && this.editedUser.Id == user.Id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }
    // зберігаєм користувача
    saveUser() {
        if (this.isNewRecord) {
            // добавлення користувача
            this.serv.createUser(this.editedUser).subscribe(data => {
                this.statusMessage = 'Дані успішно добавлені',
                    this.loadUsers();
            });
            this.isNewRecord = false;
            this.editedUser = null;
        } else {
            // редагування  користувача
            this.serv.updateUser(this.editedUser.Id, this.editedUser).subscribe(data => {
                this.statusMessage = 'Дані успішно оновлені',
                    this.loadUsers();
            });
            this.editedUser = null;
        }
    }
    // відміна
    cancel() {
        // если отмена при добавлении, удаляем последнюю запись
        if (this.isNewRecord) {
            this.users.pop();
            this.isNewRecord = false;
        }
        this.editedUser = null;
    }
    // видалення користувача
    deleteUser(user: User) {
        this.serv.deleteUser(user.Id).subscribe(data => {
            this.statusMessage = 'Дані видалено успішно',
                this.loadUsers();
        });
    }
}