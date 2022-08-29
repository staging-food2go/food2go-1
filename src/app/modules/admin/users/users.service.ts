import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { User } from './users.types';

@Injectable({
    providedIn: 'root'
})
export class UsersService
{
    // Private
    private _user: BehaviorSubject<User | null> = new BehaviorSubject(null);
    private _users: BehaviorSubject<User[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for user
     */
    get user$(): Observable<User>
    {
        return this._user.asObservable();
    }

    /**
     * Getter for users
     */
    get users$(): Observable<User[]>
    {
        return this._users.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get users
     */
    getUsers(): Observable<User[]>
    {
        return this._httpClient.post<User[]>(environment.API_ENDPOINT + '/v1/user/getall', {search: ''}).pipe(
            tap((response: any) => {
                const users: User[] = response['result'];
                this._users.next(users);
            })
        );
    }

    /**
     * Search users with given query
     *
     * @param query
     */
    searchUsers(query: string): Observable<User[]>
    {
        return this._httpClient.post<User[]>(environment.API_ENDPOINT + '/v1/user/getall', {search: query}).pipe(
            tap((response: any) => {
                const users: User[] = response['result'];
                this._users.next(users);
            })
        );
    }

    /**
     * Get user by id
     */
    getUserById(id: string): Observable<User>
    {
        return this._users.pipe(
            take(1),
            map((users) => {

                // Find the user
                const user = users.find(item => item.id == id) || null;

                // Update the user
                this._user.next(user);

                // Return the user
                return user;
            }),
            switchMap((user) => {

                if ( !user )
                {
                    return throwError('Could not found user with id of ' + id + '!');
                }

                return of(user);
            })
        );
    }

    /**
     * Create user
     */
    createUser(): Observable<User>
    {
        const payload: User = {
            first_name: 'default firstname',
            last_name: 'default lastname',
            email: 'default@email.com',
            password: 'password',
            status: 'inactive',
            role: 'client'
        };
        return this.users$.pipe(
            take(1),
            switchMap(users => this._httpClient.post<User>(environment.API_ENDPOINT + '/v1/user', payload).pipe(
                map((response: any) => {
                    const newUser: User = response['result'];
                    // Update the users with the new user
                    this._users.next([newUser, ...users]);

                    // Return the new user
                    return newUser;
                })
            ))
        );
    }

    /**
     * Update user
     *
     * @param id
     * @param user
     */
    updateUser(id: string, user: User): Observable<User>
    {
        return this.users$.pipe(
            take(1),
            switchMap(users => this._httpClient.post<User>(environment.API_ENDPOINT + '/v1/user/update', user).pipe(
                map((response:any) => {
                    const updatedUser: User =response['result'];
                    // Find the index of the updated user
                    const index = users.findIndex(item => item.id === id);

                    // Update the user
                    users[index] = updatedUser;

                    // Update the users
                    this._users.next(users);

                    // Return the updated user
                    return updatedUser;
                }),
                 switchMap(updatedUser => this.user$.pipe(
                    take(1),
                    filter(item => item && item.id === id),
                    tap(() => {

                        // Update the user if it's selected
                        this._user.next(updatedUser);

                        // Return the updated user
                        return updatedUser;
                    })
                ))
               
            ))
        );
    }

    /**
     * Delete the user
     *
     * @param id
     */
    deleteUser(id: string): Observable<boolean>
    {
        return this.users$.pipe(
            take(1),
            switchMap(users => this._httpClient.delete(environment.API_ENDPOINT + '/v1/user/' + id).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted user
                    const index = users.findIndex(item => item.id === id);

                    // Delete the user
                    users.splice(index, 1);

                    // Update the users
                    this._users.next(users);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

    /**
     * Update the avatar of the given user
     *
     * @param id
     * @param avatar
     */
    // uploadAvatar(id: string, avatar: File): Observable<User>
    // {
    //     return this.users$.pipe(
    //         take(1),
    //         switchMap(users => this._httpClient.post<User>('api/apps/users/avatar', {
    //             id,
    //             avatar
    //         }, {
    //             headers: {
    //                 // eslint-disable-next-line @typescript-eslint/naming-convention
    //                 'Content-Type': avatar.type
    //             }
    //         }).pipe(
    //             map((updatedContact) => {

    //                 // Find the index of the updated user
    //                 const index = users.findIndex(item => item.id === id);

    //                 // Update the user
    //                 users[index] = updatedContact;

    //                 // Update the users
    //                 this._users.next(users);

    //                 // Return the updated user
    //                 return updatedContact;
    //             }),
    //             switchMap(updatedContact => this.user$.pipe(
    //                 take(1),
    //                 filter(item => item && item.id === id),
    //                 tap(() => {

    //                     // Update the user if it's selected
    //                     this._user.next(updatedContact);

    //                     // Return the updated user
    //                     return updatedContact;
    //                 })
    //             ))
    //         ))
    //     );
    // }
   
}
