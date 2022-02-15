import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";



@NgModule({
    //componentes que tengo aquí
    declarations: [
        ContadorComponent,        
    ],
    //exports= significa que cosas quiero hacer publicas o visibles fuera de este modulo
    exports: [
        ContadorComponent
    ],
    // imports= solo van modulos aqui dentro
    imports: [

        //CommonModule ofrece directivas de angular con ngFor nfIf
        CommonModule
    ]

})
export class ContadorModule {

}