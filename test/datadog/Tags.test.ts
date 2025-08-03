import { describe, expect, it } from 'vitest';
import { toDatadogTags } from '../../src';

describe('Tags.toDatadogTags', () => {
  it('should format the tags correctly for datadog', () => {
    const result = toDatadogTags({
      app: 'test-app',
      env: 'test-env',
      repo: 'test-repo',
      scope: 'test-scope',
      team: 'test-team',
      infraAsCode: 'test-infraAsCode' as any,
      bonus: 'test-bonus',
    });
    expect(result).toEqual([
      'app:test-app',
      'env:test-env',
      'repo:test-repo',
      'scope:test-scope',
      'team:test-team',
      'infraAsCode:test-infraAsCode',
      'bonus:test-bonus',
    ]);
  });
});
