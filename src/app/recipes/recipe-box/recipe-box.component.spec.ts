import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBoxComponent } from './recipe-box.component';

describe('RecipeBoxComponent', () => {
  let component: RecipeBoxComponent;
  let fixture: ComponentFixture<RecipeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
