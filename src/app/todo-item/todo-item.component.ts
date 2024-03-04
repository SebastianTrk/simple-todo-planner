import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input() todo!: Todo  
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()



  onTodoClicked() {
    this.todoClicked.emit()
  }

  onEditClicked() {
    this.editClicked.emit()
  }

  onDeleteClicked() {
    this.deleteClicked.emit()
  }
}
