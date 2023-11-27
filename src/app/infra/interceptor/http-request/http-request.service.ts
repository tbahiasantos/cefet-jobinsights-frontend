import { HttpClient, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../token/token.service';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken();
        let modifiedRequest = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': 'https://localhost:4200'
            }
        });
        if (token) {
            modifiedRequest = request.clone({
                setHeaders: {
                    "Authorization": "Bearer " + token
                }
            });
        }

        return next.handle(modifiedRequest);
    }
}