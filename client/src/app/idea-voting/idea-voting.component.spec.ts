/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IdeaVotingComponent } from './idea-voting.component';

describe('Component: IdeaVoting', () => {
  it('should create an instance', () => {
    let component = new IdeaVotingComponent();
    expect(component).toBeTruthy();
  });
});
