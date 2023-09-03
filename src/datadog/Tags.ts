export type DatadogTags = {
  app: string;
  scope: string;
  team: string;
  env: string;
  repo: string;
  infraAsCode: 'cdktf';
} & Record<string, string>;

export interface AdditionalTags {
  server?: string;
}

export function toDatadogTags(tags: DatadogTags): string[] {
  return Object.entries(tags).map(([k, v]) => `${k}:${v}`);
}
