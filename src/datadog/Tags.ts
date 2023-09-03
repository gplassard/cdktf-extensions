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
  