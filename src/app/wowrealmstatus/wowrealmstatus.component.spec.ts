/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WowrealmstatusComponent } from './wowrealmstatus.component';

describe('WowrealmstatusComponent', () => {
  let component: WowrealmstatusComponent;
  let fixture: ComponentFixture<WowrealmstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowrealmstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowrealmstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
