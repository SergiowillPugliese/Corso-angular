import { Directive, HostBinding, HostListener } from "@angular/core";

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

   @HostListener('click') toggleOpen() {
    //imposto open su quello che non è attualmente
    this.isOpen = !this.isOpen;
   }

}