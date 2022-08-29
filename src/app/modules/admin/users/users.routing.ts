import { Route } from '@angular/router';
import { UsersDetailsComponent } from './details/details.component';
import { UsersListComponent } from './list/list.component';
import { UsersComponent } from './users.component';
import { CanDeactivateUsersDetails } from './users.guards';
import { UsersResolver, UsersUserResolver } from './users.resolvers';

export const usersRoutes: Route[] = [
    {
        path     : '',
        component: UsersComponent,
        children : [
            {
                path     : '',
                component: UsersListComponent,
                resolve  : {
                    users : UsersResolver,
                },
                children : [
                    {
                        path         : ':id',
                        component    : UsersDetailsComponent,
                        resolve      : {
                            user  : UsersUserResolver,
                        },
                        canDeactivate: [CanDeactivateUsersDetails]
                    }
                ]
            }
        ]
    }
];
