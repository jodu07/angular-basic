import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listad/listado.component";

@NgModule({
    //componentes que tengo aquí
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //exports= significa que cosas quiero hacer publicas o visibles fuera de este modulo
    exports: [
        ListadoComponent
    ],
    // imports= solo van modulos aqui dentro
    imports: [

        //CommonModule ofrece directivas de angular con ngFor nfIf
        CommonModule
    ]

})
export class HeroesModule {

}