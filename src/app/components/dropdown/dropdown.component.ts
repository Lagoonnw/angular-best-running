import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output
}             from '@angular/core';

@Component({
  selector   : 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements AfterViewInit {
  @Input() options: string[] = [];
  @Input() title: string;
  @Output() optionClick: EventEmitter<{ type: string, value: string | null }> = new EventEmitter<{ type: string; value: string | null }>();

  constructor() {
  }

  ngAfterViewInit() {

  }

}
