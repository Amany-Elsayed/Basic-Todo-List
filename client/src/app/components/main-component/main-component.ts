import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../models/todo-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent implements OnInit{
  todos: Todo[] = []
  newTodo = ''

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() {
    this.todoService.allTodos().subscribe((data) => {
      this.todos = data
    })
  }

  addTodo() {
    if (!this.newTodo.trim()) return

    this.todoService.addTodo(this.newTodo).subscribe((todo) => {
      this.todos.push(todo)
      this.newTodo = ''
    })
  }


}
