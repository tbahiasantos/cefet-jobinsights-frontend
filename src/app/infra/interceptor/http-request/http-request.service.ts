import { HttpClient, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../token/token.service';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    token: string;

    constructor(private tokenService: TokenService) {
        this.token = tokenService.getToken();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modifiedRequest = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': 'https://localhost:4200'
            }
        });
        if (this.token) {
            modifiedRequest = request.clone({
                setHeaders: {
                    "Authorization": "Bearer " + this.token
                }
            });
        }

        return next.handle(modifiedRequest);
    }
}