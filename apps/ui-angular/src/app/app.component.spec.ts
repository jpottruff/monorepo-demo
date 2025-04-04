import { TestBed } from '@angular/core/testing';
import { mockActivatedRoute } from '../__mocks__/activated-route.mock';
import { mockHttpClientDeps } from '../__mocks__/http-client.mock';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [mockActivatedRoute(), ...mockHttpClientDeps()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
