export interface CapacitorSecurityProviderPlugin {
  installIfNeeded(): Promise<{ status: string }>;
}
