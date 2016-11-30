/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WowtokenComponent } from './wowtoken.component';

describe('WowtokenComponent', () => {
  let component: WowtokenComponent;
  let fixture: ComponentFixture<WowtokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowtokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
