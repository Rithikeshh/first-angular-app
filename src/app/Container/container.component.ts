import { Component } from "@angular/core";
@Component({
    selector: 'child-container',
    standalone: true,
    template: `<h1>Child Component</h1>`,
    styleUrl: './container.component.css'

})
class ChildComponent{

}
@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [ChildComponent]
})
export class ContainerComponent{

}


console.log("hello")