import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeeDetailsComponent } from './coffee-details.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

describe('CoffeeDetailsComponent', () => {
  let component: CoffeeDetailsComponent;
  let fixture: ComponentFixture<CoffeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxPaginationModule],
      providers: [provideMockStore({})],
      declarations: [CoffeeDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
