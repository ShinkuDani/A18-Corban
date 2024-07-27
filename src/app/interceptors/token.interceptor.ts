import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const autReq = req.clone({
    headers: req.headers
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2QxMzA2ZTAtZTUxZS00ODY2LWEzZmQtZjM4MjE3ZGQ1MmIyIiwic2Vzc2lvbl9pZCI6ImNmMTEzZDQ2LWE3ZTQtNDRiMS04ZTg2LThlZmJjNmNiNjFiMiIsInNpZ25hbF9pZCI6ImVlY2Y0NDZmLWM1ZGEtNDAwMS1hYjE4LTIyMWZlODYzYjhmZiIsImhvc3QiOiJodHRwczovL2FwaTQuYWppbi5pby9pbmRleC5odG1sIiwiaXAiOiIxOTEuMTgzLjM4LjQyIiwibmJmIjoxNzIxODY2MDkxLCJleHAiOjE3MjE5NTI0OTEsImlhdCI6MTcyMTg2NjA5MX0.98mibH3gHtNqltS1IP0qrMYeh9NMK5ZEypPdCa472Ko')
});

  return next(autReq);
};
