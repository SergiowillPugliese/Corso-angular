import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="#" class="navbar-brand"></a>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#" (click)="onSelect('recipe')">Recipes</a></li>
                        <li><a href="#" (click)="onSelect('shopping-list')">Shopping List</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown" appDropdown>
                            <a href="#" class="dropdown-toggle btn-group" role="button">Manage <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Save Data</a></li>
                                <li><a href="#">Fetch Data</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
})
export class HeaderComponent {
    @Output() featurSelected = new EventEmitter<string>();
    
    onSelect(feature: string){
        this.featurSelected.emit(feature)
    }
}