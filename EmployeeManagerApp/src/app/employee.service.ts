import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
//API server base URL
private apiServerUrl = enviroment.apiBaseurl;

//Inject HTTP Client in the constructor
  constructor(private http: HttpClient) { }

//Method to get all employees from API server
public getEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
}
//Method to add new employee to the API server\
public addEmployee(employee: Employee): Observable<Employee>{
  return this.http.post<Employee> (`${this.apiServerUrl}/employee/add`, employee);
}
//Method to update employee details on API serve
public updateEmployee(employee: Employee): Observable<Employee>{
  return this.http.put<Employee> (`${this.apiServerUrl}/employee/update`, employee);
}

// Method to delete an existing employee from the API server
public deleteEmployee(employeeId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
}

}
