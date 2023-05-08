import { WebPlugin } from '@capacitor/core';

import type { CapacitorSecurityProviderPlugin } from './definitions';

export class CapacitorSecurityProviderWeb
  extends WebPlugin
  implements CapacitorSecurityProviderPlugin
{
  async installIfNeeded(): Promise<{ status: string }> {
    return { status: 'NotImplemented' };
  }
}
