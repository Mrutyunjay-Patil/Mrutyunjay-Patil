import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCertificationsComponent } from './awards-certifications.component';

describe('AwardsCertificationsComponent', () => {
  let component: AwardsCertificationsComponent;
  let fixture: ComponentFixture<AwardsCertificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardsCertificationsComponent]
    });
    fixture = TestBed.createComponent(AwardsCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
