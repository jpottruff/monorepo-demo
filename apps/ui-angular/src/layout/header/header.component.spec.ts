import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockActivatedRoute } from '../../__mocks__/activated-route.mock';
import { mockHttpClientDeps } from '../../__mocks__/http-client.mock';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [mockActivatedRoute(), ...mockHttpClientDeps()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
