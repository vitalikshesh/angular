import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService{

    private url = "http://localhost:64269/api/users/";
    constructor(private http: HttpClient){ }

    getUsers(){
        return this.http.get(this.url);
    }

    createUser(user: User){
        return this.http.post(this.url, user);
    }
    updateUser(id: number, user: User) {
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.put(this.url, user, { params: urlParams});
    }
    deleteUser(id: number){
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.delete(this.url, { params: urlParams});
    }
}