# capacitor-plugin-security-provider

Capacitor plugin with methods to check and update the Android Security Provider.

Android relies on a security Provider to provide secure network communications. However, from time to time, vulnerabilities are found in the default security provider. To protect against these vulnerabilities, Google Play services provides a way to automatically update a device's security provider to protect against known exploits. By calling Google Play services methods, you can help ensure that your app is running on a device that has the latest updates to protect against known exploits.

For example, a vulnerability was discovered in OpenSSL (CVE-2014-0224) that can leave apps open to an on-path attack that decrypts secure traffic without either side knowing. Google Play services version 5.0 offers a fix, but apps must check that this fix is installed. By using the Google Play services methods, you can help ensure that your app is running on a device that's secured against that attack.

## Install

```bash
npm install capacitor-plugin-security-provider
npx cap sync
```

## Usage

```typescript
import { CapacitorSecurityProvider } from 'capacitor-plugin-security-provider';
...
    const result = await CapacitorSecurityProvider.installIfNeeded();
    if (!result.status == SecurityProviderStatus.Success && result.status != SecurityProviderStatus.NotImplemented) {
        // Do not proceed. We have a failure.
    }
```

## API

<docgen-index>

* [`installIfNeeded()`](#installifneeded)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### installIfNeeded()

```typescript
installIfNeeded() => Promise<{ status: string; }>
```

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

--------------------

</docgen-api>
