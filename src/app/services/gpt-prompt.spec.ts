import { TestBed } from '@angular/core/testing';

import { GptPrompt } from './gpt-prompt';

describe('GptPrompt', () => {
  let service: GptPrompt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GptPrompt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
