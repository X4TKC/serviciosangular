import {NgModule} from "@angular/core"
import {MatToolbarModule, MatFormFieldModule, MatInputModule} from "@angular/material";
@NgModule({
    imports:[
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule
    ], exports:[
   
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule
        
    ]
})
export class AngularMaterial{}