import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminProfileComponent} from './features/admin/admin-profile/admin-profile.component';
import {PatientRegisterComponent} from './features/shared/patient-register/patient-register.component';
import {PatientResultComponent} from './features/patient/patient-result/patient-result.component';
import {LoginComponent} from './features/shared/login/login.component';
import {DoctorProfileComponent} from './features/doctor/doctor-profile/doctor-profile.component';
import {AddResultComponent} from './features/doctor/add-result/add-result.component';
import {AddDispatcherComponent} from './features/admin/add-dispatcher/add-dispatcher.component';
import {AddEmployeeComponent} from './features/admin/add-employee/add-employee.component';
import {AddJobComponent} from './features/admin/add-job/add-job.component';
import {AddTestComponent} from './features/admin/add-test/add-test.component';
import {AddDepartmentComponent} from './features/admin/add-department/add-department.component';
import {TestsListComponent} from './features/shared/tests-list/tests-list.component';
import {EditDepartmentComponent} from './features/admin/edit-department/edit-department.component';
import {EditDispatcherComponent} from './features/admin/edit-dispatcher/edit-dispatcher.component';
import {DeleteDepartmentComponent} from './features/admin/delete-department/delete-department.component';
import {DeleteDispatcherComponent} from './features/admin/delete-dispatcher/delete-dispatcher.component';
import {EditTestComponent} from './features/admin/edit-test/edit-test.component';
import {DeleteTestComponent} from './features/admin/delete-test/delete-test.component';
import {EditJobComponent} from './features/admin/edit-job/edit-job.component';
import {DeleteJobComponent} from './features/admin/delete-job/delete-job.component';
import {DeleteEmployeeComponent} from './features/admin/delete-employee/delete-employee.component';
import {BillListComponent} from './features/admin/bill-list/bill-list.component';
import {EditEmployeeComponent} from './features/admin/edit-employee/edit-employee.component';
import {ListEmployeeComponent} from './features/admin/list-employee/list-employee.component';
import {ListJobComponent} from './features/admin/list-job/list-job.component';
import {ListDepartmentComponent} from './features/admin/list-department/list-department.component';
import {ListPatientComponent} from './features/admin/list-patient/list-patient.component';
import {ListDispatcherComponent} from './features/admin/list-dispatcher/list-dispatcher.component';
import {EditResultComponent} from './features/doctor/edit-result/edit-result.component';
import {AddBillComponent} from './features/dispatcher/add-bill/add-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    PatientRegisterComponent,
    PatientResultComponent,
    LoginComponent,
    DoctorProfileComponent,
    AddResultComponent,
    AddDispatcherComponent,
    AddEmployeeComponent,
    AddJobComponent,
    AddTestComponent,
    AddDepartmentComponent,
    TestsListComponent,
    EditDepartmentComponent,
    EditDispatcherComponent,
    DeleteDepartmentComponent,
    DeleteDispatcherComponent,
    EditTestComponent,
    DeleteTestComponent,
    EditJobComponent,
    DeleteJobComponent,
    DeleteEmployeeComponent,
    BillListComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    ListJobComponent,
    ListDepartmentComponent,
    ListPatientComponent,
    ListDispatcherComponent,
    EditResultComponent,
    AddBillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
