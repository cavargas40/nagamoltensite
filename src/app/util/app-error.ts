// import { NgModule } from '@angular/core';

// @NgModule({
//     exports:[AppErrorModule]
// })

export class AppError {
    public handleError(error: any): Promise<any> {
        console.error('Ha ocurrido un error: ', error); //con proposito de demostracion unicamente
        return Promise.reject(error.message || error);
    }
}