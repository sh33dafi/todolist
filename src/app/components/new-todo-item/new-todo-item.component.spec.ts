import {TestBed, async} from "@angular/core/testing";

import {NewTodoItemComponent} from "./new-todo-item.component";
import {ReactiveFormsModule} from "@angular/forms";
import {Todo} from '../../model/Todo';

describe("NewTodoItemComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        NewTodoItemComponent
      ],
    }).compileComponents();
  }));

  it("should create the component", async(() => {
    const fixture = TestBed.createComponent(NewTodoItemComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(NewTodoItemComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("input").getAttribute("placeholder")).toContain("What do you want to get done?");
  }));

  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(NewTodoItemComponent);
    const component = fixture.componentInstance;
    spyOn(component.onAddTodo, "emit");

    // trigger the click
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector("input");
    input.dispatchEvent(new KeyboardEvent("keyup", {key: "Enter"}));

    fixture.detectChanges();

    expect(component.onAddTodo.emit).toHaveBeenCalledWith(new Todo(""));
  }));

});
