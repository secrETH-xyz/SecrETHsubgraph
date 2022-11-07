import { BigInt, ethereum } from "@graphprotocol/graph-ts"
import {
  SecrETH,
  DecryptionCalled,
  DecryptionReady,
  DecryptionReadyIncentivized,
  JoinNetworkRequest
} from "../generated/SecrETH/SecrETH"
import { secreth_cipher } from "../generated/schema"


export function handleDecryptionCalled(event: DecryptionCalled): void {
  let secreth = getSecrethInstance(event)
  secreth.cipher = event.params.cipher
  secreth.save()
}

export function handleDecryptionReady(event: DecryptionReady): void {
  let secreth = getSecrethInstance(event)
  secreth.cipher = event.params.cipher
  secreth.save()
}

export function handleDecryptionReadyIncentivized(
  event: DecryptionReadyIncentivized
): void {
  let secreth = getSecrethInstance(event)
  secreth.cipher = event.params.cipher
  secreth.save()
}

function getSecrethInstance<T extends ethereum.Event>(event: T): secreth_cipher {
  let id = event.transaction.from.toHexString() + event.transaction.hash.toHexString()
  let secreth = secreth_cipher.load(id)
  if (!secreth) {
    secreth = new secreth_cipher(id)
  }
  return secreth
}