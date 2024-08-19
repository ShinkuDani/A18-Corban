import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedClientComponent } from './detailed-client.component';

describe('DetailedClientComponent', () => {
  let component: DetailedClientComponent;
  let fixture: ComponentFixture<DetailedClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
