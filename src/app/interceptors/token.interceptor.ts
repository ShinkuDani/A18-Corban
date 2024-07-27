import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const eToken = localStorage.getItem('token');
  const authHeader = `Bearer ${eToken}`;

  let newReq = req.clone();

  if (eToken) {
    newReq = req.clone({
      headers: req.headers
        .set('Authorization', authHeader)
    });
  }

  return next(newReq);
};
