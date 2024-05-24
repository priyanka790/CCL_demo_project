import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStorageAccountComponent } from './create-storage-account.component';

describe('CreateStorageAccountComponent', () => {
  let component: CreateStorageAccountComponent;
  let fixture: ComponentFixture<CreateStorageAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStorageAccountComponent]
    });
    fixture = TestBed.createComponent(CreateStorageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
