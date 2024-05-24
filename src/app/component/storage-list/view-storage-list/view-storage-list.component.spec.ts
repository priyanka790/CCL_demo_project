import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStorageListComponent } from './view-storage-list.component';

describe('ViewStorageListComponent', () => {
  let component: ViewStorageListComponent;
  let fixture: ComponentFixture<ViewStorageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStorageListComponent]
    });
    fixture = TestBed.createComponent(ViewStorageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
