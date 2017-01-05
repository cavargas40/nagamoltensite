import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
    //usa un backend falso de un servicio http para hacer el ejemplo de login.
    provide: Http,
    userFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        //array en local storage para los usuarios registrados
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        //configura el backend falso
        backend.connections.subscribe((connection: MockConnection) => {
            //envuelto en un timeout para simular la llamada del api.
            setTimeout(() => {
                //autenticacion
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    //obtiene los parametros de un POST request
                    let params = JSON.parse(connection.request.getBody());

                    //busca si algun usuario concueda con las credenciales de ingreso
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password
                    });

                    //si los detalles del login son validos returna un 200 OK con los detalles del usuario y un token falso jwt
                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: user.id,
                                username: user.username,
                                firstName: user.FirstName,
                                lastName: user.LastName,
                                token: 'fake-jwt-token'
                            }
                        })));
                    }
                    else {
                        //si no retorna un 400 Bad Request
                        connection.mockError(new Error('Usuario o contraseña invalidos.'));
                    }

                    //obtiene los usuarios
                    if (connection.request.url.endsWith('/api/users')) {
                        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                        if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
                        } else {
                            // return 401 not authorised if token is null or invalid
                            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                        }
                    }

                    // get user by id
                    if (connection.request.url.match(/\/api\/users\/\d+$/)) {
                        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                        if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                            // find user by id in users array
                            let urlParts = connection.request.url.split('/');
                            let id = parseInt(urlParts[urlParts.length - 1]);
                            let matchedUsers = users.filter(user => { return user.id === id; });
                            let user = matchedUsers.length ? matchedUsers[0] : null;

                            // respond 200 OK with user
                            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: user })));
                        } else {
                            // return 401 not authorised if token is null or invalid
                            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                        }
                    }

                    // create user
                    if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
                        // get new user object from post body
                        let newUser = JSON.parse(connection.request.getBody());

                        // validation
                        let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                        if (duplicateUser) {
                            return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
                        }

                        // save new user
                        newUser.id = users.length + 1;
                        users.push(newUser);
                        localStorage.setItem('users', JSON.stringify(users));

                        // respond 200 OK
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                    }

                    // delete user
                    if (connection.request.url.match(/\/api\/users\/\d+$/)) {
                        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                        if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                            // find user by id in users array
                            let urlParts = connection.request.url.split('/');
                            let id = parseInt(urlParts[urlParts.length - 1]);
                            for (let i = 0; i < users.length; i++) {
                                let user = users[i];
                                if (user.id === id) {
                                    // delete user
                                    users.splice(i, 1);
                                    localStorage.setItem('users', JSON.stringify(users));
                                    break;
                                }
                            }

                            // respond 200 OK
                            connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                        } else {
                            // return 401 not authorised if token is null or invalid
                            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                        }
                    }
                }
            }, 500);
        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};