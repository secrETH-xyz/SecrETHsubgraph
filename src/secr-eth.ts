import { BigInt, ethereum } from "@graphprotocol/graph-ts"
import {
  SecrETH,
  DecryptionCalled,
  DecryptionReady,
  DecryptionReadyIncentivized,
  JoinNetworkRequest
} from "../generated/SecrETH/SecrETH"
import { SecrETH as SecrETHschema } from "../generated/schema"


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

function getSecrethInstance<T extends ethereum.Event>(event: T): SecrETHschema {
  let id = event.address.toString()
  let secreth = SecrETHschema.load(id)
  if (!secreth) {
    secreth = new SecrETHschema(id)
  }
  return secreth
}