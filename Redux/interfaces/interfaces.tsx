import AppConfig from "./AdditionalInterfaces/AppConfig";

export interface AppState {
  loading: boolean
  error: string
  config: AppConfig
}

