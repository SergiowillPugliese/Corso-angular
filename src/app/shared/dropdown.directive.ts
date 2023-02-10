import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    /* aggiunge una classe all'elemento cliccato su cui è aggiunta questa direttiva
    e rimuove la classe se si clicca di nuovo
    */
    //dico su quale attributo su cui mi voglio agganciare. in questo caso la classe, ma
    //potrebbe anche essere lo stile o altri attributi del tag html
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        //imposto open su quello che non è attualmente
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef){}
}


